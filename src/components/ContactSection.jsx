import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

function ContactSection () {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks for reaching out. We will contact you soon!')
    e.target.reset()
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="mb-8 text-center text-3xl font-bold text-brandAccent">Contact Us</h2>
      <div className="mx-auto max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-md">
          <div>
            <label className="mb-2 block font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border px-4 py-2 focus:border-brandPrimary focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border px-4 py-2 focus:border-brandPrimary focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium">Message</label>
            <textarea
              required
              rows="4"
              className="w-full rounded-md border px-4 py-2 focus:border-brandPrimary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-brandPrimary py-3 font-semibold text-white hover:bg-brandAccent transition-colors"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-green-600">{status}</p>
          )}
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Or email us directly at <a href="mailto:dasdas@gmail.com" className="text-brandPrimary underline">dasdas@gmail.com</a>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection
