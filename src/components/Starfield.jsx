import { useEffect, useRef } from 'react'

/**
 * Canvas tabanlı yıldız alanı: hafif parıldayan yıldızlar,
 * scroll'da parallax ve ara sıra kayan yıldız (meteor).
 */
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let stars = []
    let w = 0
    let h = 0
    let dpr = 1
    let scrollY = window.scrollY
    let meteor = null
    let nextMeteor = performance.now() + 5000 + Math.random() * 6000

    const makeStars = () => {
      const count = Math.round((w * h) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.1,
        depth: 0.25 + Math.random() * 0.75,
        baseAlpha: 0.35 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
      }))
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeStars()
    }

    const draw = (now) => {
      ctx.clearRect(0, 0, w, h)
      const t = now / 1000

      for (const s of stars) {
        const a = s.baseAlpha * (0.6 + 0.4 * Math.sin(t * s.speed + s.phase))
        // scroll parallax: derinlik katmanına göre kayma
        let yy = (s.y - scrollY * 0.06 * s.depth) % h
        if (yy < 0) yy += h
        ctx.globalAlpha = Math.max(0, Math.min(1, a))
        ctx.fillStyle = s.r > 1.2 ? '#66FCF1' : '#C5C6C7'
        ctx.beginPath()
        ctx.arc(s.x, yy, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // kayan yıldız
      if (!meteor && now > nextMeteor) {
        meteor = {
          x: w * (0.15 + Math.random() * 0.7),
          y: h * (0.05 + Math.random() * 0.25),
          vx: -(3 + Math.random() * 4),
          vy: 1.6 + Math.random() * 1.4,
          life: 0,
          ttl: 60 + Math.random() * 30,
        }
      }
      if (meteor) {
        meteor.x += meteor.vx
        meteor.y += meteor.vy
        meteor.life++
        const fade = Math.sin((meteor.life / meteor.ttl) * Math.PI)
        const grad = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.vx * 10,
          meteor.y - meteor.vy * 10,
        )
        grad.addColorStop(0, `rgba(102,252,241,${0.8 * fade})`)
        grad.addColorStop(1, 'rgba(102,252,241,0)')
        ctx.globalAlpha = 1
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(meteor.x - meteor.vx * 10, meteor.y - meteor.vy * 10)
        ctx.stroke()
        if (meteor.life > meteor.ttl || meteor.x < 0 || meteor.y > h) {
          meteor = null
          nextMeteor = now + 7000 + Math.random() * 9000
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onScroll = () => {
      scrollY = window.scrollY
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden="true" />
}
