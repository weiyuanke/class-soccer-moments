
import React from 'react';
import { cn } from '@/lib/utils';
import { Trophy } from 'lucide-react';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  isWin?: boolean;
}

interface MatchTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const MatchTimeline: React.FC<MatchTimelineProps> = ({ events, className }) => {
  return (
    <div className={cn('space-y-8 relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
      
      {/* Timeline items */}
      {events.map((event, index) => (
        <div 
          key={event.id} 
          className="relative flex gap-4 opacity-0 animate-fade-in" 
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-10 transition-all duration-500",
            event.isWin 
              ? "bg-yellow-100 text-yellow-600 border-2 border-yellow-400" 
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          )}>
            {event.isWin ? (
              <Trophy className="w-5 h-5" />
            ) : (
              <span className="text-sm font-semibold">{event.date.split(' ')[0]}</span>
            )}
          </div>
          
          <div className={cn(
            "flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex-grow",
            "hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          )}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">{event.date}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchTimeline;
