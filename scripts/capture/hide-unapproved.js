// Platforms that are not live yet stay out of product visuals: Facebook's "Coming soon" rows are hidden (founder, 17 Nov).
(() => {
  const ok = (el) => { const t = (el.innerText || "").trim(); return t.length < 80 && /Facebook/.test(t) && /soon/i.test(t) && !/TikTok|Instagram|YouTube/.test(t); };
  const run = () => {
    document.querySelectorAll("li, div, a, button").forEach((el) => {
      if (el.dataset.fbHidden || !ok(el)) return;
      if (el.parentElement && ok(el.parentElement)) return; // hide only the outermost row
      el.style.display = "none"; el.dataset.fbHidden = "1";
    });
  };
  setInterval(run, 150);
})();
// Hide the Next.js dev badge on every page load (it's not in the real app).
setInterval(() => { document.querySelectorAll("nextjs-portal").forEach((e) => { e.style.display = "none"; }); }, 100);
