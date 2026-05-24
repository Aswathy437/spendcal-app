import { useState } from 'react'
import { Link } from 'react-router-dom'
import SpendCalLogo from '../../components/SpendCalLogo'

function EyeIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
    </svg>
  )
}

function getStrength(password) {
  if (!password) return null
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  if (score <= 1) return { level: 'Weak',   color: '#E05252', pct: '33%'  }
  if (score <= 3) return { level: 'Fair',   color: '#D4750C', pct: '66%'  }
  return             { level: 'Strong', color: '#3D9E6B', pct: '100%' }
}

function StrengthBar({ password }) {
  const strength = getStrength(password)
  if (!strength) return null

  return (
    <div className="mt-2.5 space-y-1.5">
      {/* Track */}
      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: strength.pct,
            backgroundColor: strength.color,
            transition: 'width 0.35s ease, background-color 0.35s ease',
          }}
        />
      </div>
      {/* Label */}
      <p className="text-xs font-medium" style={{ color: strength.color }}>
        {strength.level}
      </p>
    </div>
  )
}

export default function Register() {
  const [form, setForm] = useState({ name: '', identifier: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  function update(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: registration logic
  }

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-[#D4750C] focus:ring-2 focus:ring-[#D4750C]/20 transition'

  return (
    <div className="min-h-screen w-full flex bg-white">

      {/* ── Left column ── */}
      <div className="hidden lg:flex lg:w-[55%] flex-col justify-between px-16 xl:px-24 py-14 border-r border-gray-100">

        {/* Logo top-left */}
        <SpendCalLogo className="h-16 w-auto self-start" />

        {/* Headline — true vertical centre of remaining space */}
        <div className="flex-1 flex flex-col justify-center max-w-lg -mt-8">
          <h1 className="text-[3.5rem] font-semibold text-gray-900 leading-[1.08] tracking-tight mb-5">
            Your spending<br />story starts<br />here.
          </h1>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            One account. Every expense — from a grocery run to a GPay transfer — in one honest picture.
          </p>
        </div>

        <p className="text-gray-300 text-xs">© 2026 spendCal</p>
      </div>

      {/* ── Right column ── */}
      <div className="flex-1 flex items-center justify-center px-8 sm:px-12 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="lg:hidden mb-6">
            <SpendCalLogo className="h-10 w-auto" />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">Create an account</h2>
            <p className="text-sm text-gray-400">Free to start. No card required.</p>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={() => {/* TODO: Google OAuth */}}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-5"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.09-6.09C34.46 3.19 29.5 1 24 1 14.82 1 7.07 6.48 3.64 14.18l7.08 5.5C12.4 13.74 17.73 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.75H24v9h12.43c-.54 2.92-2.18 5.4-4.65 7.07l7.19 5.59C43.18 37.13 46.1 31.3 46.1 24.55z"/>
              <path fill="#FBBC05" d="M10.72 28.32A14.6 14.6 0 0 1 9.5 24c0-1.5.26-2.95.72-4.32l-7.08-5.5A22.9 22.9 0 0 0 1 24c0 3.68.88 7.16 2.64 10.18l7.08-5.86z"/>
              <path fill="#4285F4" d="M24 47c5.5 0 10.12-1.82 13.5-4.96l-7.19-5.59c-1.82 1.22-4.15 1.95-6.31 1.95-6.27 0-11.6-4.24-13.28-9.98l-7.08 5.86C7.07 41.52 14.82 47 24 47z"/>
              <path fill="none" d="M1 1h46v46H1z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400">or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Full name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
                placeholder="Aswathy Vinod"
                required
                className={inputClass}
              />
            </div>

            {/* Email or mobile */}
            <div className="space-y-1.5">
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="identifier"
                type="email"
                autoComplete="email"
                value={form.identifier}
                onChange={update('identifier')}
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </div>

            {/* Password + strength */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={update('password')}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              <StrengthBar password={form.password} />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full py-2.5 text-white font-medium rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: '#B03E1E' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#95341a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#B03E1E'}
              >
                Create account
              </button>
            </div>

          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold transition-colors" style={{ color: '#0F0702' }}>
              Sign in
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}
