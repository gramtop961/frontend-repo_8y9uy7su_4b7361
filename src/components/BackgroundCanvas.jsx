import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// Futuristic animated background with Spline cover + floating particles
const BackgroundCanvas = () => {
  const particles = Array.from({ length: 14 });

  return (
    <section className="relative h-[72vh] md:h-[82vh] w-full overflow-hidden select-none">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlay (non-blocking) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 20%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(800px 400px at 80% 70%, rgba(244,114,182,0.22), transparent 60%), radial-gradient(900px 500px at 40% 90%, rgba(251,146,60,0.18), transparent 60%)',
        }}
        initial={{ opacity: 0.5, backgroundPosition: '0% 0%, 100% 100%, 50% 100%' }}
        animate={{ opacity: 0.75, backgroundPosition: ['0% 0%', '100% 50%', '0% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((_, i) => {
          const delay = i * 0.4;
          const size = 3 + (i % 5);
          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background:
                  i % 3 === 0
                    ? 'rgba(34,211,238,0.9)'
                    : i % 3 === 1
                    ? 'rgba(244,114,182,0.9)'
                    : 'rgba(251,146,60,0.9)',
                filter: 'blur(0.5px)',
              }}
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 400 + 40, opacity: 0 }}
              animate={{ y: [20, -40, 20], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 10 + (i % 6), delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BackgroundCanvas;
