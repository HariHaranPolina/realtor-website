import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-semibold text-lg mb-2">EliteRealty</div>
            <p className="text-sm text-blue-200">Serving North Atlanta families since 2012. Alpharetta, Roswell, Johns Creek & Milton.</p>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Quick links</div>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/listings', 'Listings'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="text-sm text-blue-200 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              <span>hariharan.polina@gmail.com</span>
              <span>334-781-0715</span>
              <span>Alpharetta, GA 30009</span>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-300">
          © 2025 Hari Haran Polina · Elite Realty Atlanta · All rights reserved
        </div>
      </div>
    </footer>
  )
}
