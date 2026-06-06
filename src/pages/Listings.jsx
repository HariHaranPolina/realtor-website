import { useState } from 'react'

const all = [
  { id: 1, price: '$649,000', addr: '3241 Windermere Pkwy', city: 'Alpharetta, GA', beds: 4, baths: 3, sqft: '2,840', status: 'For sale', color: 'bg-green-50', emoji: '🏡', type: 'Single family' },
  { id: 2, price: '$3,200/mo', addr: '5102 Avalon Blvd', city: 'Alpharetta, GA', beds: 3, baths: 2, sqft: '1,950', status: 'For rent', color: 'bg-blue-50', emoji: '🏢', type: 'Townhouse' },
  { id: 3, price: '$885,000', addr: '720 Crabapple Rd', city: 'Milton, GA', beds: 5, baths: 4, sqft: '3,600', status: 'Sold', color: 'bg-amber-50', emoji: '🏠', type: 'Single family' },
  { id: 4, price: '$524,900', addr: '188 Holcomb Bridge Rd', city: 'Roswell, GA', beds: 3, baths: 2, sqft: '2,100', status: 'For sale', color: 'bg-pink-50', emoji: '🏡', type: 'Single family' },
  { id: 5, price: '$1,150,000', addr: '4520 Haynes Bridge Rd', city: 'Alpharetta, GA', beds: 6, baths: 5, sqft: '4,800', status: 'For sale', color: 'bg-purple-50', emoji: '🏰', type: 'Luxury' },
  { id: 6, price: '$2,800/mo', addr: '309 Peachtree Pkwy', city: 'Johns Creek, GA', beds: 3, baths: 2, sqft: '1,750', status: 'For rent', color: 'bg-teal-50', emoji: '🏘', type: 'Condo' },
]

const statusColor = { 'For sale': 'bg-blue-600', 'For rent': 'bg-amber-500', 'Sold': 'bg-green-600' }

export default function Listings() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'For sale', 'For rent', 'Sold']
  const shown = filter === 'All' ? all : all.filter(l => l.status === filter)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">All listings</h1>
      <p className="text-gray-500 text-sm mb-6">Alpharetta · Roswell · Milton · Johns Creek</p>

      <div className="flex gap-2 mb-6">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${filter === f ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map(l => (
          <div key={l.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className={`${l.color} h-40 flex items-center justify-center text-5xl relative`}>
              {l.emoji}
              <span className={`absolute top-3 left-3 text-xs text-white px-2.5 py-1 rounded-full font-medium ${statusColor[l.status]}`}>{l.status}</span>
              <span className="absolute top-3 right-3 text-xs bg-white text-gray-600 px-2.5 py-1 rounded-full">{l.type}</span>
            </div>
            <div className="p-4">
              <div className="font-semibold text-gray-900 text-lg">{l.price}</div>
              <div className="text-sm text-gray-600 mt-0.5">{l.addr}</div>
              <div className="text-xs text-gray-400 mb-3">{l.city}</div>
              <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                <span>🛏 {l.beds} beds</span>
                <span>🚿 {l.baths} baths</span>
                <span>📐 {l.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
