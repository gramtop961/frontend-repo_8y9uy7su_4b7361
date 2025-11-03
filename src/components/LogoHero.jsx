import React from 'react';
import { motion } from 'framer-motion';

// Animated PathWise logo: orbiting compass + glowing spark + fading title
const LogoHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="relative h-28 w-28 md:h-36 md:w-36">
        {/* Orbiting compass ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              '0 0 30px rgba(34,211,238,0.35), 0 0 60px rgba(244,114,182,0.25)',
            background:
              'radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 70%)',
            backdropFilter: 'blur(6px)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />

        {/* Compass needle */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70%] w-[2px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full"
          style={{
            background:
              'linear-gradient(to bottom, rgba(34,211,238,1), rgba(244,114,182,0.8))',
            boxShadow: '0 0 12px rgba(34,211,238,0.65)',
          }}
          animate={{ rotate: [0, 12, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Spark core */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(251,146,60,1), rgba(244,114,182,0.8))',
            boxShadow:
              '0 0 20px rgba(251,146,60,0.9), 0 0 36px rgba(244,114,182,0.55)',
          }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Title */}
      <motion.h1
        className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight"
        style={{
          fontFamily: 'Poppins, Inter, system-ui, sans-serif',
          background:
            'linear-gradient(90deg, #22d3ee, #38bdf8, #f472b6, #fb923c, #22d3ee)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 20px rgba(56,189,248,0.25)',
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        PathWise ✦
      </motion.h1>
    </div>
  );
};

export default LogoHero;
