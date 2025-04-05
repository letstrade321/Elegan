
import React from 'react';

interface LogoProps {
  size?: 'small' | 'large';
  spinning?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'small', spinning = false }) => {
  return (
    <div className={`logo-container ${size === 'large' ? 'w-64 h-64' : 'w-12 h-12'}`}>
      <div className={`logo-content ${spinning ? 'animate-logo-spin' : ''}`}>
        <div className="flex flex-col items-center justify-center">
          <div className={`${size === 'large' ? 'text-6xl mb-2' : 'text-lg'} font-bold font-playfair text-elegant-charcoal`}>
            S
          </div>
          <div className={`${size === 'large' ? 'text-2xl' : 'text-xs'} font-playfair tracking-wider text-elegant-gold`}>
            ELEGANT INTERIORS
          </div>
          {size === 'large' && (
            <div className="text-sm font-montserrat text-elegant-taupe mt-2">
              by Shivam
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
