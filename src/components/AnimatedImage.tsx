
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'wide';
  priority?: boolean;
}

const AspectRatioClasses = {
  auto: '',
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[16/9]',
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src, 
  alt, 
  className,
  aspectRatio = 'auto',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn(
      'overflow-hidden relative',
      AspectRatioClasses[aspectRatio],
      className
    )}>
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-all duration-700 transform',
            isLoaded ? 'img-loaded scale-100' : 'img-loading scale-[1.05]'
          )}
          onLoad={handleImageLoad}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse-slow" />
      )}
    </div>
  );
};

export default AnimatedImage;
