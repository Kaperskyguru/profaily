"use client";
import { plans, type Currency } from "@/content/plans";
import { CHECKED, NGN_PER_USD, RATE_DATE, ngn, profaily, soloRows, teamRows, usd, type RivalPricing } from "@/content/compare/pricing";
import { useCurrency } from "@/lib/region";

const [creator, business] = plans;

/** The rival's monthly price in the visitor's currency: dollars as published, or naira at the CBN rate with the dollar price under it. */
function RivalPrice({ amount, basis, currency }: { amount: number; basis?: string; currency: Currency | null }) {
  if (!currency) return <span className="pl-price">&nbsp;</span>;
  if (currency === "usd") {
    return (
      <>
        <span className="pl-price">{usd(amount)}</span>
        {basis && <small>{basis}</small>}
      </>
    );
  }
  return (
    <>
      <span className="pl-price">about {ngn(amount)}</span>
      <small>{`${usd(amount)}${basis ? `, ${basis}` : ""}, billed in US dollars`}</small>
    </>
  );
}

function Block({
  title,
  rival,
  ours,
  theirs,
  rows,
  currency,
  ourPrice,
}: {
  title: string;
  rival: string;
  ours: Record<string, string>;
  theirs: RivalPricing["solo"] | RivalPricing["team"];
  rows: readonly { key: string; label: string }[];
  currency: Currency | null;
  ourPrice: string | null;
}) {
  return (
    <section className="ck-group pl-group" aria-label={title}>
      <header className="ck-group-head">
        <h3>{title}</h3>
      </header>
      <table className="pl-table">
        <thead>
          <tr>
            <th scope="col"><span className="sr-only">Plan</span></th>
            <th scope="col" className="us">Profaily {ours.name}</th>
            <th scope="col">{rival} {theirs.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">A month</th>
            <td className="us"><span className="pl-price">{ourPrice ?? " "}</span></td>
            <td><RivalPrice amount={theirs.usd} basis={theirs.basis} currency={currency} /></td>
          </tr>
          {rows.map((r) => (
            <tr key={r.key}>
              <th scope="row">{r.label}</th>
              <td className="us">{ours[r.key]}</td>
              <td>{(theirs as Record<string, unknown>)[r.key] as string}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

/** "Price and limits": Profaily's Creator and Business plans next to the rival's nearest plans, in the visitor's currency. */
export function PriceLimits({ rival, pricing }: { rival: string; pricing: RivalPricing }) {
  const currency = useCurrency();
  const ours = (p: (typeof plans)[number]) => (currency ? p.price[currency].m : null);
  return (
    <section className="section tight" id="pricing" aria-labelledby="pl-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="pl-h">{`Price and limits, Profaily vs ${rival}`}</h2>
          <p className="lead">What posting to TikTok, Instagram and YouTube costs a month, billed monthly unless marked, on the plan one person would pick and the plan a team would pick.</p>
        </div>
        <div className="ck-groups">
          <Block title="For one person" rival={rival} ours={profaily.solo} theirs={pricing.solo} rows={soloRows} currency={currency} ourPrice={ours(creator)} />
          <Block title="For a team" rival={rival} ours={profaily.team} theirs={pricing.team} rows={teamRows} currency={currency} ourPrice={ours(business)} />
        </div>
        <p className="cf-foot">
          {`${rival} prices and limits come from ${rival}'s own pricing page, checked ${CHECKED}.`}
          {currency === "ngn" && ` Naira prices for ${rival} use the CBN's official rate of ₦${NGN_PER_USD.toLocaleString("en-NG")} to $1 on ${RATE_DATE}; your bank may charge more.`}
        </p>
      </div>
    </section>
  );
}
