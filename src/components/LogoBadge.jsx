export default function LogoBadge({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="60 34 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="60" y="34" width="160" height="160" rx="36" fill="#0F0702" />
      <rect x="84"  y="136" width="28" height="58"  rx="14" fill="#B03E1E" />
      <rect x="126" y="104" width="28" height="90"  rx="14" fill="#D4750C" />
      <rect x="168" y="76"  width="28" height="118" rx="14" fill="#E8A020" />
      <line x1="194" y1="80" x2="86" y2="188" stroke="#F2C060" strokeWidth="10" strokeLinecap="round" />
    </svg>
  )
}
