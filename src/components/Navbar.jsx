import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/listings', label: 'Listings' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-white font-semibold text-sm">E</div>
          <span className="font-semibold text-gray-900">Elite<span className="text-[#1B3A6B]">Realty</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`text-sm transition-colors ${pathname === l.to ? 'text-[#1B3A6B] font-medium' : 'text-gray-500 hover:text-gray-900'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            className="text-sm bg-[#1B3A6B] text-white px-4 py-2 rounded-lg hover:bg-[#2B6CB0] transition-colors">
            Get in touch
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="text-sm text-gray-700 py-1">{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
