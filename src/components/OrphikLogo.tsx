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
      <path d="M 60 20 A 50 50 0 1 1 59.99 20 Z M 60 44 A 26 26 0 1 0 60.01 44 Z" />
      
      {/* R */}
      <path d="M 140 20 H 164 V 120 H 140 Z M 174 20 H 204 A 25 25 0 0 1 204 70 H 164 V 54 H 180 A 9 9 0 0 0 180 36 H 174 Z M 176 70 L 210 120 H 234 L 200 70 Z" />
      
      {/* P */}
      <path d="M 245 20 H 269 V 120 H 245 Z M 279 20 H 309 A 25 25 0 0 1 309 70 H 279 V 54 H 285 A 9 9 0 0 0 285 36 H 279 Z" />
      
      {/* H */}
      <path d="M 350 20 H 374 V 120 H 350 Z M 398 20 H 406 V 120 H 398 Z M 412 20 H 420 V 120 H 412 Z M 374 62 H 398 V 78 H 374 Z" />
      
      {/* I */}
      <path d="M 436 20 H 444 V 120 H 436 Z" />
      
      {/* K */}
      <path d="M 460 20 H 468 V 120 H 460 Z M 474 20 H 482 V 120 H 474 Z M 482 66 L 508 20 H 520 L 482 86 Z M 482 66 Q 500 85 515 120 H 530 Q 510 90 482 80 Z" />
    </svg>
  );
}
