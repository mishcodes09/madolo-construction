'use client'

import { useState } from 'react'

const projectTypes = [
  'Residential Construction',
  'Interior Design',
  'Renovations',
  'Finishes',
  'Other',
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', projectType: '', message: '' })
    }, 3000)
  }

  const inputClass =
    'w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all'
  const labelClass =
    'font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5'

  return (
    <section id="contact" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Image */}
          <div className="relative overflow-hidden h-72 lg:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=85"
              alt="Contact Maddlo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-white text-2xl font-bold">
                Let&rsquo;s build something great together.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="px-8 md:px-14 py-14 flex flex-col justify-center">
            <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-2">
              Get in Touch
            </p>
            <h2 className="font-display text-dark text-3xl md:text-4xl font-bold mb-8">
              Request a Free Quote
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 font-body text-sm">
                ✅ Thank you! We&rsquo;ll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+27 000 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className={labelClass}>Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select type</option>
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-body font-semibold text-sm py-4 rounded-xl hover:bg-orange-700 transition-colors duration-300 mt-2"
              >
                Request a Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
