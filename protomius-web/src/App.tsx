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
        <footer className="py-10 text-center opacity-20 font-mono text-[9px] uppercase tracking-[0.5em] text-silver">
          PROTOMIUS // All Rights Reserved 2024
        </footer>
      </main>
    </div>
  )
}
export default App