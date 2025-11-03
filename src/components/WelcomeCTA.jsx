import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const buttonBase =
  'group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-medium backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-300/50';

const WelcomeCTA = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <motion.p
        className="max-w-xl text-sm md:text-lg text-cyan-100/90"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your Smart Path to Progress.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <a href="/login" className={`${buttonBase} bg-cyan-500/20 border border-cyan-300/30 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.25)]`}> 
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/10 to-pink-400/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          Get Started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href="/about" className={`${buttonBase} bg-pink-500/10 border border-pink-300/30 text-pink-100`}>Learn More</a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="mt-10 flex items-center gap-2 text-cyan-100/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
        <span className="text-xs md:text-sm">Scroll</span>
      </motion.div>
    </div>
  );
};

export default WelcomeCTA;
