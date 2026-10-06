import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, PhoneCall } from 'lucide-react'
import {
  aboutText,
  contactInfo,
  faqs,
  marketFeatures,
  prices,
  priceNote,
  services,
  values,
} from '../data/content'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

/* ------------------- Hakkımızda ve Misyonumuz ------------------- */
export function AboutDetail() {
  return (
    <div>
      <motion.p {...fadeUp} className="max-w-3xl leading-relaxed text-silver/90">
        {aboutText}
      </motion.p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            {...fadeUp}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10">
              <v.icon className="h-5 w-5 text-neon" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white">
                {v.title.toUpperCase()}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-silver/75">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ------------------- Teknik Servis Hizmetlerimiz ------------------- */
export function ServicesDetail() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          {...fadeUp}
          transition={{ delay: 0.05 * i, duration: 0.35 }}
          className="group/s rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-neon/40"
        >
          <s.icon className="h-6 w-6 text-neon transition-transform duration-300 group-hover/s:scale-110" />
          <h4 className="mt-3 text-sm font-semibold text-white">{s.title}</h4>
          <p className="mt-1 text-xs leading-relaxed text-silver/70">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

/* ------------------- Teknik Servis Fiyatlandırmamız ------------------- */
export function PricingDetail() {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/8">
        {prices.map((p, i) => (
          <motion.div
            key={p.name}
            {...fadeUp}
            transition={{ delay: 0.04 * i, duration: 0.3 }}
            className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${
              i % 2 === 0 ? 'bg-white/[0.03]' : 'bg-transparent'
            }`}
          >
            <span className="text-silver/85">{p.name}</span>
            <span
              className={`shrink-0 font-display text-xs font-bold tracking-wider ${
                p.highlight ? 'text-glow text-neon' : 'text-white'
              }`}
            >
              {p.price}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.p
        {...fadeUp}
        transition={{ delay: 0.3 }}
        className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-silver/60"
      >
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
        {priceNote}
      </motion.p>
    </div>
  )
}

/* ------------------- Laptop Pazarı ------------------- */
export function MarketDetail() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {marketFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            {...fadeUp}
            transition={{ delay: 0.06 * i, duration: 0.35 }}
            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10">
              <f.icon className="h-5 w-5 text-neon" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{f.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-silver/70">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeUp} transition={{ delay: 0.25 }} className="mt-6 flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-plasma to-neon px-5 py-2.5 font-display text-xs font-bold tracking-widest text-space transition-shadow hover:shadow-neon-lg">
          <PhoneCall className="h-4 w-4" />
          LAPTOPUNU SAT / TAKAS ET
        </button>
        <span className="self-center text-xs text-silver/60">
          Stoktaki cihazlar için iletişime geçin.
        </span>
      </motion.div>
    </div>
  )
}

/* ------------------- Sıkça Sorulanlar ------------------- */
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="h-4 w-4 shrink-0 text-neon" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="border-t border-white/8 px-4 py-3 text-sm leading-relaxed text-silver/80">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqDetail() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => (
        <motion.div key={f.q} {...fadeUp} transition={{ delay: 0.05 * i, duration: 0.3 }}>
          <FaqItem q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
        </motion.div>
      ))}
    </div>
  )
}

/* ------------------- İletişim Bilgileri ------------------- */
export function ContactDetail() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="grid gap-3 lg:col-span-2">
        {contactInfo.map((c, i) => {
          const inner = (
            <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-neon/40">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10">
                <c.icon className="h-5 w-5 text-neon" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-silver/50">
                  {c.label.toUpperCase()}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-white">{c.value}</p>
              </div>
            </div>
          )
          return (
            <motion.div key={c.label} {...fadeUp} transition={{ delay: 0.05 * i, duration: 0.3 }}>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </motion.div>
          )
        })}
        <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
          <a
            href="tel:+902125550000"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-plasma to-neon px-5 py-3 font-display text-xs font-bold tracking-widest text-space transition-shadow hover:shadow-neon-lg"
          >
            <PhoneCall className="h-4 w-4" />
            HEMEN ARA
          </a>
        </motion.div>
      </div>

      {/* Harita alanı (placeholder) */}
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.2 }}
        className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-center lg:col-span-3"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(102,252,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-3 inline-block h-3 w-3 rounded-full bg-neon shadow-neon"
        />
        <p className="font-display text-xs font-bold tracking-[0.3em] text-silver/70">
          HARİTA YAKINDA
        </p>
        <p className="mt-2 max-w-xs text-xs text-silver/50">
          Uzay üssümüzün konumu interaktif harita ile bu alanda gösterilecek.
        </p>
      </motion.div>
    </div>
  )
}

/* ------------------- Detay seçici ------------------- */
const renderers = {
  about: AboutDetail,
  services: ServicesDetail,
  pricing: PricingDetail,
  market: MarketDetail,
  faq: FaqDetail,
  contact: ContactDetail,
}

export function CardDetail({ type }) {
  const Renderer = renderers[type]
  return Renderer ? <Renderer /> : null
}

// Detay içindeki butonların kart toggle'ını tetiklememesi için yardımcı
export const stopProp = (e) => e.stopPropagation()
