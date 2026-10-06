import { motion } from 'framer-motion'
import { sections } from '../data/content'
import FeatureCard from './FeatureCard'

/**
 * Özellikler / Hizmetler bölümü: 2 sütun × 3 satır grid.
 */
export default function SectionsGrid({ openCard, setOpenCard }) {
  const toggle = (id) => setOpenCard(openCard === id ? null : id)

  return (
    <section id="moduller" className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-[11px] font-semibold tracking-[0.4em] text-neon">// ÜS MODÜLLERİ</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-[0.1em] text-white sm:text-3xl">
          KEŞFET
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-neon/70 to-transparent" />
        <p className="mt-4 text-sm text-silver/70">
          Hizmetlerimizi ve bilgi alanlarını keşfedin — detay için modüle tıklayın.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section, i) => (
          <FeatureCard
            key={section.id}
            section={section}
            index={i}
            open={openCard === section.id}
            onToggle={() => toggle(section.id)}
          />
        ))}
      </div>
    </section>
  )
}
