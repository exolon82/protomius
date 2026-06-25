import React from 'react';
import { PROTOMIUS_PRICING as data } from '../config/services';
import {
  Zap, Cpu, Globe, AlertTriangle,
  CheckCircle, Briefcase,
} from 'lucide-react';

const BusinessPlan: React.FC = () => {
  return (
    <section id="protocol-details" className="py-24 bg-[#0A0F1D] text-silver px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* 1. SINTESI ESECUTIVA */}
        <div className="mb-24 border-l-2 border-copper pl-8">
          <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-4">01 // Executive Summary</h2>
          <p className="text-base md:text-lg text-white font-light leading-relaxed mb-6">
            <strong>PROTOMIUS</strong> è un’entità professionale operante nello sviluppo web high-end e nell’integrazione di sistemi di Intelligenza Artificiale. Il brand si posiziona come un <em>Laboratorio di Architettura Digitale</em>.
          </p>
          <p className="text-sm text-silver/60 leading-relaxed italic">
            Il payoff <strong>"Designed for Order"</strong> riassume la missione aziendale: risolvere l'entropia (caos) digitale dei clienti attraverso l'applicazione di protocolli tecnici rigorosi, basati su 20 anni di esperienza informatica.
          </p>
        </div>

        {/* 2. PROFILO FOUNDER */}
        <div className="mb-24 grid md:grid-cols-2 gap-12 items-center bg-white/[0.01] p-8 border border-white/5">
          <div>
            <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-6">02 // Asset Tecnico Primario</h2>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Nicola Lacerenza</h3>
            <ul className="space-y-4">
              <li className="text-sm flex items-start gap-3 italic"><CheckCircle size={16} className="text-copper mt-1" /> 20 Anni di esperienza: Sviluppatore senior evolutosi da competenze sistemistiche hardware e Linux.</li>
              <li className="text-sm flex items-start gap-3 italic"><CheckCircle size={16} className="text-copper mt-1" /> Mentalità Autodidatta: Adattamento costante (AI, local LLM, nuovi framework).</li>
              <li className="text-sm flex items-start gap-3 italic"><CheckCircle size={16} className="text-copper mt-1" /> Competenze Trasversali: WP Custom, React, PHP, Python, SEO tecnica e Google Ads.</li>
            </ul>
          </div>
          <div className="text-right opacity-20 hidden md:block">
            <Briefcase size={200} strokeWidth={0.5} />
          </div>
        </div>



        {/* 4. LISTINO PREZZI (TABELLE) */}
        <div className="mb-24">
          <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-12">04 // Portfolio Servizi & Listino [Inc. Rincaro 35%]</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WEB ARCHITECTURE */}
            <PriceCategory title="Architetture Web" icon={<Globe className="text-copper" size={20} />}>
              {data.web_architecture.map((item, i) => (
                <PriceItem key={i} name={item.name} price={item.price} note={item.note} />
              ))}
            </PriceCategory>

            {/* AI INNOVATION */}
            <PriceCategory title="Innovazione AI" icon={<Cpu className="text-copper" size={20} />}>
              {data.ai_innovation.map((item, i) => (
                <PriceItem key={i} name={item.name} price={item.price} note={item.note} />
              ))}
            </PriceCategory>

            {/* SPECIALIST SERVICES */}
            <PriceCategory title="Servizi Specialistici" icon={<Zap className="text-copper" size={20} />}>
              {data.specialist_services.map((item, i) => (
                <PriceItem key={i} name={item.name} price={item.price} note={item.note} />
              ))}
            </PriceCategory>
          </div>
        </div>

        {/* 5. MODELLO CONTINUITY */}
        <div className="mb-24">
          <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-10">05 // Modello Continuity</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.continuity_protocols.map((p, i) => (
              <div key={i} className="p-8 border border-copper/30 bg-copper/5">
                <h4 className="text-white font-bold uppercase mb-2">{p.name}</h4>
                <div className="text-2xl font-black text-copper mb-4">€{p.price}</div>
                <p className="text-sm text-silver/60 italic">{p.desc}</p>
              </div>
            ))}
          </div>
          {/* ALERT RATE */}
          <div className="mt-8 bg-red-950/20 border border-red-500/30 p-6 flex items-center gap-6">
            <AlertTriangle className="text-red-500 shrink-0" size={24} />
            <p className="text-sm italic">
              In assenza di accordo Continuity, gli interventi tecnici verranno fatturati unicamente alla tariffa on-demand di <strong>€{data.extra.on_demand_rate} al giorno</strong>.
            </p>
          </div>
        </div>

        {/* 6. MISSIONI ACQUISIZIONE */}
        <div className="mb-24">
          <h2 className="text-sm font-mono text-copper uppercase tracking-[0.4em] mb-10">06 // Strategia di Acquisizione (Missioni)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MissionCard title="Deep Scan Protocol" desc="Screening mirato delle PMI con vulnerabilità di sicurezza o layout obsoleti." />
            <MissionCard title="Video Audit Direct" desc="Invio report personalizzati Loom (max 3 min) per mostrare l'errore nel codice." />
            <MissionCard title="Marketplace & Networking" desc="Presidio Toptal, Mayple, ProntoPro e subappalto per agenzie marketing-only." />
          </div>
        </div>

        {/* 7. INFRASTRUTTURA & CONCLUSIONI */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 opacity-80">
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-widest">07 // Infrastruttura</h3>
            <p className="text-xs leading-relaxed italic text-silver/50">
              Filosofia <strong>"Asset-Light"</strong>: Istanze Cloud VPS (Hetzner/DigitalOcean) fatturate direttamente all'utente finale. Rischio finanziario nullo e <strong>margine operativo stimato: {data.extra.margin}</strong>.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-widest">08 // Conclusioni</h3>
            <p className="text-xs leading-relaxed italic text-silver/50">
              PROTOMIUS è un partner ingegneristico d'élite. L'unione tra background sistemistico ventennale e avanguardia AI rende l'ecosistema aziendale solido e futuribile.
            </p>
          </div>
        </div>

        {/* FINAL TAG */}
        <div className="text-center font-mono text-xs text-copper tracking-[0.4em] opacity-40 uppercase">
          [ Il Protocollo 001 è ora attivo e pronto per la scalabilità ]
        </div>

      </div>
    </section>
  );
};

/* SOTTO-COMPONENTI */
const PriceCategory = ({ title, icon, children }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-8">
    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
      {icon} <h3 className="text-sm font-bold text-white uppercase tracking-widest">{title}</h3>
    </div>
    <div className="space-y-8">{children}</div>
  </div>
);

const PriceItem = ({ name, price, note }: any) => (
  <div className="group">
    <div className="flex justify-between items-end gap-4 mb-1">
      <span className="text-sm font-bold text-white group-hover:text-copper transition-colors">{name}</span>
      <span className="text-base font-mono font-bold text-copper whitespace-nowrap">€{price}</span>
    </div>
    <p className="text-xs text-silver/40 italic leading-snug">{note}</p>
  </div>
);

const MissionCard = ({ title, desc }: any) => (
  <div className="p-6 border-l border-copper bg-white/[0.02]">
    <h4 className="text-sm font-bold text-white uppercase mb-2 tracking-tight">{title}</h4>
    <p className="text-xs text-silver/50 italic leading-relaxed">{desc}</p>
  </div>
);

export default BusinessPlan;