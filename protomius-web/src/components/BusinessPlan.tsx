import React from 'react';
import { PROTOMIUS_PRICING as data } from '../config/services';
import { Shield, Zap, Cpu, Globe, AlertTriangle, CheckCircle } from 'lucide-react';

const BusinessPlan: React.FC = () => {
  return (
    <section id="protocol-details" className="py-24 bg-space-900 text-silver px-6 transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4" style={{ color: 'var(--text-primary)' }}>
            PROTOMIUS // <span className="text-copper">OFFERTA OPERATIVA</span>
          </h2>
          <p className="text-copper font-mono text-xs tracking-widest opacity-60 italic">
            Configurazione costi v2.0 // Ordine Restaurato
          </p>
        </div>

        {/* GRIGLIA SERVIZI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* WEB SOLUTIONS */}
          <div className="p-8" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <Globe className="text-copper mb-6" size={24} />
            <h3 className="text-lg font-bold uppercase mb-6 pb-2" style={{ borderBottom: '1px solid var(--card-border)' }}>Web Architecture</h3>
            <div className="space-y-6">
              {data.web_solutions.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                    <span className="text-lg font-bold text-copper">€{item.price}</span>
                  </div>
                  <p className="text-[10px] text-silver/40 mt-1 italic leading-tight">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI INNOVATION */}
          <div className="p-8" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <Cpu className="text-copper mb-6" size={24} />
            <h3 className="text-lg font-bold uppercase mb-6 pb-2" style={{ borderBottom: '1px solid var(--card-border)' }}>AI Integration</h3>
            <div className="space-y-6">
              {data.ai_innovation.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                    <span className="text-lg font-bold text-copper">€{item.price}</span>
                  </div>
                  {item.name === "Neural Commerce (AI)" && (
                    <p className="text-[9px] text-copper/60 mt-1 uppercase font-bold tracking-tighter">
                      Definizione: Automazione cataloghi, descrizioni generate da AI e ricerca semantica.
                    </p>
                  )}
                  <p className="text-[10px] text-silver/40 mt-1 italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTINUITY PLAN (ALL-IN-ONE) */}
          <div className="border-2 border-copper/30 bg-copper/5 p-8 relative overflow-hidden">
            <Zap className="text-copper mb-6" size={24} />
            <div className="absolute top-4 right-4 text-[10px] font-mono text-copper opacity-50 uppercase tracking-widest">Recommended</div>
            <h3 className="text-lg font-bold uppercase mb-6 border-b border-copper/20 pb-2">{data.maintenance_all_in.name}</h3>
            <div className="text-2xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>€{data.maintenance_all_in.price}</div>
            <ul className="space-y-3 mb-8">
              {data.maintenance_all_in.features.map((f, i) => (
                <li key={i} className="text-[11px] flex items-center gap-2 text-silver/70">
                  <CheckCircle size={12} className="text-copper" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[9px] opacity-40 italic font-mono uppercase">Costi Server (Hosting) esclusi e a carico del cliente.</p>
          </div>
        </div>

        {/* MESSAGGIO TARIFFE EXTRA */}
        <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-sm flex flex-col md:flex-row items-center gap-6">
          <AlertTriangle className="text-red-500 shrink-0" size={32} />
          <div className="text-center md:text-left">
            <h4 className="font-bold uppercase text-sm mb-2" style={{ color: 'var(--text-primary)' }}>Avviso Protocollo Interventi Extra</h4>
            <p className="text-silver/60 text-xs leading-relaxed italic">
              In assenza di un contratto di manutenzione annuale attivo (Protocollo Continuity), qualsiasi modifica, fix o aggiornamento richiesto verrà fatturato con una <span className="font-bold" style={{ color: 'var(--text-primary)' }}>tariffa on-demand di €80 - €120 al giorno</span>, previa disponibilità tecnica.
            </p>
          </div>
          <div className="ml-auto text-right font-mono text-[10px] opacity-30">
            REF_CODE: NO_CONTRACT_RATE_v1
          </div>
        </div>

        {/* INFILTRAZIONE MERCATO */}
        <div className="mt-24">
          <div className="flex items-center space-x-3 mb-10">
            <Globe className="text-copper" size={30} />
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Infiltrazione Mercato // Strategia di Acquisizione</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CANALI PASSIVI: MARKETPLACE */}
            <div className="space-y-6">
              <h3 className="text-sm font-mono text-copper uppercase tracking-widest pb-2" style={{ borderBottom: '1px solid var(--card-border)' }}>Inbound: Marketplace Presidiati</h3>
              <div className="grid grid-cols-2 gap-4">
                <Platform name="Toptal / Mayple" level="Elite" desc="Per progetti Senior ad alto budget." />
                <Platform name="Upwork / Freelancer" level="Global" desc="Volume e progetti Custom AI." />
                <Platform name="ProntoPro" level="Local" desc="Target PMI Italia / Consulenza diretta." />
                <Platform name="99Designs" level="Creative" desc="Vendita Brand Identity & Concept." />
              </div>
            </div>

            {/* STRATEGIA ATTIVA: OUTREACH */}
            <div className="space-y-6">
              <h3 className="text-sm font-mono text-copper uppercase tracking-widest pb-2" style={{ borderBottom: '1px solid var(--card-border)' }}>Outbound: Deep Scan Protocol</h3>
              <div className="space-y-4">
                <div className="p-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <p className="text-xs font-bold uppercase mb-1" style={{ color: 'var(--text-primary)' }}>Targeting Diretto</p>
                  <p className="text-[10px] text-silver/50 leading-relaxed italic">
                    Individuazione di aziende con infrastrutture obsolete (No-SSL, Mobile-Fail, Slow-Loading). 
                  </p>
                </div>
                <div className="p-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <p className="text-xs font-bold uppercase mb-1" style={{ color: 'var(--text-primary)' }}>Video Audit Personalizzato</p>
                  <p className="text-[10px] text-silver/50 leading-relaxed italic">
                    Invio di mini-report tecnici (Loom) che mostrano il "bug" e la "soluzione" PROTOMIUS. Efficacia di conversione stimata: 15-20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Platform = ({ name, level, desc }: { name: string, level: string, desc: string }) => (
  <div className="p-4 hover:border-copper/30 transition-all" style={{ border: '1px solid var(--card-border)', backgroundColor: 'var(--card-bg)' }}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] font-bold uppercase" style={{ color: 'var(--text-primary)' }}>{name}</span>
      <span className="text-[8px] px-2 py-0.5 bg-copper/20 text-copper rounded-full uppercase">{level}</span>
    </div>
    <p className="text-[9px] text-silver/40 leading-tight italic">{desc}</p>
  </div>
);

export default BusinessPlan;