# 🚀 Laptop Doktoru — Uzay Üssü Web Tasarımı

**Laptop Doktoru** için teknik servis, laptop tamiri ve parça satışı odaklı, yüksek teknoloji
hissi veren (Uzay Üssü / Cyberpunk) tek sayfalık web sitesi.

> **Slogan:** GÜVENLİ, ŞEFFAF VE DÜRÜST HİZMETİN ADRESİ

## ✨ Özellikler

- **Logo açılış animasyonu** — logo ekranın ortasında parlama (glow) efektiyle belirir,
  ardından spring animasyonla sol üst köşedeki header'a uçar
- **Yazısız SVG logo** — laptop + güç kasası + 2 neon kablo (metin içermez, vektörel)
- **Hareketli hero slider** — hizmetler, kampanyalar ve duyurular; otomatik oynatma + ok/nokta kontrolleri
- **Kampanya paneli** — "Kampanyalar Yakında" cam panel + görsel bülten kayıt formu (backend'siz)
- **2×3 modül grid'i** — Hakkımızda, Hizmetler, Fiyatlandırma, Laptop Pazarı, SSS, İletişim;
  kartlar tıklanınca tüm satıra genişleyip detay gösterir
- **Canvas yıldız alanı** — parıldayan yıldızlar, scroll parallax, kayan yıldızlar
- **Glassmorphism + neon tasarım sistemi** — spotlight (ışık takibi) hover, neon glow, scroll fade-in
- **Tamamen responsive** — mobil hamburger menü, tek sütun grid, dokunmatik dostu kontroller

## 🛠️ Teknoloji Yığını

| Teknoloji | Kullanım |
|---|---|
| [React 19](https://react.dev) | Arayüz bileşenleri |
| [Vite 7](https://vite.dev) | Geliştirme sunucusu ve build |
| [Tailwind CSS 4](https://tailwindcss.com) | Özel tema ile stil sistemi (`@theme`) |
| [Framer Motion 12](https://motion.dev) | Logo intro, slider, genişleyen kartlar, scroll animasyonları |
| [Lucide Icons](https://lucide.dev) | SVG ikon seti |
| [Playwright](https://playwright.dev) (devDep) | Otomatik UI testi (`scripts/screenshot.mjs`) |

## 🚀 Kurulum ve Çalıştırma

Gereksinim: **Node.js 20.19+** (önerilen: 22+)

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusu (http://localhost:5173)
npm run dev

# Üretim derlemesi (dist/ klasörü)
npm run build

# Derlemenin önizlemesi
npm run preview
```

## 📁 Proje Yapısı

```
├── index.html                 # Giriş sayfası + Google Fonts
├── public/favicon.svg         # Yazısız logo (favicon)
├── src/
│   ├── App.jsx                # Sayfa düzeni, intro ve modül durumu
│   ├── index.css              # Tailwind 4 teması + tasarım sistemi
│   ├── data/content.jsx       # ★ TÜM SİTE METİNLERİ (düzenleme noktası)
│   └── components/
│       ├── Logo.jsx           # Yazısız SVG logo
│       ├── LogoIntro.jsx      # Açılış patlama + uçuş animasyonu
│       ├── Starfield.jsx      # Canvas yıldız alanı
│       ├── Nebula.jsx         # Bulutsu ışık + ızgara dekoru
│       ├── Header.jsx         # Sabit üst menü + slogan
│       ├── HeroSlider.jsx     # Hareketli kampanya slider'ı
│       ├── CampaignPanel.jsx  # "Kampanyalar Yakında" + bülten formu
│       ├── SectionsGrid.jsx   # 2×3 modül grid'i
│       ├── FeatureCard.jsx    # Genişleyen modül kartı (spotlight)
│       ├── CardDetails.jsx    # Modül içerikleri (fiyat, SSS, iletişim…)
│       └── Footer.jsx
└── scripts/screenshot.mjs     # Otomatik UI kontrolü (masaüstü + mobil)
```

## ✏️ İçerik Düzenleme

Tüm metinler tek dosyada toplanmıştır: **`src/data/content.jsx`**

- Slider slaytları → `slides`
- Modül başlıkları ve özetleri → `sections`
- Hizmet listesi → `services`
- Fiyat listesi → `prices` (+ `priceNote`)
- Laptop pazarı özellikleri → `marketFeatures`
- SSS soru-cevapları → `faqs`
- İletişim bilgileri → `contactInfo` (telefon, WhatsApp, e-posta, adres, çalışma saatleri)

> ⚠️ Telefon, adres ve fiyatlar şu an **placeholder**'dır — yayına almadan önce güncelleyin.

## 🧪 Otomatik UI Kontrolü

Dev sunucusu çalışırken (Edge ile, ek kurulum gerektirmez):

```bash
node scripts/screenshot.mjs
```

Masaüstü ve mobil görünümleri `shots/` klasörüne kaydeder; yatay taşma, menü,
kart genişleme ve bülten formunu otomatik kontrol eder.

## ☁️ Canlıya Alma (Vercel)

1. Projeyi GitHub'a push edin (aşağıya bakın)
2. [vercel.com](https://vercel.com) → **Add New → Project** → repoyu içe aktarın
3. Framework **Vite** otomatik algılanır — build komutu `npm run build`, çıktı `dist/`
4. **Deploy** — saniyeler içinde yayında 🚀

## 🔗 GitHub'a Push

```bash
git remote add origin https://github.com/<kullanici-adi>/<repo-adi>.git
git branch -M main
git push -u origin main
```

## 📝 Notlar

- `image/` klasöründeki AI üretimi logo adayları siteye eklenmemiştir; kullanılmak
  istenirse beyaz arka planları silinip `src/components/Logo.jsx` yerine geçirilebilir.
- Bülten formu şu an tamamen görseldir (backend yok); kayıt bilgileri hiçbir yere gitmez.
