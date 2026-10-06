import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, Sparkles } from 'lucide-react'

/**
 * Hero yan paneli — kampanya ve indirimler için ayrılmış alan.
 * Şimdilik "Kampanyalar Yakında" durumu + görsel bülten kayıt formu.
 */
export default function CampaignPanel() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <aside className="glass relative flex h-full min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center shadow-card">
      {/* Köşe braketleri — uzay paneli havası */}
      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-neon/40" />
      <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-neon/40" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-neon/40" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-neon/40" />

      {/* Dönen radar halkası */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.09]">
        <div className="h-80 w-80 animate-spin-slow rounded-full border border-dashed border-neon" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/60 opacity-[0.09]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.09] [background:radial-gradient(circle,rgba(102,252,241,0.14),transparent_65%)]" />

      <div className="relative z-10 flex w-full max-w-xs flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-5 text-neon"
        >
          <Sparkles className="h-10 w-10" />
        </motion.div>

        <h3 className="font-display text-xs font-bold tracking-[0.35em] text-neon">
          KAMPANYALAR &amp; İNDİRİMLER
        </h3>
        <p className="mt-4 font-display text-2xl font-bold leading-snug text-white">
          Kampanyalar
          <br />
          Yakında
        </p>
        <p className="mt-3 text-sm leading-relaxed text-silver/70">
          Özel fırsatlar ve indirimler bu panelde yayınlanacak.
        </p>

        {/* Bülten kaydı — şimdilik görsel, backend yok */}
        <div className="mt-7 w-full">
          <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-silver/60">
            BÜLTENE KATIL
          </p>
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2 rounded-xl border border-neon/40 bg-neon/10 px-4 py-3 text-sm font-medium text-neon"
            >
              <Check className="h-4 w-4 shrink-0" />
              Kaydoldunuz! Kampanyalar ilk size ulaşacak.
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-2.5">
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-silver/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  aria-label="E-posta adresiniz"
                  className="w-full rounded-xl border border-white/15 bg-space/70 py-2.5 pl-10 pr-3 text-sm text-white outline-none transition-colors placeholder:text-silver/40 focus:border-neon focus:shadow-neon"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-plasma to-neon py-2.5 font-display text-xs font-bold tracking-widest text-space transition-shadow hover:shadow-neon-lg"
              >
                KAYDOL
              </button>
            </form>
          )}
          <p className="mt-3 text-[10px] text-silver/40">Spam yok — sadece kampanya duyuruları.</p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.3em] text-silver/50">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          MODÜL HAZIRLANIYOR
        </div>
      </div>
    </aside>
  )
}
