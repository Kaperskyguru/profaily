"use client";
import { useState } from "react";
import { Glyph, Icon, type IconName } from "@/components/ui/Glyph";
import { plans, YEARLY_SAVING, TRIAL_DAYS, type Highlight, type Period } from "@/content/plans";
import { links } from "@/lib/links";
import { useCurrency } from "@/lib/region";

const ICON: Record<Exclude<Highlight["icon"], "platforms" | "plus">, IconName> = {
  calendar: "calendar",
  spark: "spark",
  tag: "tag",
  users: "users",
  seal: "seal",
  eye: "eye",
};

/**
 * The app's "Choose your plan" window for a new owner (frontend/components/billing/plans-dialog.tsx,
 * newUserPlans): a centred title, the trial line, a Yearly billing switch with its saving, then
 * Creator and Business side by side, Business drawn as the primary card. Numbers: content/plans.ts.
 */
export function Pricing({
  heading = "Choose your plan",
  lede = `Try it for free for ${TRIAL_DAYS} days`,
  as: Tag = "h2",
  id = "pricing",
}: {
  heading?: string;
  lede?: string;
  as?: "h1" | "h2";
  id?: string;
}) {
  const [period, setPeriod] = useState<Period>("m");
  const currency = useCurrency();
  const yearly = period === "y";
  return (
    <section className="wrap pricing has-grid" id={id} aria-labelledby={`${id}-h`}>
      <Tag id={`${id}-h`}>{heading}</Tag>
      <p className="lead">{lede}</p>
      <div className="ptoggles">
        <label className="switch">
          <button type="button" role="switch" aria-checked={yearly} aria-label="Yearly billing" onClick={() => setPeriod(yearly ? "m" : "y")}>
            <span className="knob" />
          </button>
          <span>Yearly billing</span>
          <span className="save">Save {YEARLY_SAVING}%</span>
        </label>
      </div>
      <ul className="plans">
        {plans.map((p) => (
          <li className={`plan${p.trial ? " pop" : ""}`} key={p.key}>
            <div>
              <h3>{p.name}</h3>
              <p className="aud">{p.audience}</p>
            </div>
            <div>
              <p className={`price${currency ? "" : " wait"}`} aria-live="polite" aria-busy={!currency}>{currency ? p.price[currency][period] : "\u00a0"}<small>{currency ? p.unit[period] : ""}</small></p>
              <p className="bill">{currency ? p.bill[currency][period] : "\u00a0"}</p>
            </div>
            <ul className="hl">
              {p.highlights.map((h) =>
                h.icon === "platforms" ? (
                  <li key={h.text} className="muted">
                    {h.text}
                    <span className="sr-only"> TikTok, Instagram, YouTube and Facebook</span>
                    <span className="pl" aria-hidden="true">
                      <Glyph name="tiktok" id={`pr-${p.key}-tt`} /><Glyph name="instagram" id={`pr-${p.key}-ig`} /><Glyph name="youtube" id={`pr-${p.key}-yt`} /><Glyph name="facebook" id={`pr-${p.key}-fb`} />
                    </span>
                  </li>
                ) : h.icon === "plus" ? (
                  <li key={h.text} className="muted">{h.text}</li>
                ) : (
                  <li key={h.text}><Icon name={ICON[h.icon]} />{h.text}</li>
                ),
              )}
            </ul>
            <a className={`btn btn-block ${p.trial ? "btn-primary" : "btn-ghost"}`} href={links.register}>{p.cta}</a>
          </li>
        ))}
      </ul>
      <p className="fine">Naira prices apply to customers billed in Nigeria. Cancel anytime from Settings → Billing.</p>
    </section>
  );
}
