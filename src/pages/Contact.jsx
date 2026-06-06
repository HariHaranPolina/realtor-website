import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'Buying' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Get in touch</h1>
      <p className="text-gray-500 text-sm mb-8">Ready to buy, sell, or just have questions? I'd love to hear from you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <div className="font-semibold text-green-800 mb-1">Message sent!</div>
              <p className="text-sm text-green-700">Thank you {form.name}. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Full name</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Your name" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="you@email.com" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Phone</label>
                <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  placeholder="Optional" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">I'm interested in</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B]">
                  {['Buying', 'Selling', 'Renting', 'Just browsing'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">Message</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell me what you're looking for..." rows={4}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#2B6CB0] transition-colors">
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {[
            { icon: '📞', label: 'Phone', value: '334-781-0715', sub: 'Available 7 days, 8am–8pm' },
            { icon: '✉️', label: 'Email', value: 'hariharan.polina@gmail.com', sub: 'Response within 24 hours' },
            { icon: '📍', label: 'Office', value: 'Alpharetta, GA 30009', sub: 'By appointment' },
          ].map(item => (
            <div key={item.label} className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 items-start">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="text-xs font-medium text-gray-500 mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}

          <div className="bg-[#1B3A6B] rounded-2xl p-5 text-white">
            <div className="font-medium mb-1">Free home valuation</div>
            <p className="text-sm text-blue-200 mb-3">Find out what your home is worth in today's market — no obligation.</p>
            <button className="bg-white text-[#1B3A6B] text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Get free estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
