import { navItems } from '../data/content'
import Logo from './Logo'

export default function Footer({ onNavClick }) {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-space-800/60 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        {/* Marka */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11">
              <Logo className="h-full w-full drop-shadow-[0_0_10px_rgba(102,252,241,0.4)]" />
            </div>
            <span className="font-display text-sm font-bold tracking-[0.22em] text-white">
              LAPTOP DOKTORU
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver/70">
            Teknik servis, laptop tamiri ve laptop pazarı — güvenli, şeffaf ve dürüst hizmetin
            adresi.
          </p>
        </div>

        {/* Hızlı erişim */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.3em] text-neon">
            HIZLI ERİŞİM
          </h4>
          <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="relative w-fit text-left text-sm text-silver/75 transition-colors hover:text-neon after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neon after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Slogan */}
        <div className="flex flex-col justify-center rounded-2xl border border-neon/20 bg-neon/[0.04] p-6 text-center">
          <p className="font-display text-xs font-bold leading-relaxed tracking-[0.3em] text-white">
            GÜVENLİ, ŞEFFAF VE
            <br />
            DÜRÜST HİZMETİN
            <br />
            <span className="text-glow text-neon">ADRESİ</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-silver/40">
        © 2026 Laptop Doktoru — Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
