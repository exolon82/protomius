// src/config/services.ts
export const PROTOMIUS_PRICING = {
  web_architecture: [
    { name: "Sito Vetrina WordPress", price: "810", note: "Manutenzione standard +€199/anno" },
    { name: "E-Commerce WordPress", price: "1.350", note: "+€250/anno manutenzione. Extra: €50 ogni 150 prodotti" },
    { name: "Restyling Sito WP", price: "540", note: "+€199/anno manutenzione standard" },
    { name: "Sito Vetrina AdHoc (React/Vite)", price: "2.700", note: "Sviluppo nativo alte prestazioni" },
    { name: "E-Commerce AdHoc", price: "5.400", note: "Infrastruttura headless custom" },
  ],
  ai_innovation: [
    { name: "Neural Commerce (AI Driven)", price: "5.400", note: "Automazione prodotti e chatbot. Manutenzione: +€540/anno" },
    { name: "Sito Vetrina AI (Layout Custom)", price: "810", note: "Sviluppo su misura. Manutenzione AI: +€540/anno" },
    { name: "Sito Vetrina AI (Layout Basic)", price: "405", note: "Struttura rapida pre-ottimizzata. Manutenzione AI: +€540/anno" },
    { name: "Sviluppo App/Siti AI (Consulenza)", price: "160/giorno", note: "Prompt engineering e tuning modelli" },
  ],
  specialist_services: [
    { name: "Problem Solving Tecnologico", price: "100/ora", note: "Ripristino malware, bug severi, sistemistica" },
    { name: "Gestione SEO Senior", price: "100/ora", note: "Ottimizzazione tecnica profonda" },
    { name: "Google Ads Management", price: "299/mese", note: "Strategia e monitoraggio (escluso budget media)" },
    { name: "Sviluppo Plugin WP Custom", price: "675+", note: "Architetture PHP proprietarie" },
    { name: "Legal & Privacy (LegalBlink)", price: "80+/anno", note: "Adeguamento GDPR monitorato" },
  ],
  continuity_protocols: [
    { name: "Protocollo Continuity Standard", price: "600/anno", desc: "Aggiornamenti grafici, monitoraggio e sicurezza totale server." },
    { name: "Protocollo AI Maintenance", price: "540/anno", desc: "Mantenimento modelli di calcolo, tuning e flusso continuo API." }
  ],
  extra: {
    on_demand_rate: "110 - 160",
    margin: "85% - 90%"
  }
};