
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn(
      'mb-12 opacity-0 animate-fade-in',
      alignmentClasses[alignment],
      className
    )}>
      {subtitle && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="w-16 h-1 mt-4 bg-primary rounded-full mx-auto"></div>
    </div>
  );
};

export default SectionHeading;
