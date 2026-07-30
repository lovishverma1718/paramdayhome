import React from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  sublabel?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  label,
  sublabel,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <span className="font-heading font-extrabold text-3xl sm:text-4xl text-gradient mb-1">
        {value}
      </span>
      <span className="font-heading font-bold text-dark text-sm sm:text-base">
        {label}
      </span>
      {sublabel && (
        <span className="text-xs text-dark-muted font-medium mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
};
