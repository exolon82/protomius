import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Radio } from 'lucide-react';
import Logo from './LogoGallery';

const Hero: React.FC = () => {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-900 text-silver font-sans overflow-hidden flex flex-col items-center justify-center">

      {/* Background Grid - Effetto Costellazione/Matrice */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(#C47B5E 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}
      />

      {/* Terminal Header Decor */}
      <div className="absolute top-10 left-10 hidden lg:block font-mono text-[10px] opacity-40 uppercase tracking-[0.2em]">
        <p>System: PROTOMIUS_v1.0</p>
        <p>Status: ARCHITECT_ONLINE</p>
        <p>Location: 40.6327° N, 17.9418° E</p>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-10 text-center"
      >
        {/* Logo SVG PROTOMIUS */}
        <Logo />

        {/* Action / Data Modules */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={bootSequence ? { y: 0, opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl px-6"
        >
          <ServiceModule
            icon={<Cpu size={20} />}
            title="Core Code"
            desc="Sviluppo custom nativo senza dipendenze esterne."
          />
          <ServiceModule
            icon={<Radio size={20} />}
            title="Quantum SEO"
            desc="Visibilità espansa attraverso l'analisi dei dati."
          />
          <ServiceModule
            icon={<Zap size={20} />}
            title="AI Systems"
            desc="Automazione e integrazione di intelligenza neurale."
          />
        </motion.div>

        {/* CTA Button con scroll verso BusinessPlan */}
        <motion.button
          onClick={() => document.getElementById('protocol-details')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(196, 123, 94, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-20 px-12 py-4 relative group overflow-hidden border border-copper/30"
        >
          <span className="relative z-10 text-copper font-mono text-xs tracking-[0.3em] uppercase">
            Inizializza Protocollo 001 _
          </span>
          <div className="absolute inset-0 bg-copper opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </motion.button>
      </motion.div>

      {/* Footer Decoration */}
      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end opacity-30 font-mono text-[9px]">
        <div>
          <p>// INPUT: CREATIVE_VISION</p>
          <p>// OUTPUT: DIGITAL_REALITY</p>
        </div>
        <div className="text-right">
          <p>PHOENIX_CONSTELLATION_DATA</p>
          <p>© 2024 PROTOMIUS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

const ServiceModule = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 border border-silver/10 bg-silver/5 backdrop-blur-sm hover:border-copper/40 transition-colors group text-left">
    <div className="text-copper mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{title}</h3>
    <p className="text-xs text-silver/60 leading-relaxed font-light">{desc}</p>
  </div>
);

export default Hero;