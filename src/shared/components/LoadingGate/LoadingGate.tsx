'use client';

import { useEffect, useState } from 'react';

type LoadingGateProps = {
  minDelay?: number;          // ms (ex.: 350)
  skeleton: React.ReactNode;  // o que mostrar enquanto "carrega"
  children: React.ReactNode;  // conteúdo real
};

export default function LoadingGate({ minDelay = 400, skeleton, children }: LoadingGateProps) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // Mostra skeleton por um tempinho curto (UX mais “premium”)
    const t = setTimeout(() => setShowSkeleton(false), minDelay);
    return () => clearTimeout(t);
  }, [minDelay]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-200 ${showSkeleton ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
        aria-hidden={!showSkeleton}
      >
        {skeleton}
      </div>

      <div className={`transition-opacity duration-200 ${showSkeleton ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
}
