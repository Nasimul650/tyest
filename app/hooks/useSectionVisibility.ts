import { useEffect, useRef } from "react";

export function useSectionVisibility(ref: React.RefObject<HTMLElement>) {
  const visibleRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return visibleRef;
}
