import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FounderCardProps {
  image: string;
  name: string;
  role: string;
  fullBio: string;
}

const FounderCard = ({ image, name, role, fullBio }: FounderCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split bio into paragraphs
  const paragraphs = fullBio.split('\n\n');
  
  // Get first paragraph for preview (approximately 5 lines)
  const previewText = paragraphs[0];

  return (
    <div className="text-center group">
      {/* Square/rectangular image like Instagram post */}
      <div className="relative w-full max-w-[280px] mx-auto mb-6 aspect-square rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h3 className="font-display text-xl text-foreground mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{role}</p>
      
      {/* Bio with expand/collapse */}
      <div className="text-left max-w-xs mx-auto">
        <div className={cn(
          "text-muted-foreground font-institutional text-sm leading-relaxed overflow-hidden transition-all duration-500",
          isExpanded ? "max-h-[2000px]" : "max-h-[7.5rem]"
        )}>
          {isExpanded ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-3" : ""}>
                {paragraph}
              </p>
            ))
          ) : (
            <p>{previewText}</p>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:text-primary/80 transition-colors mx-auto"
        >
          {isExpanded ? "Ver menos" : "Ler mais"}
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-300",
            isExpanded && "rotate-180"
          )} />
        </button>
      </div>
    </div>
  );
};

export default FounderCard;
