# Proje: Laptop Doktoru - Uzay Üssü Web Tasarımı

## 1. Proje Genel Bakış
"Laptop Doktoru" için teknik servis, laptop tamiri ve parça satışı odaklı, yüksek teknoloji hissi veren (Uzay Üssü / Cyberpunk) bir web sitesi.
**Slogan:** GÜVENLİ, ŞEFFAF VE DÜRÜST HİZMETİN ADRESİ

## 2. Tasarım Sistemi (Design System)
- **Tema:** Uzay Üssü (Space Station), Karanlık Mod (Dark Mode), Siber Teknoloji.
- **Renk Paleti:**
  - Arka Plan: Derin Uzay Siyahı (`#0B0C10`)
  - Paneller/Kartlar: Koyu Metalik Grisi (`#1F2833`) ve Glassmorphism (Buzlu cam efekti).
  - Ana Vurgu (Accent): Neon Mavi / Plazma Rengi (`#45A29E` veya `#66FCF1`) - Butonlar ve hover efektleri için.
  - Metin: Parlak Gümüş (`#C5C6C7`), Başlıklar (`#FFFFFF`).
- **Tipografi:** 
  - Başlıklar: `Orbitron` veya `Space Grotesk` (Fütüristik ama okunabilir).
  - Gövde Metni: `Inter` veya `Roboto` (Yüksek okunabilirlik).
- **Görsel Efektler:** Arka planda hafif hareket eden yıldızlar/parçacıklar (Starfield/Parallax), kartlarda neon parlama (glow) efektleri, metalik kenarlıklar.

## 3. Sayfa Yapısı ve Layout (Görsel 2'ye Göre)
- **Header (Üst Kısım):** 
  - Sol: Logo (Animasyonlu, yazısız).
  - Sağ/Orta: Menü linkleri (Hakkımızda, Hizmetler, Fiyatlandırma, Laptop Pazarı, SSS, İletişim).
  - Alt Başlık: "GÜVENLİ, ŞEFFAF VE DÜRÜST HİZMETİN ADRESİ"
- **Hero Section (Orta Alan):**
  - **Sol/Orta:** "HAREKETLİ SLIDE YERİ" (Hizmetler, kampanyalar ve duyurular için carousel/slider). İçerik: Başlık, kısa açıklama, "Hemen Randevu Al" butonu.
  - **Sağ (Sidebar):** Şimdilik BOŞ bırakılacak. İleride kampanya ve indirimler için ayrılmış özel bir alan (Glassmorphism bir panel). İçine "Kampanyalar Yakında" yazılabilir.
- **Özellikler / Hizmetler Bölümü (Grid Yapısı - 2 Sütun, 3 Satır):**
  1. HAKKIMIZDA VE MİSYONUMUZ
  2. TEKNİK SERVİS HİZMETLERİMİZ
  3. TEKNİK SERVİS FİYATLAMAMIZ
  4. LAPTOP PAZARI
  5. SIKÇA SORULANLAR
  6. İLETİŞİM BİLGİLERİ

## 4. Animasyonlar ve Etkileşim (Interactions)
- **Logo Animasyonu (Önemli):** Sayfa yüklendiğinde logo ekranın tam ortasında büyük bir parlama (patlama) efektiyle belirecek. Ardından yumuşak bir şekilde (spring animation) sol üst köşeye küçülerek yerleşecek.
- **Kartlar:** Mouse ile üzerine gelindiğinde hafifçe yukarı kalkacak (translateY) ve neon mavi kenarlık parlaması (box-shadow) alacak.
- **Geçişler:** Sayfa içi kaydırmalarda (scroll) içerikler aşağıdan yukarıya doğru fade-in efektiyle gelecek.

## 5. Logo Tasarım Detayı
- **İçerik:** Bir laptop, bir güç kaynağı (kasa) ve bu ikisini birbirine bağlayan 2 adet kablo.
- **Stil:** Vektörel, minimal, metalik gümüş ve neon mavi renklerde, uzay teknolojisi hissiyatı.
- **Kural:** Logoda KESİNLİKLE yazı (harf, kelime) olmayacak. Sadece sembol.