'use client';
import { useEffect, useState } from 'react';

type Phase = 'loading' | 'visible' | 'fading' | 'gone';

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>('loading');

  useEffect(() => {
    if(sessionStorage.getItem('preloaderSeen'))
  });

  return (
    <div className="preloader">
      <h1>Johnathan Perez</h1>
    </div>
  );
}
