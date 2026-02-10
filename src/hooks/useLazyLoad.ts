import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const { rootMargin = '50px', threshold = 0.1 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, threshold, hasLoaded]);

  return { ref, isIntersecting, hasLoaded };
};
