import React from 'react'
import { MdAnalytics, MdCampaign, MdOutlineInsertChart } from 'react-icons/md'
import SectionWrapper from './SectionWrapper'

function Card ({ Icon, title, children }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-xl">
      <Icon className="h-10 w-10 text-brandPrimary" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  )
}

function RestaurantsSection () {
  return (
    <SectionWrapper id="restaurants">
      <h2 className="mb-12 text-center text-3xl font-bold text-brandAccent">
        For Restaurants
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        <Card Icon={MdAnalytics} title="Pro Plan &amp; Data Analysis">
          Competitor pricing, dish ranking, sentiment analytics &amp; heatmaps.
        </Card>
        <Card Icon={MdCampaign} title="AI Notifications &amp; Campaigns">
          Personalized offers, smart pricing, targeted marketing to attract diners.
        </Card>
        <Card Icon={MdOutlineInsertChart} title="Weekly Executive Reports">
          Real-time updates on trends, reviews &amp; competitor moves delivered to your inbox.
        </Card>
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://wa.me/?text=Subscribe%20me%20to%20SpyDishTest%20Pro%20Plan"
          className="rounded-full bg-brandPrimary px-8 py-3 font-semibold text-white shadow-lg hover:bg-brandAccent transition-colors"
        >
          Subscribe to Pro Plan
        </a>
      </div>
    </SectionWrapper>
  )
}

export default RestaurantsSection
