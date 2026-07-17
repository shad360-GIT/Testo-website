import React from 'react';

interface OrphikLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function OrphikLogo({ className = 'h-8 text-brand-cyan', iconOnly = false }: OrphikLogoProps) {
  if (iconOnly) {
    // Elegant geometric 'O' icon representing the brand
    return (
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        aria-hidden="true"
        id="orphik-icon"
      >
        <path d="M 50 10 C 27.9 10 10 27.9 10 50 C 10 72.1 27.9 90 50 90 C 72.1 90 90 72.1 90 50 C 90 27.9 72.1 10 50 10 Z M 50 26 C 63.2 26 74 36.8 74 50 C 74 63.2 63.2 74 50 74 C 36.8 74 26 63.2 26 50 C 26 36.8 36.8 26 50 26 Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 540 140"
      fill="currentColor"
      className={className}
      aria-label="ORPHIK"
      id="orphik-full-logo"
    >
      {/* O */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M 60 20 A 50 50 0 1 1 59.99 20 Z M 60 44 A 26 26 0 1 0 60.01 44 Z" 
      />
      
      {/* R */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M 120 20 H 174 C 196 20, 204 32, 204 48 C 204 64, 192 72, 172 72 H 142 V 120 H 120 V 20 Z M 142 36 V 56 H 168 A 10 10 0 0 0 168 36 Z" 
      />
      <path d="M 164 72 L 194 120 H 220 L 184 72 Z" />
      
      {/* P */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M 226 20 H 280 C 302 20, 310 32, 310 48 C 310 64, 298 72, 278 72 H 248 V 120 H 226 V 20 Z M 248 36 V 56 C 255 56, 266 54, 266 47 C 266 40, 258 38, 252 42 C 250 44, 248 40, 248 36 Z" 
      />
      
      {/* H */}
      <path d="M 318 20 H 340 V 62 H 368 V 20 H 390 V 120 H 368 V 78 H 340 V 120 H 318 Z" />
      
      {/* I */}
      <path d="M 398 20 H 420 V 120 H 398 Z" />
      
      {/* K */}
      <path d="M 430 20 H 448 V 120 H 430 Z" />
      <path d="M 454 20 H 472 V 120 H 454 Z" />
      <path d="M 472 64 C 494 56, 508 42, 516 20 H 538 C 528 50, 510 70, 484 76 Z" />
      <path d="M 472 72 L 512 120 H 536 L 488 72 Z" />
    </svg>
  );
}

