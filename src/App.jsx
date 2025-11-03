import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import BackgroundCanvas from './components/BackgroundCanvas.jsx';
import LogoHero from './components/LogoHero.jsx';
import WelcomeCTA from './components/WelcomeCTA.jsx';
import DockNav from './components/DockNav.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="welcome"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative min-h-screen text-slate-100 bg-[radial-gradient(circle_at_10%_10%,rgba(8,47,73,0.45),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(67,56,202,0.0),transparent_40%),linear-gradient(180deg,rgba(2,6,23,0.65),rgba(2,6,23,0.9))]"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {/* Hero Background */}
        <BackgroundCanvas />

        {/* Hero Content */}
        <div className="absolute left-1/2 top-[28vh] z-10 w-full -translate-x-1/2 px-6">
          <div className="mx-auto max-w-5xl flex flex-col items-center">
            <LogoHero />
            <WelcomeCTA />
          </div>
        </div>

        {/* Back Button - bottom-left */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.history.length > 1 ? window.history.back() : (window.location.href = '/');
          }}
          className="group fixed bottom-24 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100 backdrop-blur-md hover:bg-cyan-400/20"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back
        </a>

        {/* Content spacer to allow scroll hint */}
        <section className="relative z-10 mt-[76vh] px-6 pb-44">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Futuristic, minimal, student-centric</h3>
                <p className="mt-2 text-cyan-100/80">A glowing, joyful experience that’s ready for real backend APIs — no mock data needed.</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-sky-500/10 to-orange-500/10 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Smooth motion system</h3>
                <p className="mt-2 text-cyan-100/80">Purposeful transitions, parallax depth, and hover glow to guide you forward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dock Navigation */}
        <DockNav />
      </motion.main>
    </AnimatePresence>
  );
}

export default App;
