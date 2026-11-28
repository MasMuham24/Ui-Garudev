'use client';

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  className = "",
  delay = 0,
  threshold = 0.05,
  minHeight = "200px",
  ...props
}) {
  const isServer = typeof window === "undefined";
  const [isVisible, setIsVisible] = useState(isServer);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: "300px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none ${
        isVisible
          ? "opacity-100 translate-y-0 filter-none"
          : "motion-safe:opacity-0 motion-safe:translate-y-8 motion-safe:blur-[1px]"
      } ${className}`.trim()}
      style={{
        transitionDelay: `${delay}ms`,
        minHeight: !isVisible ? minHeight : undefined,
      }}
      {...props}
    >
      {isVisible ? children : null}
    </div>
  );
}
