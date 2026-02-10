import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
  index?: number;
}

const PortfolioCard = ({ image, title, description, className, index = 0 }: PortfolioCardProps) => {
  return (
    <div
      className={cn(
        "card-portfolio group cursor-pointer",
        className
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[3/4] img-hover-zoom">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <h3 className="font-display text-xl md:text-2xl text-white text-shadow-lg transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {description}
          </p>
        )}
        
        {/* Hover indicator */}
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
