/**
 * Logo: laptop + güç kasası + 2 neon kablo.
 * Kural: KESİNLİKLE yazı yok — sadece sembol.
 */
export default function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Laptop Doktoru logosu">
      <defs>
        <linearGradient id="lg-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9EDF1" />
          <stop offset="0.55" stopColor="#A8B0BA" />
          <stop offset="1" stopColor="#4C5560" />
        </linearGradient>
        <linearGradient id="lg-metalDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8E98A4" />
          <stop offset="1" stopColor="#39414B" />
        </linearGradient>
        <linearGradient id="lg-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#66FCF1" />
          <stop offset="1" stopColor="#45A29E" />
        </linearGradient>
        <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* kablolar: laptop + güç kasası arasında 2 adet neon kablo */}
      <path d="M168 20 C140 0 112 12 100 32" stroke="#66FCF1" strokeWidth="4.5" strokeLinecap="round" filter="url(#f-glow)" />
      <path d="M168 20 C140 0 112 12 100 32" stroke="#EAFEFD" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      <path d="M170 122 C158 136 138 122 126 106" stroke="#66FCF1" strokeWidth="4.5" strokeLinecap="round" filter="url(#f-glow)" />
      <path d="M170 122 C158 136 138 122 126 106" stroke="#EAFEFD" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />

      {/* kablo uçları (plug) */}
      <rect x="164" y="15" width="9" height="9" rx="2" fill="url(#lg-metalDark)" />
      <rect x="94" y="26" width="9" height="9" rx="2" fill="url(#lg-metalDark)" />
      <rect x="166" y="116" width="9" height="9" rx="2" fill="url(#lg-metalDark)" />
      <rect x="121" y="100" width="9" height="9" rx="2" fill="url(#lg-metalDark)" />

      {/* laptop */}
      <rect x="18" y="30" width="86" height="60" rx="5" fill="url(#lg-metal)" />
      <rect x="26" y="38" width="70" height="44" rx="2" fill="#0B0C10" stroke="#45A29E" strokeOpacity="0.4" />
      {/* ekranda nabız çizgisi — "doktor" dokunuşu */}
      <path d="M28 70 L44 70 L53 58 L63 78 L73 58 L83 70 L94 70" stroke="url(#lg-screen)" strokeWidth="2" fill="none" opacity="0.75" filter="url(#f-glow)" />
      <line x1="31" y1="44" x2="58" y2="44" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="2" />
      <rect x="6" y="94" width="120" height="11" rx="5.5" fill="url(#lg-metalDark)" />
      <rect x="50" y="98" width="28" height="3" rx="1.5" fill="#66FCF1" opacity="0.9" filter="url(#f-glow)" />

      {/* güç kasası */}
      <rect x="152" y="18" width="56" height="104" rx="6" fill="url(#lg-metal)" />
      <rect x="160" y="26" width="40" height="88" rx="3" fill="#141922" stroke="#66FCF1" strokeOpacity="0.22" />
      <line x1="166" y1="38" x2="194" y2="38" stroke="#45A29E" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
      <line x1="166" y1="47" x2="194" y2="47" stroke="#45A29E" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
      <line x1="166" y1="56" x2="194" y2="56" stroke="#45A29E" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
      <circle cx="180" cy="108" r="5" fill="none" stroke="#66FCF1" strokeWidth="2" />
      <circle cx="180" cy="108" r="2.2" fill="#66FCF1" filter="url(#f-glow)" />
      <rect x="158" y="120" width="12" height="4" rx="2" fill="url(#lg-metalDark)" />
      <rect x="190" y="120" width="12" height="4" rx="2" fill="url(#lg-metalDark)" />

      {/* uzay parıltıları */}
      <path d="M140 2 L142.6 9 L149.5 11.5 L142.6 14 L140 21 L137.4 14 L130.5 11.5 L137.4 9 Z" fill="#66FCF1" opacity="0.75" filter="url(#f-glow)" />
      <circle cx="36" cy="14" r="1.8" fill="#C5C6C7" opacity="0.55" />
    </svg>
  )
}
