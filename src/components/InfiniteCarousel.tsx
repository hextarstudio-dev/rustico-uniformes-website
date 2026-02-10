import { ReactNode, useEffect, useState, useRef } from "react";

interface InfiniteCarouselProps {
  children: ReactNode;
  speed?: number;
  mobileSpeed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteCarousel = ({
  children,
  speed = 30,
  mobileSpeed,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteCarouselProps) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const updateSpeed = () => {
      const isMobile = window.innerWidth < 768;
      const newSpeed = isMobile && mobileSpeed ? mobileSpeed : speed;
      if (newSpeed !== currentSpeed) {
        setCurrentSpeed(newSpeed);
        setAnimationKey(prev => prev + 1);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, [speed, mobileSpeed, currentSpeed]);

  return (
    <div className={`overflow-hidden ${className}`} ref={containerRef}>
      <div
        key={animationKey}
        className={`flex ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `seamless-scroll ${currentSpeed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* Original items */}
        <div className="flex gap-6 md:gap-12 shrink-0 px-3 md:px-6">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-6 md:gap-12 shrink-0 px-3 md:px-6" aria-hidden>{children}</div>
      </div>

      <style>{`
        @keyframes seamless-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
