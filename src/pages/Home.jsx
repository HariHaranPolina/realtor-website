import { Link } from 'react-router-dom'
import { useState } from 'react'

const listings = [
  { id: 1, price: '$649,000', addr: '3241 Windermere Pkwy', city: 'Alpharetta, GA', beds: 4, baths: 3, sqft: '2,840', status: 'For sale', color: 'bg-green-50', emoji: '🏡' },
  { id: 2, price: '$3,200/mo', addr: '5102 Avalon Blvd', city: 'Alpharetta, GA', beds: 3, baths: 2, sqft: '1,950', status: 'For rent', color: 'bg-blue-50', emoji: '🏢' },
  { id: 3, price: '$885,000', addr: '720 Crabapple Rd', city: 'Milton, GA', beds: 5, baths: 4, sqft: '3,600', status: 'Sold', color: 'bg-amber-50', emoji: '🏠' },
]

const reviews = [
  { name: 'Sarah M.', initials: 'SM', color: 'bg-[#1B3A6B]', date: 'March 2025', text: 'Hari made our home buying experience seamless. Found us the perfect home in Alpharetta within 3 weeks and negotiated $30k below asking. Highly recommend!' },
  { name: 'James K.', initials: 'JK', color: 'bg-blue-600', date: 'Jan 2025', text: 'Professional, knowledgeable and always available. Sold our Milton home in 18 days at full asking price. Will use again for our next purchase.' },
  { name: 'Riya P.', initials: 'RP', color: 'bg-green-700', date: 'Nov 2024', text: 'As first-time buyers we had so many questions. Hari was patient, thorough, and guided us every step. Couldn\'t be happier with our new home!' },
]

const statusColor = { 'For sale': 'bg-blue-600', 'For rent': 'bg-amber-500', 'Sold': 'bg-green-600' }

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1B3A6B] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm font-medium mb-2">Top-rated agent · Alpharetta, GA</div>
          <h1 className="text-4xl font-semibold leading-tight mb-3">Find your perfect home<br />in Atlanta</h1>
          <p className="text-blue-200 mb-8">Trusted by 500+ families across Alpharetta, Roswell & Johns Creek</p>

          <div className="flex gap-3 max-w-xl">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by city, ZIP, or address..."
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none"
            />
            <Link to="/listings" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
              Search
            </Link>
          </div>

          <div className="flex gap-8 mt-10">
            {[['$2.4B+', 'Sold volume'], ['142', 'Homes sold'], ['4.9★', 'Rating'], ['12 yrs', 'Experience']].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="text-2xl font-semibold">{val}</div>
                <div className="text-blue-300 text-xs mt-0.5">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent card */}
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex gap-5 items-start">
          <div className="w-16 h-16 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">HP</div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900">Hari Haran Polina</div>
                <div className="text-sm text-gray-500">Senior Real Estate Agent · Alpharetta, GA</div>
              </div>
              <Link to="/contact" className="bg-[#1B3A6B] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#2B6CB0] transition-colors">Contact</Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Top producer', 'Luxury homes', 'First-time buyers', 'Relocation'].map(b => (
                <span key={b} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[['142', 'Homes sold'], ['98%', 'List/sale ratio'], ['21 days', 'Avg. on market']].map(([v, l]) => (
                <div key={l} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="font-semibold text-gray-900">{v}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured listings */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-900">Featured listings</h2>
          <Link to="/listings" className="text-sm text-[#1B3A6B] hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {listings.map(l => (
            <div key={l.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`${l.color} h-36 flex items-center justify-center text-5xl relative`}>
                {l.emoji}
                <span className={`absolute top-3 left-3 text-xs text-white px-2.5 py-1 rounded-full font-medium ${statusColor[l.status]}`}>{l.status}</span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-gray-900">{l.price}</div>
                <div className="text-sm text-gray-500 mt-0.5">{l.addr}</div>
                <div className="text-xs text-gray-400">{l.city}</div>
                <div className="flex gap-3 mt-3 text-xs text-gray-500">
                  <span>🛏 {l.beds} bd</span>
                  <span>🚿 {l.baths} ba</span>
                  <span>📐 {l.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-5">What clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-semibold`}>{r.initials}</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{r.name}</div>
                  <div className="text-amber-400 text-xs">★★★★★</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">{r.date}</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
