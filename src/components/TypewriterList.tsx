import { useState, useEffect, useRef } from "react";

interface TypewriterListProps {
  items: string[];
  typingSpeed?: number;
  pauseAfterItem?: number;
}

const TypewriterList = ({ 
  items, 
  typingSpeed = 50, 
  pauseAfterItem = 1000 
}: TypewriterListProps) => {
  const [displayedItems, setDisplayedItems] = useState<string[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping || currentItemIndex >= items.length) return;

    const currentItem = items[currentItemIndex];
    
    if (currentText.length < currentItem.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentItem.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Finished typing current item
      const timeout = setTimeout(() => {
        setDisplayedItems(prev => [...prev, currentItem]);
        setCurrentText("");
        setCurrentItemIndex(prev => prev + 1);
      }, pauseAfterItem);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentItemIndex, isTyping, items, typingSpeed, pauseAfterItem]);

  return (
    <div ref={containerRef} className="space-y-3">
      {displayedItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-foreground font-institutional"
        >
          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
          <span>{item}</span>
        </div>
      ))}
      
      {currentText && (
        <div className="flex items-center gap-3 text-foreground font-institutional">
          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
          <span>
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default TypewriterList;
