"use client";
import { useEffect } from "react";

/** Blog index topic chips: show only the cards whose data-category matches the pressed chip ("all" shows every card). */
export function BlogFilterBehavior() {
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-blog-filter]"));
    const empty = document.querySelector<HTMLElement>("#blog-empty");
    const onClick = (e: Event) => {
      const button = e.currentTarget as HTMLButtonElement;
      const value = button.dataset.blogFilter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      let shown = 0;
      document.querySelectorAll<HTMLElement>(".bl-index .blog-card").forEach((card) => {
        const visible = value === "all" || card.dataset.category === value;
        card.hidden = !visible;
        if (visible) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    };
    buttons.forEach((b) => b.addEventListener("click", onClick));
    return () => buttons.forEach((b) => b.removeEventListener("click", onClick));
  }, []);
  return null;
}
