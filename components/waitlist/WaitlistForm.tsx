"use client";
import { useEffect, useId, useState } from "react";
import { Glyph } from "@/components/ui/Glyph";
import { plans } from "@/content/plans";
import { useCurrency } from "@/lib/region";

/**
 * NEXT_PUBLIC_API_URL is written both with and without /api/v1 across the site (lib/links.ts, lib/region.ts),
 * so take the origin either way and add the path here.
 */
const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.useprofaily.com").replace(/\/+$/, "").replace(/\/api\/v1$/, "");
const WAITLIST_URL = `${API_BASE}/api/v1/public/waitlist`;

/**
 * Solomon's booking page. Once the details are saved the visitor is sent there to book a call.
 * Calendly and Cal.com pages get the email filled in. NEXT_PUBLIC_BOOKING_URL overrides the default.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "https://calendly.com/solomoneseme/30mins";
const REDIRECT_AFTER_MS = 1800;

const bookingLink = (email: string): string | null => {
  if (!BOOKING_URL) return null;
  try {
    const url = new URL(BOOKING_URL);
    if (/(^|\.)(calendly\.com|cal\.com)$/.test(url.hostname)) url.searchParams.set("email", email);
    return url.toString();
  } catch {
    return BOOKING_URL;
  }
};

/**
 * The pre-launch waitlist form: an email, who they are, where they post, and the plan they would pick
 * (monthly price in their own currency: naira in Nigeria, dollars elsewhere, as on the pricing page). It posts to the backend
 * (POST /public/waitlist), which adds the person to the Emailit waitlist audience with tags the
 * segments read, and pings Slack. Mobile first: one column, 44px+ targets, 16px field text so iOS
 * doesn't zoom.
 */
const ROLES = [
  { id: "small_business", label: "Small business" },
  { id: "social_media_manager", label: "Social media manager" },
  { id: "creator", label: "Creator" },
] as const;
const CHANNELS = [
  { id: "tiktok", label: "TikTok" },
  { id: "youtube", label: "YouTube" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
] as const;

type Role = (typeof ROLES)[number]["id"];
type Plan = "creator" | "business";
type Channel = (typeof CHANNELS)[number]["id"];

/** Where the visitor came from: ?utm_source= if the link had one (a TikTok bio, a DM), else the referring site. */
const sourceOf = (): string => {
  try {
    const utm = new URLSearchParams(window.location.search).get("utm_source");
    if (utm) return utm.slice(0, 200);
    if (document.referrer) return new URL(document.referrer).hostname;
  } catch {
    /* fall through */
  }
  return "direct";
};

export function WaitlistForm() {
  const uid = useId().replace(/:/g, "");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);
  const currency = useCurrency();
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (state !== "done") return;
    const link = bookingLink(email);
    if (!link) return;
    const t = window.setTimeout(() => window.location.assign(link), REDIRECT_AFTER_MS);
    return () => window.clearTimeout(t);
  }, [state, email]);

  const toggle = (c: Channel) => setChannels((cs) => (cs.includes(c) ? cs.filter((x) => x !== c) : [...cs, c]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    if (!role) return setError("Pick the one that describes you best.");
    if (!channels.length) return setError("Pick at least one channel you post on.");
    if (!plan) return setError("Pick the plan you'd choose.");
    setError(null);
    setState("sending");
    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, channels, plan, currency: currency ?? "usd", source: sourceOf(), website }),
      });
      if (res.ok) return setState("done");
      const body = (await res.json().catch(() => null)) as { error?: { message?: string } } | null;
      setError(body?.error?.message ?? "Something went wrong. Please try again.");
    } catch {
      setError("We couldn't reach Profaily. Check your connection and try again.");
    }
    setState("idle");
  };

  if (state === "done") {
    const link = bookingLink(email);
    return (
      <div className="wl wl-done" role="status">
        <b>You&rsquo;re on the list.</b>
        {link ? (
          <>
            <p>Next, pick a time for a short call so we can set Profaily up with you. Taking you to the calendar…</p>
            <a className="btn btn-primary" href={link}>Book a call</a>
          </>
        ) : (
          <p>We&rsquo;ll email {email} when it&rsquo;s your turn to get in.</p>
        )}
      </div>
    );
  }

  return (
    <form className="wl" onSubmit={submit}>
      <label className="sr-only" htmlFor={`${uid}-email`}>Your email</label>
      <input
        id={`${uid}-email`}
        type="email"
        name="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="wl-group" role="radiogroup" aria-labelledby={`${uid}-role`}>
        <p id={`${uid}-role`} className="wl-q">Which describes you best?</p>
        <div className="wl-chips">
          {ROLES.map((r) => (
            <label key={r.id} className={`wl-chip${role === r.id ? " on" : ""}`}>
              <input type="radio" name={`${uid}-role`} value={r.id} checked={role === r.id} onChange={() => setRole(r.id)} />
              {r.label}
            </label>
          ))}
        </div>
      </div>

      <div className="wl-group" role="group" aria-labelledby={`${uid}-ch`}>
        <p id={`${uid}-ch`} className="wl-q">Where do you post?</p>
        <div className="wl-chips">
          {CHANNELS.map((c) => (
            <label key={c.id} className={`wl-chip${channels.includes(c.id) ? " on" : ""}`}>
              <input type="checkbox" value={c.id} checked={channels.includes(c.id)} onChange={() => toggle(c.id)} />
              <Glyph name={c.id} id={`${uid}-g-${c.id}`} />
              {c.label}
            </label>
          ))}
        </div>
      </div>

      <div className="wl-group" role="radiogroup" aria-labelledby={`${uid}-plan`}>
        <p id={`${uid}-plan`} className="wl-q">Which plan would you choose?</p>
        <div className="wl-plans">
          {plans.map((p) => (
            <label key={p.key} className={`wl-plan${plan === p.key ? " on" : ""}`}>
              <input type="radio" name={`${uid}-plan`} value={p.key} checked={plan === p.key} onChange={() => setPlan(p.key)} />
              <b>{p.name}</b>
              <span className={`wl-price${currency ? "" : " wait"}`} aria-live="polite" aria-busy={!currency}>
                {currency ? <>{p.price[currency].m}<small> / month</small></> : "\u00a0"}
              </span>
              <small className="wl-for">{p.key === "creator" ? "Just you, one brand" : "Teams, approvals, 3 brands"}</small>
            </label>
          ))}
        </div>
      </div>

      <div className="wl-hp" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      {error && <p className="wl-err" role="alert">{error}</p>}

      <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Adding you…" : "Join the waitlist"}
      </button>
      <p className="wl-note">We&rsquo;ll only email you about getting into Profaily.</p>
    </form>
  );
}
