import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { slides } from '../data/content'

/**
 * Hero slider: hizmetler, kampanyalar ve duyurular.
 * Otomatik ilerler; ok ve noktalarla kontrol edilir.
 */
export default function HeroSlider({ onCta }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const slide = slides[index]

  const paginate = (d) => {
    setDir(d)
    setIndex((i) => (i + d + slides.length) % slides.length)
  }

  // Her slayt değişiminde sayaç sıfırlanır (manuel geçiş otomatik oynatmayı bekletir)
  useEffect(() => {
    const t = setInterval(() => paginate(1), 6500)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const Watermark = slide.icon

  return (
    <div className="glass group relative h-[420px] overflow-hidden rounded-3xl shadow-card sm:h-[460px]">
      {/* İç dekor: ızgara + neon parıltı */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(102,252,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-neon/10 blur-[90px]" />

      <AnimatePresence mode="popLayout" initial={false} custom={dir}>
        <motion.div
          key={slide.id}
          custom={dir}
          initial={{ opacity: 0, x: dir * 90, scale: 0.985 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: dir * -90, scale: 0.985 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col justify-center p-7 sm:p-12"
        >
          {/* Slayt rozeti */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-[10px] font-semibold tracking-[0.3em] text-neon"
          >
            <Sparkles className="h-3 w-3" />
            {slide.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="max-w-xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]"
          >
            {slide.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-silver/85 sm:text-base"
          >
            {slide.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => onCta(slide.target)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-plasma to-neon px-6 py-3 font-display text-sm font-bold tracking-widest text-space transition-shadow hover:shadow-neon-lg"
            >
              {slide.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onCta('hizmetler')}
              className="rounded-xl border border-white/15 px-6 py-3 font-display text-sm font-semibold tracking-widest text-silver transition-colors hover:border-neon/60 hover:text-neon hover:shadow-neon"
            >
              HİZMETLERİ İNCELE
            </button>
          </motion.div>

          {/* Filigran ikon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute -bottom-10 -right-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            >
              <Watermark className="h-56 w-56 text-neon sm:h-72 sm:w-72" />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Kontroller: noktalar */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setDir(i > index ? 1 : -1)
              setIndex(i)
            }}
            aria-label={`Slayt ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-neon shadow-neon' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Kontroller: oklar (dar ekranda noktalarla çakışmaması için gizlenir) */}
      <div className="absolute bottom-4 right-4 hidden gap-2 sm:flex sm:bottom-5 sm:right-5">
        <button
          onClick={() => paginate(-1)}
          aria-label="Önceki slayt"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-silver transition-colors hover:border-neon/60 hover:text-neon hover:shadow-neon"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Sonraki slayt"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-silver transition-colors hover:border-neon/60 hover:text-neon hover:shadow-neon"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
