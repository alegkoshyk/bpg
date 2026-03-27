"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideProps } from "lucide-react";

interface AnimatedIconProps {
  icon: React.ComponentType<LucideProps>;
  className?: string;
  size?: number;
  strokeWidth?: number;
  delay?: number;
  color?: string;
}

export default function AnimatedIcon({
  icon: Icon,
  className = "",
  size = 28,
  strokeWidth = 1.5,
  delay = 0,
  color,
}: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 500ms ease ${delay}ms`,
      }}
    >
      <Icon
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        style={{
          strokeDasharray: 100,
          strokeDashoffset: isVisible ? 0 : 100,
          transition: `stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay + 200}ms`,
        }}
      />
    </div>
  );
}
