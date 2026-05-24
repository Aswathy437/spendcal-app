import { useId } from 'react'

export default function SpendCalLogo({ className = '' }) {
  const uid = useId().replace(/:/g, '')
  const clipId = `sc-fclip-${uid}`
  const maskId = `sc-mask-${uid}`

  return (
    <svg viewBox="55 35 530 190" role="img" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>spendCal logo</title>
      <defs>
        <clipPath id={clipId}>
          <rect x="60" y="40" width="180" height="180" rx="44" />
        </clipPath>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="680" height="280" fill="white" />
          <rect x="177.04" y="146" width="85.92" height="28.67" fill="black" rx="2" />
          <rect x="101.45" y="156.67" width="237.09" height="105.33" fill="black" rx="2" />
        </mask>
      </defs>
      <rect x="60" y="40" width="180" height="180" rx="44" fill="#0F0702" />
      <rect x="86" y="158" width="32" height="62" rx="16" fill="#B03E1E" />
      <rect x="134" y="124" width="32" height="96" rx="16" fill="#D4750C" />
      <rect x="182" y="94" width="32" height="126" rx="16" fill="#E8A020" />
      <line
        x1="212" y1="98" x2="90" y2="216"
        stroke="#F2C060" strokeWidth="11" strokeLinecap="round"
        clipPath={`url(#${clipId})`} mask={`url(#${maskId})`}
      />
      <text x="274" y="155" fontFamily="'Sora', sans-serif" fontSize="62" letterSpacing="-1">
        <tspan fontWeight="400" fill="#B85C38">spend</tspan>
        <tspan fontWeight="700" fill="#0F0702">Cal</tspan>
      </text>
    </svg>
  )
}
