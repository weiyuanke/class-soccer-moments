
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';

interface Player {
  id: number;
  name: string;
  position: string;
  image: string;
  achievements: string;
}

interface PlayerSpotlightProps {
  players: Player[];
  className?: string;
}

const PlayerSpotlight: React.FC<PlayerSpotlightProps> = ({ players, className }) => {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-animate',
      className
    )}>
      {players.map((player) => (
        <div 
          key={player.id} 
          className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-500 opacity-0 animate-zoom-in h-full"
        >
          <div className="relative overflow-hidden h-64">
            <AnimatedImage
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex-grow flex flex-col p-6">
            <h3 className="text-xl font-bold mb-1">{player.name}</h3>
            <p className="text-sm text-primary mb-4">{player.position}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{player.achievements}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerSpotlight;
