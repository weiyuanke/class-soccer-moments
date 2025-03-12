
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';

interface MemoryCardProps {
  image: string;
  title: string;
  description: string;
  date?: string;
  className?: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({
  image,
  title,
  description,
  date,
  className,
}) => {
  return (
    <div className={cn(
      'group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in',
      className
    )}>
      <div className="overflow-hidden">
        <AnimatedImage
          src={image}
          alt={title}
          aspectRatio="video"
          className="w-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {date && (
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
        )}
        <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MemoryCard;
