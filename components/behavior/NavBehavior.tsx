"use client";
import { useEffect } from "react";

/**
 * The header's state: `data-scrolled` on <html> once the page moves (the nav lifts), dropdowns that
 * open by click or keyboard (hover is CSS-only on wide screens), and the phone menu sheet.
 */
export function NavBehavior() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      if (window.scrollY > 24) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const dds = Array.from(document.querySelectorAll<HTMLElement>("[data-dd]"));
    const close = (except?: HTMLElement) =>
      dds.forEach((d) => {
        if (d === except) return;
        d.classList.remove("open");
        d.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
    const cleanups: (() => void)[] = [];
    dds.forEach((d) => {
      const btn = d.querySelector<HTMLButtonElement>("button")!;
      const onClick = () => {
        const open = !d.classList.contains("open");
        close(d);
        d.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      };
      const onFocusOut = (e: FocusEvent) => {
        if (!d.contains(e.relatedTarget as Node)) {
          d.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      };
      btn.addEventListener("click", onClick);
      d.addEventListener("focusout", onFocusOut);
      cleanups.push(() => {
        btn.removeEventListener("click", onClick);
        d.removeEventListener("focusout", onFocusOut);
      });
    });
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-dd]")) close();
    };
    document.addEventListener("click", onDoc);

    const sheet = document.querySelector<HTMLElement>("[data-msheet]");
    const burger = document.querySelector<HTMLButtonElement>("[data-burger]");
    const setSheet = (open: boolean) => {
      if (!sheet || !burger) return;
      sheet.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) sheet.querySelector<HTMLElement>("[data-close]")?.focus();
      else burger.focus();
    };
    const onBurger = () => setSheet(true);
    const onSheet = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t === sheet || t.closest("[data-close]")) setSheet(false);
    };
    burger?.addEventListener("click", onBurger);
    sheet?.addEventListener("click", onSheet);

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const openDd = dds.find((d) => d.classList.contains("open"));
      if (openDd) {
        close();
        openDd.querySelector("button")?.focus();
      }
      if (sheet && !sheet.hidden) setSheet(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
      burger?.removeEventListener("click", onBurger);
      sheet?.removeEventListener("click", onSheet);
      cleanups.forEach((c) => c());
    };
  }, []);
  return null;
}
