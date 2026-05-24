import LogoBadge from './LogoBadge'

export default function LogoWordmark({ badgeSize = 36 }) {
  return (
    <div className="flex items-center gap-3">
      <LogoBadge size={badgeSize} />
      <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '22px', letterSpacing: '-0.5px' }}>
        <span style={{ fontWeight: 400, color: '#B85C38' }}>spend</span>
        <span style={{ fontWeight: 700, color: '#0F0702' }}>Cal</span>
      </span>
    </div>
  )
}
