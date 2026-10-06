import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const INTRO_SIZE = 168 // px — intro logonun boyutu

/**
 * Açılış animasyonu:
 * 1. Logo ekranın tam ortasında scale + parlama efektiyle belirir.
 * 2. Spring animasyonla sol üst köşedeki header logosunun yerine uçar.
 * 3. Bittiğinde onDone çağrılır — header logosu görünür olur, overlay kalkar.
 */
export default function LogoIntro({ headerLogoRef, onDone }) {
  const [flyTarget, setFlyTarget] = useState(null)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    // Hareket azaltma tercihi varsa animasyonu atla
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone()
      return
    }
    const el = headerLogoRef?.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setFlyTarget({
      // Logo kutusu left/top %50 + negatif margin ile ortalandığı için
      // başlangıç x/y = 0'dır; hedef, header logosunun merkez kaymasıdır
      x: r.left + r.width / 2 - window.innerWidth / 2,
      y: r.top + r.height / 2 - window.innerHeight / 2,
      scale: r.width / INTRO_SIZE,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerLogoRef])

  if (finished) return null

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden bg-space">
      {/* Parlama halkaları (merkezleme grid ile yapılır — motion transform'u bozmasın) */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <motion.div
          className="h-64 w-64 rounded-full border-2 border-neon/70"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: [0.3, 2.4, 3], opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.15, times: [0, 0.55, 1], ease: 'easeOut' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <motion.div
          className="h-64 w-64 rounded-full border border-neon/50"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: [0.3, 1.9, 2.4], opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.4, delay: 0.12, times: [0, 0.55, 1], ease: 'easeOut' }}
        />
      </div>
      {/* Arka planda tek karelik neon flaş */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, rgba(102,252,241,0.16), transparent 55%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, times: [0, 0.35, 1], ease: 'easeOut' }}
      />

      {/* Logo: patla → bekle → header'a uç */}
      <motion.div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: INTRO_SIZE,
          height: INTRO_SIZE,
          marginLeft: -INTRO_SIZE / 2,
          marginTop: -INTRO_SIZE / 2,
        }}
        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
        animate={
          flyTarget
            ? {
                scale: [0, 1.35, 1, flyTarget.scale],
                x: [0, 0, flyTarget.x],
                y: [0, 0, flyTarget.y],
                opacity: [0, 1, 1, 1],
                transition: {
                  duration: 2.5,
                  times: [0, 0.2, 0.46, 1],
                  ease: ['easeOut', 'easeOut', 'easeInOut'],
                },
              }
            : { scale: 0, opacity: 0 }
        }
        onAnimationComplete={() => {
          // flyTarget ölçülmeden (ilk statik durumda) bitirme
          if (!flyTarget) return
          setFinished(true)
          onDone()
        }}
      >
        <div className="h-full w-full drop-shadow-[0_0_28px_rgba(102,252,241,0.65)]">
          <Logo className="h-full w-full" />
        </div>
      </motion.div>
    </div>
  )
}
