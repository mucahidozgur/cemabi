import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navItems } from '../data/content'

export default function Header({ headerLogoRef, introDone, onNavClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    onNavClick(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`mt-4 flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled ? 'glass shadow-card' : 'border border-transparent'
          }`}
        >
          {/* Logo + marka */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3"
          >
            <div
              ref={headerLogoRef}
              className={`h-11 w-11 transition-opacity duration-300 ${introDone ? 'opacity-100' : 'opacity-0'}`}
            >
              <Logo className="h-full w-full drop-shadow-[0_0_10px_rgba(102,252,241,0.45)]" />
            </div>
            <div className="leading-none">
              <span className="font-display text-sm font-bold tracking-[0.22em] text-white sm:text-base">
                LAPTOP DOKTORU
              </span>
              <p className="mt-1.5 text-[9px] tracking-[0.35em] text-neon/80 sm:text-[10px]">
                TEKNİK SERVİS ÜSSÜ
              </p>
            </div>
          </a>

          {/* Masaüstü menü */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="relative text-[13px] font-medium tracking-wide text-silver/85 transition-colors hover:text-neon after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neon after:shadow-neon after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('iletisim')}
              className="ml-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-plasma to-neon px-4 py-2.5 font-display text-xs font-bold tracking-widest text-space transition-shadow hover:shadow-neon-lg"
            >
              <CalendarCheck className="h-4 w-4" />
              RANDEVU AL
            </button>
          </nav>

          {/* Mobil hamburger */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-silver transition-colors hover:border-neon/50 hover:text-neon hover:shadow-neon lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Slogan alt başlığı */}
        <div className="pointer-events-none mt-3 hidden text-center sm:block">
          <p className="text-[10px] font-medium tracking-[0.4em] text-silver/60 md:text-[11px]">
            GÜVENLİ, ŞEFFAF VE DÜRÜST HİZMETİN ADRESİ
          </p>
        </div>

        {/* Mobil menü */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className="relative rounded-xl px-4 py-3 text-left text-sm font-medium text-silver/90 transition-colors hover:bg-neon/10 hover:text-neon after:absolute after:bottom-1.5 after:left-4 after:h-px after:w-8 after:origin-left after:scale-x-0 after:bg-neon after:shadow-neon after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => go('iletisim')}
                  className="m-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-plasma to-neon px-4 py-3 font-display text-xs font-bold tracking-widest text-space"
                >
                  <CalendarCheck className="h-4 w-4" />
                  HEMEN RANDEVU AL
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
