/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // La tua palette Deep Space & Alchemy
        space: {
          900: '#0A0F1D', // Sfondo profondo
          800: '#151B2D', // Sfondo sezioni
        },
        copper: '#C47B5E', // Il colore del "001"
        silver: '#F5F5F7', // Testo principale
      },
      fontFamily: {
        // Assicurati di importare questi font o usare fallback simili
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
