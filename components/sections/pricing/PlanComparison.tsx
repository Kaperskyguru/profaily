import { Fragment } from "react";
import { comparisonRows } from "@/content/pricing";

export function PlanComparison() {
  return (
    <section className="page-section pricing-comparison">
      {" "}
      <div className="wrap">
        {" "}
        <div className="section-head center"><div className="eyebrow">Plan comparison</div><h2>Compare plans and features</h2><p>Every plan covers the core video workflow. Teams adds the shared controls for work that moves between people.</p></div>
        {" "}
        <div className="comparison-wrap">
          {" "}
          <table className="plan-comparison">
            {" "}
            <thead><tr><th scope="col">Capabilities</th><th scope="col">Pro</th><th scope="col">Teams</th></tr></thead>
            {" "}
            <tbody>
              {" "}
              {comparisonRows.map((row) => (
                <Fragment key={"group" in row ? row.group : row.feature}>
                  {"group" in row ? (
                    <tr className="comparison-group"><th colSpan={3}>{row.group}</th></tr>
                  ) : (
                    <tr><th scope="row">{row.feature}</th><td>{row.pro}</td><td>{row.teams}</td></tr>
                  )}
                  {" "}
                </Fragment>
              ))}
            </tbody>
            {" "}
          </table>
          {" "}
        </div>
        {" "}
        <p className="comparison-note">Publishing, inbox, and automation actions depend on the connected account, platform permissions, and supported API capabilities.</p>
        {" "}
      </div>
      {" "}
    </section>
  );
}
