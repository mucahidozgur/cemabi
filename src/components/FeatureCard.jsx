import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CardDetail, stopProp } from './CardDetails'

/**
 * Modül kartı: hover'da yukarı kalkar, neon kenarlık + ışık takibi alır.
 * Tıklanınca iki sütunun tamamına yayılarak detaylarını açar.
 */
export default function FeatureCard({ section, index, open, onToggle }) {
  const cardRef = useRef(null)
  const Icon = section.icon

  // Işık takibi (spotlight) — fare konumunu CSS değişkenlerine yazar
  const onMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      ref={cardRef}
      layout
      id={`card-${section.id}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      style={open ? { gridColumn: '1 / -1' } : undefined}
      className="glass group relative cursor-pointer overflow-hidden rounded-3xl p-6 shadow-card transition-colors duration-300 hover:border-neon/40 focus-visible:border-neon/60 focus-visible:outline-none focus-visible:shadow-neon sm:p-8"
    >
      {/* Spotlight: hover'da fareyi takip eden ışık huzmesi */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(102,252,241,0.10), transparent 65%)',
        }}
      />
      {/* Üst kenar neon çizgisi */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10 shadow-neon transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-neon" />
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.14em] text-white sm:text-base">
              {section.title}
            </h3>
            <p className="mt-1 text-[10px] tracking-[0.3em] text-neon/70">
              MODÜL {String(index + 1).padStart(2, '0')}
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-silver transition-colors group-hover:border-neon/50 group-hover:text-neon"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </div>

      <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-silver/80 sm:text-base">
        {section.short}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="relative mt-6 border-t border-white/10 pt-6"
              onClick={stopProp} /* iç tıklamalar kartı kapatmasın */
            >
              <CardDetail type={section.detail} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
