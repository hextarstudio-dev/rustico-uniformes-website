import { useEffect, useRef, useState, ReactNode, memo } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  threshold?: number;
}

const ScrollReveal = memo(({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: '50px 0px' // Start animation slightly before element is in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  const animationClasses = {
    "fade-up": isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8",
    "fade-down": isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-8",
    "fade-left": isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-12",
    "fade-right": isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-12",
    scale: isVisible ? "animate-scale-in" : "opacity-0 scale-95",
    fade: isVisible ? "animate-fade-in" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        animationClasses[animation],
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;