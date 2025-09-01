import React from 'react'
import SectionWrapper from './SectionWrapper'
import { FaQuoteLeft } from 'react-icons/fa'

const data = [
  {
    name: 'Maria S.',
    quote: 'SpyDishTest helped me find hidden gems in my city. The recommendations are spot on!'
  },
  {
    name: 'Chef Antonio',
    quote: 'Pricing insights let us adjust our menu and boost profits by 15 percent in two months.'
  },
  {
    name: 'Urban Bistro',
    quote: 'Heatmaps showed peak demand hours, so we optimized staffing and reduced wait times.'
  }
]

function Testimonials () {
  return (
    <SectionWrapper id="testimonials">
      <h2 className="mb-12 text-center text-3xl font-bold text-brandAccent">
        What People Are Saying
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {data.map(({ name, quote }) => (
          <div key={name} className="rounded-xl bg-white p-8 shadow-md">
            <FaQuoteLeft className="h-6 w-6 text-brandPrimary" />
            <p className="mt-4 italic">&quot;{quote}&quot;</p>
            <p className="mt-4 font-semibold text-brandAccent">{name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
