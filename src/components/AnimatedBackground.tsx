import { useEffect, useRef, memo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const AnimatedBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const isReducedMotion = useRef(false);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    isMobile.current = window.innerWidth < 768;

    // Skip animation entirely for reduced motion preference
    if (isReducedMotion.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = isMobile.current ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      isMobile.current = window.innerWidth < 768;
    };

    resizeCanvas();
    
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };
    
    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize particles - reduced count for mobile
    const initParticles = () => {
      particles.current = [];
      const baseCount = isMobile.current ? 20 : 40;
      const particleCount = Math.min(baseCount, Math.floor((window.innerWidth * window.innerHeight) / 25000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.25 + 0.1,
        });
      }
    };

    initParticles();

    const animate = (currentTime: number) => {
      // Throttle FPS
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime - (deltaTime % frameInterval);

      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(152, 82%, 40%, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections - skip on mobile for performance
      if (!isMobile.current) {
        const connectionDistance = 80;
        const len = particles.current.length;
        
        for (let i = 0; i < len; i++) {
          const particle = particles.current[i];
          for (let j = i + 1; j < len; j++) {
            const other = particles.current[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistance * connectionDistance) {
              const distance = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `hsla(152, 82%, 40%, ${0.04 * (1 - distance / connectionDistance)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render canvas for reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;