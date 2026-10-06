/**
 * Otomatik UI kontrolü: dev sunucusu çalışırken (npm run dev) çalıştırın.
 *   node scripts/screenshot.mjs
 * Masaüstü + mobil görünümleri shots/ klasörüne kaydeder ve şunları doğrular:
 * yatay taşma, logo intro, cursor, slider, hamburger menü, kart genişleme,
 * grid sütun düzeni ve bülten formu.
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = 'http://localhost:5173/'
mkdirSync(new URL('../shots/', import.meta.url), { recursive: true })

const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`)
}

const browser = await chromium.launch({ channel: 'msedge' })
const errors = []

async function freshPage(width, height) {
  const page = await browser.newPage({ viewport: { width, height } })
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text())
  })
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.goto(BASE, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(3400) // logo intro animasyonu (~2.5s)
  return page
}

const overflowOf = (page) =>
  page.evaluate(() => ({
    doc: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    body: document.body.scrollWidth - document.body.clientWidth,
  }))

const offscreenInteractives = (page) =>
  page.evaluate(() => {
    const bad = []
    document.querySelectorAll('button, a, input').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.width > 0 && (r.right > window.innerWidth + 2 || r.left < -2)) {
        bad.push(el.tagName + ' "' + (el.textContent || el.placeholder || '').trim().slice(0, 30) + '"')
      }
    })
    return bad
  })

/* ================= MASAÜSTÜ ================= */
console.log('\n— MASAÜSTÜ (1440×900) —')
{
  const page = await freshPage(1440, 900)

  check('intro overlay kalktı', (await page.$('.fixed.z-\\[70\\]')) === null)
  const logoOpacity = await page.$eval('header a > div', (el) => getComputedStyle(el).opacity)
  check('header logosu görünür', logoOpacity === '1', `opacity=${logoOpacity}`)

  const of = await overflowOf(page)
  check('yatay taşma yok', of.doc <= 1 && of.body <= 1, `doc=${of.doc}px body=${of.body}px`)
  const off = await offscreenInteractives(page)
  check('etkileşimli öğe taşması yok', off.length === 0, off.join(' | '))

  const cursor = await page.$eval('header nav button', (el) => getComputedStyle(el).cursor)
  check('menü linklerinde cursor: pointer', cursor === 'pointer', cursor)
  const cardCursor = await page.$eval('#card-hakkimizda', (el) => getComputedStyle(el).cursor)
  check('kartlarda cursor: pointer', cardCursor === 'pointer', cardCursor)

  // Slider: ok ile ilerle
  await page.click('button[aria-label="Sonraki slayt"]')
  await page.waitForTimeout(700)
  const activeDot = await page.$$eval('[aria-label^="Slayt"]', (els) =>
    els.findIndex((el) => el.className.includes('bg-neon')),
  )
  check('slider ok ile ilerledi', activeDot === 1, `aktif nokta=${activeDot}`)

  // Kart genişleme
  await page.click('#card-hakkimizda')
  await page.waitForTimeout(700)
  const span = await page.$eval('#card-hakkimizda', (el) => el.style.gridColumn)
  check('kart tüm satıra genişledi', span === '1 / -1', `gridColumn=${span}`)
  const valueVisible = await page.getByText('DÜRÜSTLÜK', { exact: true }).first().isVisible()
  check('kart detayı görünüyor', valueVisible)

  // Bülten formu
  await page.fill('input[type="email"]', 'test@example.com')
  await page.click('button:has-text("KAYDOL")')
  await page.waitForTimeout(400)
  const subscribed = await page.getByText('Kaydoldunuz', { exact: false }).isVisible()
  check('bülten formu çalışıyor', subscribed)

  await page.screenshot({ path: 'shots/desktop.png', fullPage: true })
  await page.close()
}

/* ================= MOBİL (390×844) ================= */
console.log('\n— MOBİL (390×844) —')
{
  const page = await freshPage(390, 844)

  const of = await overflowOf(page)
  check('yatay taşma yok', of.doc <= 1 && of.body <= 1, `doc=${of.doc}px body=${of.body}px`)
  const off = await offscreenInteractives(page)
  check('etkileşimli öğe taşması yok', off.length === 0, off.join(' | '))

  const cols = await page.$eval('#moduller .grid', (el) => {
    const c = getComputedStyle(el).gridTemplateColumns.split(' ').length
    return c
  })
  check('grid tek sütuna düştü', cols === 1, `sütun=${cols}`)

  // Hamburger aç/kapa (seçici header'a sabitlenir — footer nav karışmasın)
  await page.click('button[aria-label="Menüyü aç"]')
  await page.waitForTimeout(400)
  const menuVisible = await page
    .locator('header nav button', { hasText: 'Fiyatlandırma' })
    .filter({ visible: true })
    .count()
  check('hamburger menü açıldı', menuVisible === 1, `görünür link=${menuVisible}`)
  await page.screenshot({ path: 'shots/mobile-menu.png' })

  // Menü linki: menüyü kapatır + kartı açar
  await page.locator('header nav button', { hasText: 'Hakkımızda' }).filter({ visible: true }).click()
  await page.waitForTimeout(900)
  const menuClosed = await page
    .locator('header nav button', { hasText: 'Fiyatlandırma' })
    .filter({ visible: true })
    .count()
  check('menü linki menüyü kapattı', menuClosed === 0)
  const detailVisible = await page.getByText('DÜRÜSTLÜK', { exact: true }).first().isVisible()
  check('menü linki kartı açtı', detailVisible)

  await page.screenshot({ path: 'shots/mobile.png', fullPage: true })
  await page.close()
}

/* ================= DAR EKRAN (320×700) ================= */
console.log('\n— DAR EKRAN (320×700) —')
{
  const page = await freshPage(320, 700)
  const of = await overflowOf(page)
  check('yatay taşma yok', of.doc <= 1 && of.body <= 1, `doc=${of.doc}px body=${of.body}px`)
  const off = await offscreenInteractives(page)
  check('etkileşimli öğe taşması yok', off.length === 0, off.join(' | '))
  await page.screenshot({ path: 'shots/mobile-320.png', fullPage: true })
  await page.close()
}

/* ================= KONSOL HATALARI ================= */
const realErrors = [...new Set(errors)].filter((e) => !e.includes('favicon'))
check('konsol hatası yok', realErrors.length === 0, realErrors.slice(0, 3).join(' | '))

await browser.close()

const failed = results.filter((r) => !r.ok).length
console.log(`\n${results.length - failed}/${results.length} kontrol başarılı${failed ? ` — ${failed} BAŞARISIZ` : ' ✅'}`)
process.exit(failed ? 1 : 0)
