"use client";
import { useEffect, useState } from "react";
import type { Currency } from "@/content/plans";

/** The API the app talks to; the site only asks it one question, which currency a visitor pays in. */
const API = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.useprofaily.com").replace(/\/$/, "");

/** The browser's best guess at a country, sent only as a hint: the API trusts its edge header first (backend billing/country.ts). */
function hint(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Africa/Lagos") return "NG";
    const m = /-([A-Z]{2})\b/.exec(navigator.language);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

let asked: Promise<Currency> | null = null;

/** Same answer the app's plans dialog gets for a new owner: naira where billed in Nigeria, dollars everywhere else. */
function ask(): Promise<Currency> {
  asked ??= (async () => {
    try {
      const h = hint();
      const res = await fetch(`${API}/api/v1/public/billing/region${h ? `?country=${h}` : ""}`, { credentials: "omit", signal: AbortSignal.timeout(4000) });
      if (!res.ok) return "usd";
      const body = (await res.json()) as { currency?: string };
      return body.currency === "NGN" ? "ngn" : "usd";
    } catch {
      return "usd";
    }
  })();
  return asked;
}

/** `null` until the API has answered (so the page never flashes the wrong currency), then "usd" or "ngn". */
export function useCurrency(): Currency | null {
  const [currency, setCurrency] = useState<Currency | null>(null);
  useEffect(() => {
    let live = true;
    ask().then((c) => live && setCurrency(c));
    return () => { live = false; };
  }, []);
  return currency;
}
