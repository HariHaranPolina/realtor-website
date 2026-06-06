export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="w-32 h-32 rounded-2xl bg-[#1B3A6B] flex items-center justify-center text-white text-4xl font-semibold mb-6">HP</div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Hari Haran Polina</h1>
          <p className="text-[#1B3A6B] font-medium mb-4">Senior Real Estate Agent · Alpharetta, GA</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <span>📍 Alpharetta, GA 30009</span>
            <span>📞 334-781-0715</span>
            <span>✉️ hariharan.polina@gmail.com</span>
            <span>🪪 License #GA-2012-RE-4821</span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About me</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            With over 12 years of experience in North Atlanta real estate, I specialize in helping families find their perfect home in Alpharetta, Roswell, Johns Creek, and Milton. My deep knowledge of the local market, combined with a client-first approach, has helped me close over 142 transactions with a 98% list-to-sale ratio.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Whether you're a first-time buyer navigating the process for the first time, a family looking to upsize, or relocating to Atlanta from out of state — I'll guide you every step of the way.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Luxury homes', 'First-time buyers', 'Relocation', 'New construction', 'Investment properties', 'Senior living'].map(s => (
              <span key={s} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">{s}</span>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-gray-900 mb-3">Areas served</h2>
          <div className="grid grid-cols-2 gap-2">
            {['Alpharetta', 'Roswell', 'Johns Creek', 'Milton', 'Cumming', 'Suwanee'].map(a => (
              <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B3A6B]"></div>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[['142', 'Homes sold'], ['$2.4B+', 'Total volume'], ['98%', 'List/sale ratio'], ['4.9★', 'Client rating']].map(([v, l]) => (
          <div key={l} className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <div className="text-2xl font-semibold text-[#1B3A6B]">{v}</div>
            <div className="text-xs text-gray-500 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
