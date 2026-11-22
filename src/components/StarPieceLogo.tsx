import React from 'react';

interface StarPieceLogoProps {
  className?: string;
}

export const StarPieceLogo: React.FC<StarPieceLogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Top diamond - Orange */}
        <path
          d="M50 10 L65 25 L50 40 L35 25 Z"
          fill="#F59E0B"
          className="drop-shadow-sm"
        />
        
        {/* Left diamond - Pink */}
        <path
          d="M10 50 L25 35 L40 50 L25 65 Z"
          fill="#EC4899"
          className="drop-shadow-sm"
        />
        
        {/* Right diamond - Purple */}
        <path
          d="M60 50 L75 35 L90 50 L75 65 Z"
          fill="#A855F7"
          className="drop-shadow-sm"
        />
        
        {/* Bottom diamond - Green */}
        <path
          d="M50 60 L65 75 L50 90 L35 75 Z"
          fill="#10B981"
          className="drop-shadow-sm"
        />
        
        {/* Central star - White */}
        <path
          d="M50 25 L55 40 L70 40 L58 50 L63 65 L50 55 L37 65 L42 50 L30 40 L45 40 Z"
          fill="white"
          className="drop-shadow-md"
        />
      </svg>
    </div>
  );
};