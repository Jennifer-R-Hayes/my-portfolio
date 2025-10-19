"use client";

import React, { ReactNode, useEffect, useState } from "react";

type IconWithFallbackProps = {
  icon?: ReactNode;      // the actual icon component (e.g., <FaFileAlt />)
  label?: string;        // short label or emoji fallback
  emoji?: string;        // optional emoji fallback
  className?: string;    // pass-through for styling
};

export default function IconWithFallback({
  icon,
  label,
  emoji = "📄",
  className = "",
}: IconWithFallbackProps) {
  const [iconLoaded, setIconLoaded] = useState(true);

  // Check if the icon is rendering properly
  useEffect(() => {
    // simulate simple health check: if icon fails to mount, fallback
    const timer = setTimeout(() => {
      if (!icon) setIconLoaded(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [icon]);

  if (!iconLoaded || !icon) {
    return (
      <span
        className={`inline-flex items-center justify-center text-gray-500 ${className}`}
        title={label}
      >
        {emoji}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {icon}
    </span>
  );
}
