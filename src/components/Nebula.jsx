/**
 * Dekoratif derinlik katmanı: neon bulutsu ışıklar + uzay ızgara deseni.
 */
export default function Nebula() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-plasma/15 blur-[140px]" />
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-neon/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-[#2b3a67]/25 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(102,252,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  )
}
