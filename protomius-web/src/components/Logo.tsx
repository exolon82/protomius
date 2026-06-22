import React from 'react';

const Logo: React.FC = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 260" width="100%" height="100%">
      <defs>
        <style>{`
          .star { animation: blink 3s infinite ease-in-out; }
          @keyframes blink {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </defs>

      <rect width="800" height="260" fill="#0A0F1D"/>
      <rect x="50" y="50" width="680" height="160" fill="none" stroke="#F5F5F7" strokeWidth="1" opacity="0.15"/>

      <g stroke="#F5F5F7" strokeWidth="0.8" fill="none" opacity="0.3">
        <polyline points="630,70 660,110 680,150" />
        <polyline points="610,120 660,110 710,95" />
        <line x1="680" y1="150" x2="650" y2="180" />
      </g>

      <circle className="star" cx="630" cy="70" r="1.5" fill="#F5F5F7"/>
      <circle className="star" cx="680" cy="150" r="2" fill="#F5F5F7" style={{ animationDelay: '0.5s' }}/>
      <circle className="star" cx="610" cy="120" r="1.5" fill="#F5F5F7" style={{ animationDelay: '1s' }}/>
      <circle className="star" cx="710" cy="95" r="2" fill="#F5F5F7" style={{ animationDelay: '1.5s' }}/>
      <circle className="star" cx="650" cy="180" r="1" fill="#F5F5F7" style={{ animationDelay: '2s' }}/>
      <circle cx="660" cy="110" r="3.5" fill="#C47B5E" opacity="0.75"/>

      <g fill="#F5F5F7" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="44" fontWeight="700" letterSpacing="15" dominantBaseline="central">
        <text x="75" y="115">PR<tspan fill="#C47B5E">0</tspan>T<tspan fill="#C47B5E">0</tspan>M<tspan fill="#C47B5E">1</tspan>US</text>
      </g>

      <g fill="#F5F5F7" fontFamily="'Courier New', Courier, monospace" fontSize="12" fontWeight="400" letterSpacing="3" opacity="0.6">
        <text x="75" y="160">CORE.SYSTEM_V1.0 // DESIGNED_FOR_ORDER</text>
      </g>

      <g fill="#F5F5F7" fontFamily="'Courier New', Courier, monospace" fontSize="11" fontWeight="400" letterSpacing="1" opacity="0.6" textAnchor="end">
        <text x="720" y="80">CONSTELLATION // PHOENIX</text>
        <text x="720" y="100">SECONDARY_DATA // 228</text>
      </g>
    </svg>
  </div>
);

export default Logo;