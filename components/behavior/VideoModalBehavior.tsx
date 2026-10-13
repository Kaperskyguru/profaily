"use client";
import { useEffect } from "react";

export function VideoModalBehavior() {
  useEffect(() => {
    const open = document.querySelector<HTMLElement>("[data-video-open]");
    const modal = document.querySelector<HTMLDialogElement>("#walkthrough-modal");
    const video = modal?.querySelector("video");
    const close = modal?.querySelector<HTMLElement>("[data-video-close]");
    if (!open || !modal || !video) return;
    let returnFocus: Element | null = null;
    const onOpen = () => {
      returnFocus = document.activeElement;
      modal.showModal();
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    const onClose = () => modal.close();
    const onBackdrop = (e: MouseEvent) => { if (e.target === modal) modal.close(); };
    const onClosed = () => {
      video.pause();
      video.currentTime = 0;
      (returnFocus as HTMLElement | null)?.focus();
    };
    open.addEventListener("click", onOpen);
    close?.addEventListener("click", onClose);
    modal.addEventListener("click", onBackdrop);
    modal.addEventListener("close", onClosed);
    return () => {
      open.removeEventListener("click", onOpen);
      close?.removeEventListener("click", onClose);
      modal.removeEventListener("click", onBackdrop);
      modal.removeEventListener("close", onClosed);
    };
  }, []);
  return null;
}
