import React from 'react';

export function Logo({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center explosion of lines */}
      {Array.from({ length: 70 }).map((_, i) => {
        const angle = Math.random() * 360;
        const length = 6 + Math.random() * 6; // Reduced length to fit smaller viewBox
        const x = 12 + length * Math.cos((angle * Math.PI) / 180);
        const y = 12 + length * Math.sin((angle * Math.PI) / 180);
        const colors = ["#00FFFF", "#00FF00", "#FF00FF", "#FFFF00", "#00BFFF", "#FF0000"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <line
            key={i}
            x1="12"
            y1="12"
            x2={x}
            y2={y}
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity="0.8"
          />
        );
      })}
    </svg>
  );
}