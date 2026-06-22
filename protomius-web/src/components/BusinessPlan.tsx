import React from 'react';
import { PROTOMIUS_PRICING as data } from '../config/services';
import { Shield, Zap, Target, DollarSign, Cpu, Search, HelpCircle, Briefcase } from 'lucide-react';

const BusinessPlan: React.FC = () => {
  return (
    <section className="py-24 bg-space-900 text-silver font-sans px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">
            PROTOMIUS // <span className="text-copper">STRATEGIA OPERATIVA</span>
          </h2>
          <p className="text-silver/40 font-mono text-sm uppercase tracking-widest">v1.0 - Asset & Revenue Plan</p>
        </div>

        {/* LISTINO PREZZI DETTAGLIATO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <PriceTable title="Web Solutions" items={data.web_solutions} icon={<Globe size={18}/>} />
          <PriceTable title="AI Innovation" items={data.ai_innovation} icon={<Cpu size={18}/>} />
          <PriceTable title="Branding & Legal" items={data.branding_legal} icon={<Shield size={18}/>} />
          <PriceTable title="Technical Expert" items={data.technical_expert} icon={<Zap size={18}/>} />
        </div>

        {/* FOCUS: PROBLEM SOLVING (IL TUO VALORE AGGIUNTO) */}
        <div className="mb-24 p-8 border border-copper/20 bg-copper/5 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <HelpCircle className="text-copper" size={32} />
            <h3 className="text-2xl font-bold uppercase tracking-tight">Problem Solving Tecnologico (Analisi 100€/hr)</h3>
          </div>
          <p className="text-silver/60 mb-6 leading-relaxed">
            Sfruttiamo 20 anni di esperienza come Tecnico Hardware, Sistemista e Developer per risolvere criticità che le normali agenzie non sanno gestire:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-space-900/50 p-4 border border-white/5 italic">"Recupero dati e database corrotti, bonifica siti hackerati e hardening di sicurezza."</div>
            <div className="bg-space-900/50 p-4 border border-white/5 italic">"Ottimizzazione sistemistica di server Linux e risoluzione colli di bottiglia hardware/software."</div>
            <div className="bg-space-900/50 p-4 border border-white/5 italic">"Debug avanzato di codice legacy e integrazioni API complesse."</div>
          </div>
        </div>

        {/* PIANO ACQUISIZIONE CLIENTI */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Target className="text-copper" size={28} />
              <h3 className="text-2xl font-bold uppercase">Missioni di Acquisizione</h3>
            </div>
            <div className="space-y-4">
              <Mission num="01" title="Protocollo 'Loom Audit'" desc="Analisi video gratuita di 3 minuti su siti di aziende locali con problemi tecnici evidenti. Conversione basata sulla dimostrazione immediata di competenza." />
              <Mission num="02" title="White Label For Freelance" desc="Diventare il braccio tecnico di agenzie grafiche e Social Media Manager che non hanno competenze di sviluppo senior." />
              <Mission num="03" title="AI Transformation Consulting" desc="Contattare vecchi clienti offrendo l'integrazione di sistemi AI per abbattere i loro costi di gestione." />
            </div>
          </div>
          
          <div className="bg-white/[0.02] p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign size={80}/></div>
            <h3 className="text-xl font-bold uppercase mb-6 flex items-center"><Briefcase className="mr-2 text-copper" /> Obiettivi Finanziari</h3>
            <ul className="space-y-4 font-mono text-xs text-silver/60">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>BREAK-EVEN POINT:</span> <span className="text-copper">3 Mesi</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>TARGET ANNUALE:</span> <span className="text-copper">60.000€ - 80.000€</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>MARGINE MEDIO:</span> <span className="text-copper">85% (Bassissimi costi fissi)</span></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

const PriceTable = ({ title, items, icon }: { title: string, items: any[], icon: any }) => (
  <div className="bg-white/[0.01] border border-white/10 p-6 hover:border-copper/50 transition-all">
    <div className="flex items-center space-x-2 text-copper mb-6 uppercase text-xs font-bold tracking-widest">
      {icon} <span>{title}</span>
    </div>
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="group">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[11px] leading-tight text-silver/60 group-hover:text-silver transition-colors">{item.name}</span>
            <span className="text-sm font-bold text-copper ml-2">€{item.price}</span>
          </div>
          <div className="text-[9px] uppercase opacity-30 font-mono tracking-tighter">{item.type}</div>
        </div>
      ))}
    </div>
  </div>
);

const Mission = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="p-5 border-l border-copper/30 bg-white/[0.02] hover:bg-copper/5 transition-all">
    <div className="text-copper font-mono text-[10px] mb-1">MISSION_SET_{num}</div>
    <h4 className="font-bold text-sm uppercase mb-2">{title}</h4>
    <p className="text-xs text-silver/50 leading-relaxed italic">{desc}</p>
  </div>
);

const Globe = ({ size }: { size: number }) => <Search size={size} />; // Fallback icon

export default BusinessPlan;