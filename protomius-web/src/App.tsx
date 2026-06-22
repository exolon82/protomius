import Hero from './components/Hero'
import BusinessPlan from './components/BusinessPlan'

function App() {
  return (
    <main className="bg-space-900 min-h-screen">
      <Hero />
      <div id="protocol-details">
        <BusinessPlan />
      </div>
    </main>
  )
}

export default App