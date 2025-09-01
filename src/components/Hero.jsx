import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

function Hero () {
  return (
    <header className="relative isolate">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/794604/pexels-photo-794604.jpeg"
        alt="Delicious food"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brandAccent/70 mix-blend-multiply" />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center text-white">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
          alt="SpyDishTest Logo"
          className="mx-auto mb-6 h-20 w-20"
        />
        <motion.h1
          className="text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          SpyDishTest
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">
          An intelligent WhatsApp bot connecting diners with restaurants while powering data-driven growth.
        </p>
        <motion.a
          href="https://wa.me/?text=Hi%20SpyDishTest%2C%20I%20want%20to%20get%20started"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-brandPrimary px-8 py-3 font-semibold text-white shadow-lg hover:bg-brandAccent transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <FaWhatsapp size={20} />
          Start Now
        </motion.a>
      </div>
    </header>
  )
}

export default Hero
