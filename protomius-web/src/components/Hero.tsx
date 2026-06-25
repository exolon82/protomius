import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Radio } from 'lucide-react';
import LogoGallery from './LogoGallery';

const Hero: React.FC = () => {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-space-900 text-silver font-sans overflow-hidden flex flex-col items-center justify-between px-4 py-8 md:py-12 transition-colors duration-400">
      
      {/* 1. BACKGROUND GRID (Effetto Costellazione) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#C47B5E 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      {/* 2. HEADER TECNICO (Status & Location) */}
      <div className="absolute top-6 left-6 hidden md:block font-mono text-[9px] opacity-40 uppercase tracking-[0.2em]">
        <p>System: PROTOMIUS_v1.0</p>
        <p>Status: ARCHITECT_ONLINE</p>
        <p>Location: 40.6327° N, 17.9418° E</p>
      </div>

     
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-10 w-full max-w-6xl flex flex-col items-center mt-4 md:mt-10"
      >
    
                {/* 3. BRAND IDENTITY (I 5 PROTOCOLLI) */}
        <div className="mb-24">
          <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-12 text-center">03 // Brand Identity: I 5 Protocolli</h2>
          <LogoGallery />
        </div>
      
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={bootSequence ? { y: 0, opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 w-full max-w-4xl"
        >
          <ServiceModule 
            icon={<Cpu size={22}/>} 
            title="Core Code" 
            code="MOD_01"
            desc="Sviluppo custom nativo senza dipendenze esterne." 
          />
          <ServiceModule 
            icon={<Radio size={22}/>} 
            title="Quantum SEO" 
            code="DATA_01"
            desc="Visibilità avanzata attraverso l'analisi profonda dei dati." 
          />
          <ServiceModule 
            icon={<Zap size={22}/>} 
            title="AI Systems" 
            code="NEURAL_01"
            desc="Automazione e integrazione di intelligenza neurale locale." 
          />
        </motion.div>
      </motion.div>

      {/* 4. FOOTER & CALL TO ACTION */}
      <div className="z-10 w-full max-w-4xl mt-12 md:mt-20">
        
        {/* Metadata Footer - Distanziato dal bottone */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 opacity-30 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center md:text-left">
          <div className="space-y-1">
            <p>// INPUT: CREATIVE_VISION</p>
            <p>// OUTPUT: DIGITAL_REALITY</p>
          </div>
          <div className="md:text-right space-y-1">
            <p>PHOENIX_CONSTELLATION_DATA</p>
            <p>© 2024 PROTOMIUS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        {/* Bottone Principale */}
        <motion.button
          onClick={() => document.getElementById('protocol-details')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(196, 123, 94, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 relative group overflow-hidden border border-copper/40 transition-all"
        >
          <span className="relative z-10 text-copper font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase">
            INIZIALIZZA PROTOCOLLO 001 _
          </span>
          <div className="absolute inset-0 bg-copper opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </motion.button>
      </div>

    </div>
  );
};

/* --- COMPONENTE CARD SERVIZIO OTTIMIZZATO --- */
const ServiceModule = ({ icon, title, desc, code }: { icon: React.ReactNode, title: string, desc: string, code: string }) => (
  <div className="relative p-6 md:p-8 group transition-all duration-500 hover:border-copper/30"
       style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
    
    {/* Decorazione angoli (HUD) */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-copper/30 group-hover:border-copper transition-colors" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-copper/30 group-hover:border-copper transition-colors" />

    <div className="flex justify-between items-start mb-4">
      <div className="text-copper opacity-80 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-mono text-[8px] text-copper/40 tracking-widest uppercase">{code}</span>
    </div>

    <h3 className="font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-primary)' }}>
      {title}
    </h3>

    <p className="text-[11px] md:text-xs text-silver/40 leading-relaxed font-light group-hover:text-silver/70 transition-colors">
      {desc}
    </p>

    {/* Scanner Line Decor */}
    <div className="mt-4 w-full h-[1px] relative overflow-hidden" style={{ backgroundColor: 'var(--card-border)' }}>
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-copper/20 to-transparent"
      />
    </div>
  </div>
);

export default Hero;