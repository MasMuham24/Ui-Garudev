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
  const [isVisible, setIsVisible] = useState(false);
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
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${
        isVisible
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-8 blur-[1px]"
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
