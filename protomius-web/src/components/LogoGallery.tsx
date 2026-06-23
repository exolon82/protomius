import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Share2, Monitor } from 'lucide-react';

const LogoGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const primaryLogos = [
    { id: 1, title: "Protocol Alpha // The Architect", type: "landscape", desc: "Complessità strutturale e mappatura Phoenix.", svg: <AlphaSVG /> },
    { id: 2, title: "Protocol Beta // The Esoteric", type: "landscape", desc: "Simbolismo alchemico e ordine geometrico.", svg: <BetaSVG /> },
    { id: 4, title: "Protocol Delta // The Encrypted", type: "landscape", desc: "Decrittazione dinamica dal caos alla logica.", svg: <DeltaSVG /> },
    { id: 5, title: "Protocol Epsilon // The Celestial", type: "landscape", desc: "Sistema pulsante con metadati NASA style.", svg: <EpsilonSVG /> }
  ];

  const socialLogos = [
    { id: 6, title: "Sigma Static", type: "square", desc: "Avatar quadrato per profili professionali.", svg: <SocialStaticSVG /> },
    { id: 7, title: "Sigma Pulse", type: "square", desc: "Versione animata per social dinamici.", svg: <SocialPulseSVG /> }
  ];

  const allLogos = [...primaryLogos, ...socialLogos];
  const selectedLogo = allLogos.find(l => l.id === selectedId);

  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6 relative text-silver">
      <div className="text-center mb-16 italic">
        <span className="text-copper font-mono text-[10px] tracking-[0.4em] uppercase opacity-60">Brand Laboratory</span>
        <h2 className="text-3xl font-black uppercase tracking-tighter mt-2" style={{ color: 'var(--text-primary)' }}>Identity Matrix</h2>
      </div>

      {/* SEZIONE DESKTOP */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-10 pb-4 opacity-50" style={{ borderBottom: '1px solid var(--card-border)' }}>
          <Monitor size={18} className="text-copper" />
          <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Desktop Core Assets</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {primaryLogos.map(logo => (
            <LogoCard key={logo.id} logo={logo} onClick={() => setSelectedId(logo.id)} />
          ))}
        </div>
      </div>

      {/* SEZIONE SOCIAL */}
      <div>
        <div className="flex items-center gap-3 mb-10 pb-4 opacity-50" style={{ borderBottom: '1px solid var(--card-border)' }}>
          <Share2 size={18} className="text-copper" />
          <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Social Scaling Assets</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {socialLogos.map(logo => (
            <LogoCard key={logo.id} logo={logo} onClick={() => setSelectedId(logo.id)} isSquare />
          ))}
        </div>
      </div>

      {/* ZOOM MODALE */}
      <AnimatePresence>
        {selectedId && selectedLogo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-900/98 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`card-${selectedId}`}
              className={`p-6 md:p-12 w-full relative flex flex-col items-center 
                ${selectedLogo.type === 'square' ? 'max-w-md' : 'max-w-5xl'}`}
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 text-silver/50 hover:text-copper"><X size={28} /></button>
              <div className="w-full text-silver">{selectedLogo.svg}</div>
              <div className="text-center mt-8 pt-6 w-full" style={{ borderTop: '1px solid var(--card-border)' }}>
                <h3 className="text-copper font-mono text-xs uppercase tracking-widest mb-2">{selectedLogo.title}</h3>
                <p className="text-[10px] text-silver/40 italic">{selectedLogo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LogoCard = ({ logo, onClick, isSquare }: any) => (
  <motion.div 
    layoutId={`card-${logo.id}`} onClick={onClick}
    className={`cursor-zoom-in p-4 relative group transition-all flex flex-col justify-between ${isSquare ? 'aspect-square' : ''}`}
    style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
  >
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ZoomIn size={14} className="text-copper" /></div>
    <div className="flex items-center justify-center h-full text-silver">{logo.svg}</div>
    {!isSquare && <div className="border-t border-copper/10 pt-2 mt-4 text-[9px] font-mono text-copper/60 uppercase">{logo.title}</div>}
  </motion.div>
);

/* --- SVG ASSETS (INTEGRALI) CON SUPPORTO TEMA (currentColor) --- */

const AlphaSVG = () => (
  <svg viewBox="0 0 800 260" className="w-full h-auto">
    <path d="M 50,50 L 50,210 L 750,210" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.15">
      <polyline points="630,70 660,110 680,150" /><polyline points="610,120 660,110 710,95" />
    </g>
    <circle cx="660" cy="110" r="3.5" fill="#C47B5E" opacity="0.75"/>
    <text x="80" y="135" fill="currentColor" style={{fontFamily:'sans-serif',fontWeight:900,fontSize:'54px',letterSpacing:'8px'}}>PR<tspan fill="#C47B5E">0</tspan>T<tspan fill="#C47B5E">0</tspan>M<tspan fill="#C47B5E">1</tspan>US</text>
    <text x="82" y="195" fill="currentColor" opacity="0.45" style={{fontFamily:'monospace',fontSize:'12px',letterSpacing:'4px'}}>CORE.SYSTEM_V1.0 // PHOENIX_DATA</text>
  </svg>
);

const BetaSVG = () => (
  <svg viewBox="0 0 800 260" className="w-full h-auto">
    <text x="75" y="115" fill="currentColor" style={{fontFamily:'sans-serif',fontWeight:700,fontSize:'44px',letterSpacing:'15px'}}>PR<tspan fill="#C47B5E">0</tspan>T<tspan fill="#C47B5E">0</tspan>M<tspan fill="#C47B5E">1</tspan>US</text>
    <text x="75" y="160" fill="#C47B5E" style={{fontFamily:'monospace',fontSize:'12px',letterSpacing:'6px'}}>▲ ■ ◓ ◈ ⬡ // ORDER_RESTORED</text>
  </svg>
);

const DeltaSVG = () => (
  <svg viewBox="0 0 800 260" className="w-full h-auto">
    <defs><style>{`@keyframes morph { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } } .s-text { animation: morph 4s infinite; } .r-text { animation: morph 4s infinite reverse; }`}</style></defs>
    <text x="75" y="115" fill="currentColor" style={{fontFamily:'sans-serif',fontWeight:700,fontSize:'44px',letterSpacing:'15px'}}>PR0T0M1US</text>
    <g style={{fontFamily:'monospace',fontSize:'14px',letterSpacing:'6px'}}>
      <text x="75" y="160" fill="#C47B5E" className="s-text">▲ ■ ◓ ◈ ⬡ // ???_???_???</text>
      <text x="75" y="160" fill="#C47B5E" className="r-text" style={{opacity:0}}>▲ ■ ◓ ◈ ⬡ // ORDER_RESTORED</text>
    </g>
  </svg>
);

const EpsilonSVG = () => (
  <svg viewBox="0 0 800 260" className="w-full h-auto">
    <defs><style>{`.star-blink { animation: star-blink-anim 3s infinite ease-in-out; } @keyframes star-blink-anim { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }`}</style></defs>
    <rect x="50" y="50" width="680" height="160" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3">
      <polyline points="630,70 660,110 680,150" /><polyline points="610,120 660,110 710,95" /><line x1="680" y1="150" x2="650" y2="180" />
    </g>
    <circle className="star-blink" cx="630" cy="70" r="1.5" fill="currentColor"/><circle className="star-blink" cx="680" cy="150" r="2" fill="currentColor" style={{animationDelay:'0.5s'}}/>
    <circle className="star-blink" cx="610" cy="120" r="1.5" fill="currentColor" style={{animationDelay:'1s'}}/><circle className="star-blink" cx="710" cy="95" r="2" fill="currentColor" style={{animationDelay:'1.5s'}}/>
    <circle className="star-blink" cx="650" cy="180" r="1" fill="currentColor" style={{animationDelay:'2s'}}/><circle cx="660" cy="110" r="3.5" fill="#C47B5E" opacity="0.75"/>
    <text x="75" y="115" fill="currentColor" style={{fontFamily:'sans-serif',fontWeight:700,fontSize:'44px',letterSpacing:'15px'}}>PR<tspan fill="#C47B5E">0</tspan>T<tspan fill="#C47B5E">0</tspan>M<tspan fill="#C47B5E">1</tspan>US</text>
    <text x="75" y="160" fill="currentColor" opacity="0.6" style={{fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px'}}>CORE.SYSTEM_V1.0 // DESIGNED_FOR_ORDER</text>
    <g fill="currentColor" opacity="0.6" textAnchor="end" style={{fontFamily:'monospace',fontSize:'11px'}}>
      <text x="720" y="80">CONSTELLATION // PHOENIX</text><text x="720" y="100">SECONDARY_DATA // 228</text>
    </g>
  </svg>
);

const SocialStaticSVG = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full">
    <rect x="125" y="125" width="262" height="262" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
    <rect x="110" y="110" width="292" height="292" fill="none" stroke="#C47B5E" strokeWidth="1" opacity="0.3"/>
    <line x1="110" y1="110" x2="140" y2="110" stroke="currentColor" strokeWidth="3"/><line x1="402" y1="402" x2="372" y2="402" stroke="currentColor" strokeWidth="3"/>
    <g fill="currentColor" textAnchor="middle" style={{fontFamily:'sans-serif',fontWeight:800,fontSize:'36px',letterSpacing:'12px'}}>
      <text x="256" y="190">PROTO</text><text x="256" y="250">MIUS</text>
    </g>
    <text x="256" y="310" fill="#C47B5E" textAnchor="middle" style={{fontFamily:'monospace',fontWeight:700,fontSize:'32px',letterSpacing:'6px'}}>001</text>
    <text x="256" y="360" fill="#C47B5E" textAnchor="middle" style={{fontFamily:'monospace',fontSize:'14px',letterSpacing:'8px'}}>▲■◓◈⬡</text>
  </svg>
);

const SocialPulseSVG = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full">
    <defs><style>{`@keyframes scanline { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } } .core-code { animation: scanline 2s infinite ease-in-out; }`}</style></defs>
    <rect x="110" y="110" width="292" height="292" fill="none" stroke="#C47B5E" strokeWidth="1" opacity="0.3"/>
    <line x1="110" y1="110" x2="140" y2="110" stroke="currentColor" strokeWidth="3"/><line x1="402" y1="402" x2="372" y2="402" stroke="currentColor" strokeWidth="3"/>
    <g fill="currentColor" textAnchor="middle" style={{fontFamily:'sans-serif',fontWeight:800,fontSize:'36px',letterSpacing:'12px'}}>
      <text x="256" y="190">PROTO</text><text x="256" y="250">MIUS</text>
    </g>
    <text x="256" y="310" fill="#C47B5E" className="core-code" textAnchor="middle" style={{fontFamily:'monospace',fontWeight:700,fontSize:'32px',letterSpacing:'6px'}}>001</text>
    <text x="256" y="360" fill="#C47B5E" textAnchor="middle" style={{fontFamily:'monospace',fontSize:'14px',letterSpacing:'8px'}}>▲■◓◈⬡</text>
  </svg>
);

export default LogoGallery;