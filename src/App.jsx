import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CampaignPanel from './components/CampaignPanel'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import LogoIntro from './components/LogoIntro'
import Nebula from './components/Nebula'
import SectionsGrid from './components/SectionsGrid'
import Starfield from './components/Starfield'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [openCard, setOpenCard] = useState(null)
  const headerLogoRef = useRef(null)

  // Açılış animasyonu bitene kadar kaydırmayı kilitle
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  // Menü tıklaması: kartı aç ve genişleme animasyonu bitince ortala
  const handleNav = (id) => {
    setOpenCard(id)
    setTimeout(() => {
      document.getElementById(`card-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 420)
  }

  return (
    <div id="top" className="relative min-h-screen bg-space font-body text-silver">
      <Starfield />
      <Nebula />

      {!introDone && <LogoIntro headerLogoRef={headerLogoRef} onDone={() => setIntroDone(true)} />}

      <Header headerLogoRef={headerLogoRef} introDone={introDone} onNavClick={handleNav} />

      <motion.main
        initial={false}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: introDone ? 'auto' : 'none' }}
        className="relative z-10"
      >
        {/* Hero: sol slider + sağ kampanya paneli */}
        <section className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 sm:pt-36">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <HeroSlider onCta={handleNav} />
            </div>
            <CampaignPanel />
          </div>
        </section>

        <div className="h-16 sm:h-20" />

        {/* 2 sütun × 3 satır modül grid'i */}
        <SectionsGrid openCard={openCard} setOpenCard={setOpenCard} />
      </motion.main>

      <Footer onNavClick={handleNav} />
    </div>
  )
}
