"use client";

import { useEffect, useState } from "react";

const GlowCard = ({ children, identifier }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const container = document.querySelector(`.glow-container-${identifier}`);
    const cards = document.querySelectorAll(`.glow-card-${identifier}`);

    if (!container || !cards.length) return;

    const config = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const updateGlowEffect = (event) => {
      cards.forEach((card) => {
        const bounds = card.getBoundingClientRect();

        const inProximity =
          event?.x > bounds.left - config.proximity &&
          event?.x < bounds.left + bounds.width + config.proximity &&
          event?.y > bounds.top - config.proximity &&
          event?.y < bounds.top + bounds.height + config.proximity;

        if (!card?.style) return;

        card.style.setProperty(
          "--active",
          inProximity ? "1" : `${config.opacity}`
        );

        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        let angle =
          (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
        if (angle < 0) angle += 360;

        card.style.setProperty("--start", `${angle + 90}`);
      });
    };

    const applyStyles = () => {
      container?.style?.setProperty("--gap", `${config.gap}px`);
      container?.style?.setProperty("--blur", `${config.blur}px`);
      container?.style?.setProperty("--spread", `${config.spread}px`);
      container?.style?.setProperty(
        "--direction",
        config.vertical ? "column" : "row"
      );
    };

    applyStyles();

    document.body.addEventListener("pointermove", updateGlowEffect);

    return () => {
      document.body.removeEventListener("pointermove", updateGlowEffect);
    };
  }, [identifier]);

  if (!isMounted) {
    return (
      <div className={`glow-container-${identifier} glow-container`}>
        <article
          className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
          <div className="glows"></div>
          {children}
        </article>
      </div>
    );
  }

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
