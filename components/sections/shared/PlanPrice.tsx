"use client";
import { plans } from "@/content/plans";
import { useCurrency } from "@/lib/region";

/** One plan's monthly price in the visitor's currency (lib/region.ts), for places outside the plan cards. */
export function PlanPrice({ plan }: { plan: "creator" | "business" }) {
  const currency = useCurrency();
  const p = plans.find((x) => x.key === plan)!;
  return <>{currency ? `${p.price[currency].m} / month` : " "}</>;
}
