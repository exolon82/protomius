import React, { useState, useEffect } from 'react';
import { Sun, Moon, Type, Plus, Minus } from 'lucide-react';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  // Gestione Tema
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Gestione Font Size
  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [fontSize]);

  const adjustFont = (delta: number) => {
    setFontSize(prev => Math.min(Math.max(prev + delta, 12), 24));
  };

  return (
    <header className="fixed top-0 w-full z-[100] backdrop-blur-md px-6 py-4 transition-colors duration-400 bg-space-900/80"
            style={{ borderBottom: '1px solid var(--card-border)' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* BRAND MINIMAL */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-copper flex items-center justify-center text-[10px] font-mono text-copper">
            001
          </div>
          <span className="hidden sm:block font-mono text-[10px] tracking-[0.3em] uppercase opacity-50 text-silver">
            Protomius // Alpha_System
          </span>
        </div>

        {/* CONTROLLI ACCESSIBILITÀ */}
        <div className="flex items-center gap-6">
          
          {/* TEMA */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-silver/50 hover:text-copper transition-colors"
            title="Cambia Tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* FONT SCALING */}
          <div className="flex items-center gap-3 pl-6" style={{ borderLeft: '1px solid var(--card-border)' }}>
            <Type size={16} className="text-silver/30" />
            <button 
              onClick={() => adjustFont(-1)} 
              className="p-1 hover:bg-silver/5 text-silver/50 hover:text-copper transition-all"
              title="Diminuisci Font"
            >
              <Minus size={14} />
            </button>
            <span className="font-mono text-[10px] w-4 text-center text-copper">{fontSize}</span>
            <button 
              onClick={() => adjustFont(1)} 
              className="p-1 hover:bg-silver/5 text-silver/50 hover:text-copper transition-all"
              title="Aumenta Font"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* STATUS */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[8px] text-green-500 opacity-70">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            CORE_ACTIVE
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;