
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';

interface Memory {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface MemoriesGalleryProps {
  memories: Memory[];
  className?: string;
}

const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({ memories, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === memories.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? memories.length - 1 : current - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={cn(
      'relative overflow-hidden rounded-xl opacity-0 animate-fade-in',
      className
    )}>
      {/* Main image */}
      <div 
        className="relative aspect-[16/9] overflow-hidden"
        style={{ 
          transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out-expo",
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <AnimatedImage
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2 text-shadow">{memory.title}</h3>
              <p className="text-sm text-white/90 max-w-xl text-shadow">{memory.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4 gap-2 px-4">
        {memories.map((memory, index) => (
          <button
            key={memory.id}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === activeIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoriesGallery;
