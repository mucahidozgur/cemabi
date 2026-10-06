import {
  BatteryCharging,
  BadgeDollarSign,
  CircuitBoard,
  Clock,
  DatabaseBackup,
  Eye,
  Fan,
  HeartHandshake,
  HelpCircle,
  Keyboard,
  Lock,
  Mail,
  MapPin,
  MemoryStick,
  Monitor,
  PhoneCall,
  Receipt,
  Rocket,
  Settings,
  ShieldCheck,
  Store,
  Wrench,
} from 'lucide-react'

/* ------------------------------------------------------------
   Hero Slider slaytları
   ------------------------------------------------------------ */
export const slides = [
  {
    id: 'hosgeldiniz',
    badge: 'HOŞ GELDİNİZ',
    title: 'Güvenli, Şeffaf ve Dürüst Hizmetin Adresi',
    desc: 'Laptopunuz emin ellerde. Ücretsiz arıza teşhisi, onayınız olmadan başlamayan onarım ve onarım sonrası garanti — hepsi tek üste.',
    cta: 'Hemen Randevu Al',
    target: 'iletisim',
    icon: ShieldCheck,
  },
  {
    id: 'kampanya',
    badge: 'KAMPANYA',
    title: 'Termal Bakım + Fan Temizliği %20 İndirim',
    desc: 'Laptopunuz ısınıyor mu? Termal macun yenileme ve fan temizliği ile cihazınız ilk günkü performansına kavuşsun.',
    cta: 'Fiyatları İncele',
    target: 'fiyatlandirma',
    icon: Fan,
  },
  {
    id: 'pazar',
    badge: 'DUYURU',
    title: 'Laptop Pazarı Açıldı',
    desc: '36 nokta testten geçmiş, garantili ikinci el laptoplarda alım, satım ve takas fırsatları. Eski laptopunuz yenisiyle takas edin.',
    cta: 'Pazarı Keşfet',
    target: 'pazar',
    icon: Store,
  },
  {
    id: 'teshis',
    badge: 'HİZMET',
    title: 'Ücretsiz Arıza Teşhisi',
    desc: 'Onarım yaptırmasanız bile teşhis tamamen ücretsizdir. Sorunun ne olduğunu öğrenin, kararı siz verin.',
    cta: 'Randevu Al',
    target: 'iletisim',
    icon: Wrench,
  },
]

/* ------------------------------------------------------------
   Navigasyon
   ------------------------------------------------------------ */
export const navItems = [
  { id: 'hakkimizda', label: 'Hakkımızda' },
  { id: 'hizmetler', label: 'Hizmetler' },
  { id: 'fiyatlandirma', label: 'Fiyatlandırma' },
  { id: 'pazar', label: 'Laptop Pazarı' },
  { id: 'sss', label: 'SSS' },
  { id: 'iletisim', label: 'İletişim' },
]

/* ------------------------------------------------------------
   2 sütun × 3 satır — ana modüller
   ------------------------------------------------------------ */
export const sections = [
  {
    id: 'hakkimizda',
    title: 'HAKKIMIZDA VE MİSYONUMUZ',
    short:
      'Biz kimiz? Güvenli, şeffaf ve dürüst hizmet anlayışımızla tanışın.',
    icon: Rocket,
    detail: 'about',
  },
  {
    id: 'hizmetler',
    title: 'TEKNİK SERVİS HİZMETLERİMİZ',
    short:
      'Ekrandan anakarta tüm laptop onarım ve bakım hizmetleri tek üste.',
    icon: Wrench,
    detail: 'services',
  },
  {
    id: 'fiyatlandirma',
    title: 'TEKNİK SERVİS FİYATLANDIRMAMIZ',
    short: 'Net ve önceden bilinen fiyatlar. Sürpriz maliyet yok.',
    icon: Receipt,
    detail: 'pricing',
  },
  {
    id: 'pazar',
    title: 'LAPTOP PAZARI',
    short: 'Garantili ikinci el laptop alım, satım ve takas fırsatları.',
    icon: Store,
    detail: 'market',
  },
  {
    id: 'sss',
    title: 'SIKÇA SORULANLAR',
    short: 'Aklınıza takılan soruların net ve dürüst cevapları.',
    icon: HelpCircle,
    detail: 'faq',
  },
  {
    id: 'iletisim',
    title: 'İLETİŞİM BİLGİLERİ',
    short: 'Bize ulaşın, hemen randevunuzu alın.',
    icon: PhoneCall,
    detail: 'contact',
  },
]

/* ------------------------------------------------------------
   Hakkımızda
   ------------------------------------------------------------ */
export const aboutText =
  'Laptop Doktoru; laptop tamirini güvenli, şeffaf ve dürüst şekilde yapan bir teknik servis üssüdür. Amacımız, karmaşık görünen teknik süreçleri anlaşılır hale getirmek ve her adımda sizi bilgilendirmektir. Onarım öncesi kesin fiyat, onarım sonrası garanti — başka hiçbir şey yok.'

export const values = [
  {
    icon: HeartHandshake,
    title: 'Dürüstlük',
    desc: 'Ne yapıyorsak açıkça söyleriz, gereksiz işlem önermeyiz.',
  },
  {
    icon: Eye,
    title: 'Şeffaflık',
    desc: 'Fiyat ve süreç her aşamada bellidir, gizli maliyet yoktur.',
  },
  {
    icon: Lock,
    title: 'Güvenilirlik',
    desc: 'Parçalar ve işçilik garanti altındadır, verileriniz korunur.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Adil Fiyat',
    desc: 'Piyasa araştırması yapılmış, her bütçeye uygun fiyatlar.',
  },
]

/* ------------------------------------------------------------
   Hizmetler
   ------------------------------------------------------------ */
export const services = [
  {
    icon: Monitor,
    title: 'Ekran Değişimi',
    desc: 'Kırık, çatlak veya görüntü vermeyen ekranların değişimi.',
  },
  {
    icon: Keyboard,
    title: 'Klavye Değişimi',
    desc: 'Orijinal ve muadil seçeneklerle klavye yenileme.',
  },
  {
    icon: CircuitBoard,
    title: 'Anakart Tamiri',
    desc: 'Chip seviyesinde onarım ve hassas lehim hizmetleri.',
  },
  {
    icon: BatteryCharging,
    title: 'Batarya Değişimi',
    desc: 'Orijinal batarya ile pil ömrünüzü yeniden kazanın.',
  },
  {
    icon: Fan,
    title: 'Termal Bakım',
    desc: 'Termal macun yenileme ve fan temizliği.',
  },
  {
    icon: DatabaseBackup,
    title: 'Veri Kurtarma',
    desc: 'Silinen veya erişilemeyen verilerin kurtarılması.',
  },
  {
    icon: Settings,
    title: 'Format & Yazılım',
    desc: 'İşletim sistemi kurulumu, optimizasyon ve güncelleme.',
  },
  {
    icon: MemoryStick,
    title: 'SSD & RAM Yükseltme',
    desc: 'Laptopunuzu uçurun: garantili hız artışı.',
  },
]

/* ------------------------------------------------------------
   Fiyatlandırma
   ------------------------------------------------------------ */
export const prices = [
  { name: 'Arıza Teşhisi', price: 'Ücretsiz', highlight: true },
  { name: 'Ekran Değişimi', price: "1.200 ₺'den" },
  { name: 'Klavye Değişimi', price: "600 ₺'den" },
  { name: 'Anakart Tamiri', price: "800 ₺'den" },
  { name: 'Termal Bakım + Fan Temizliği', price: "450 ₺'den" },
  { name: 'Batarya Değişimi', price: "900 ₺'den" },
  { name: 'Format + Yazılım Kurulumu', price: '500 ₺' },
  { name: 'SSD / RAM Yükseltme', price: '350 ₺ işçilik' },
  { name: 'Veri Kurtarma', price: "1.500 ₺'den" },
]

export const priceNote =
  'Tüm fiyatlar ücretsiz teşhis sonrasında kesinleşir; onayınız olmadan hiçbir işlem yapılmaz. Parça fiyatları cihaz modeline göre değişebilir.'

/* ------------------------------------------------------------
   Laptop Pazarı
   ------------------------------------------------------------ */
export const marketFeatures = [
  {
    icon: ShieldCheck,
    title: 'Garantili İkinci El',
    desc: 'Tüm cihazlar 6 ay servis garantisiyle satılır.',
  },
  {
    icon: Wrench,
    title: '36 Nokta Test',
    desc: 'Her cihaz satışa çıkmadan önce kapsamlı testten geçer.',
  },
  {
    icon: Store,
    title: 'Takas Desteği',
    desc: 'Eski laptopunuzu yeni cihaz alımında takas edin.',
  },
  {
    icon: Eye,
    title: 'Şeffaf Geçmiş',
    desc: 'Cihazın tüm geçmişi ve değişen parçaları açıkça raporlanır.',
  },
]

/* ------------------------------------------------------------
   SSS
   ------------------------------------------------------------ */
export const faqs = [
  {
    q: 'Arıza teşhisi ücretli mi?',
    a: 'Hayır. Teşhis tamamen ücretsizdir. Onarım yaptırmasanız bile hiçbir ücret ödemezsiniz.',
  },
  {
    q: 'Tamirim ne kadar sürer?',
    a: 'Çoğu onarım aynı gün veya 1-3 iş günü içinde tamamlanır. Parça tedariği gereken durumlarda süre hakkında önceden bilgilendirilirsiniz.',
  },
  {
    q: 'Onarımlarda garanti veriyor musunuz?',
    a: 'Evet. Tüm onarımlarımız 6 ay garanti kapsamındadır. Garanti şartları işlem öncesinde yazılı olarak iletilir.',
  },
  {
    q: 'Verilerim güvende mi?',
    a: 'Evet. Onarım öncesinde verileriniz yedeklenir ve cihazınız güvenli ortamda işlem görür. Veri gizliliği bizim için birinci önceliktir.',
  },
  {
    q: 'Fiyatı önceden öğrenebilir miyim?',
    a: 'Elbette. Ücretsiz teşhis sonrasında kesin fiyat bildirilir ve onayınız olmadan işleme başlanmaz. Şeffaf fiyat, işimizin temelidir.',
  },
]

/* ------------------------------------------------------------
   İletişim
   ------------------------------------------------------------ */
export const contactInfo = [
  {
    icon: PhoneCall,
    label: 'Telefon',
    value: '0 (212) 555 00 00',
    href: 'tel:+902125550000',
  },
  {
    icon: HeartHandshake,
    label: 'WhatsApp',
    value: '0 (532) 555 00 00',
    href: 'https://wa.me/905325550000',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@laptopdoktoru.com',
    href: 'mailto:info@laptopdoktoru.com',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Teknoloji Cad. Uzay Üssü Plaza No: 42, İstanbul',
    href: null,
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Hafta içi 09:00 – 19:00 · Cmt 10:00 – 18:00 · Pazar kapalı',
    href: null,
  },
]
