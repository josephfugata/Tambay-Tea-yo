'use client';

import { useEffect, useState } from 'react';
import BobaPearlIcon from '@/components/icons/BobaPearlIcon';

const FloatingPearls = () => {
  const [pearls, setPearls] = useState<any[]>([]);

  useEffect(() => {
    const generatePearls = () => {
      const newPearls = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 20 + 10}px`,
        duration: `${Math.random() * 5 + 5}s`,
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.3 + 0.1,
      }));
      setPearls(newPearls);
    };
    generatePearls();
  }, []);

  if (pearls.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {pearls.map((pearl) => (
        <div
          key={pearl.id}
          className="absolute bottom-0"
          style={{
            left: pearl.left,
            animation: `float ${pearl.duration} ${pearl.delay} infinite ease-in-out`,
          }}
        >
          <BobaPearlIcon
            className="text-foreground"
            style={{
              width: pearl.size,
              height: pearl.size,
              opacity: pearl.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingPearls;
