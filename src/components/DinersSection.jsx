import React from 'react'
import { GiMeal } from 'react-icons/gi'
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

function Feature ({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
      <Icon className="h-12 w-12 text-brandPrimary" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function DinersSection () {
  return (
    <SectionWrapper id="diners">
      <h2 className="mb-12 text-center text-3xl font-bold text-brandAccent">
        For Diners
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        <Feature
          Icon={FaMapMarkedAlt}
          title="Explore Nearby Restaurants"
          description="Search spots that match your cravings and location."
        />
        <Feature
          Icon={GiMeal}
          title="Discover Featured Dishes"
          description="See top-rated dishes and trending menus around you."
        />
        <Feature
          Icon={FaStar}
          title="Read Reviews &amp; Rankings"
          description="Access ratings, popularity insights, and honest feedback."
        />
      </div>
      {/* Chat mockup */}
      <div className="mt-16 flex justify-center">
        <img
          src="https://images.pexels.com/photos/5081923/pexels-photo-5081923.jpeg"
          alt="WhatsApp chat example"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </SectionWrapper>
  )
}

export default DinersSection
