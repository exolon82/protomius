import Header from './components/Header';
import Hero from './components/Hero';
import BusinessPlan from './components/BusinessPlan';

function App() {
  return (
    <div className="transition-colors duration-300">
      <Header />
      <main className="bg-space-900 min-h-screen pt-20"> {/* pt-20 per non finire sotto l'header */}
        <Hero />
        <BusinessPlan />
{/* Inserisci questo blocco nel tuo Footer o alla fine di App.tsx */}
<footer className="py-20 bg-space-900 border-t border-white/5 flex flex-col items-center gap-8">
  
  {/* IL BOTTONE PER APRIRE IL DOCUMENTO HTML */}
  <a 
    href="/business_plan.html" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative px-8 py-4 border border-copper/50 overflow-hidden transition-all hover:border-copper"
  >
    <span className="relative z-10 text-copper font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-3">
      <span className="w-2 h-2 bg-copper animate-pulse"></span>
      Visualizza Business Plan Completo (HTML)
    </span>
    {/* Effetto riempimento al passaggio del mouse */}
    <div className="absolute inset-0 bg-copper opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
  </a>

  {/* COPYRIGHT & METADATI */}
  <div className="text-center opacity-20 font-mono text-[9px] uppercase tracking-[0.5em] text-silver">
    PROTOMIUS // PROTOCOL 001 // ALL RIGHTS RESERVED 2024
  </div>
</footer>
      </main>
    </div>
  )
}
export default App