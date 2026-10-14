"use client";
import { useEffect } from "react";

export function NavBehavior() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".main-nav");
    const toggle = document.querySelector<HTMLButtonElement>(".mobile-menu");
    const closeGroups = () =>
      document.querySelectorAll<HTMLElement>(".nav-group.open").forEach((g) => {
        g.classList.remove("open");
        g.querySelector(".menu-trigger")?.setAttribute("aria-expanded", "false");
      });
    const onToggle = () => {
      if (!nav || !toggle) return;
      const open = nav.classList.toggle("mobile-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    };
    toggle?.addEventListener("click", onToggle);
    const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>(".menu-trigger"));
    const onTrigger = (e: Event) => {
      e.stopPropagation();
      const button = e.currentTarget as HTMLButtonElement;
      const group = button.closest<HTMLElement>(".nav-group")!;
      const wasOpen = group.classList.contains("open");
      closeGroups();
      if (!wasOpen) {
        group.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    };
    triggers.forEach((t) => t.addEventListener("click", onTrigger));
    const onDocClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".nav-group")) closeGroups();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeGroups();
      if (nav?.classList.contains("mobile-open")) {
        nav.classList.remove("mobile-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      toggle?.removeEventListener("click", onToggle);
      triggers.forEach((t) => t.removeEventListener("click", onTrigger));
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  return null;
}
