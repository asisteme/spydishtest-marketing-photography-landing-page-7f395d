import React from 'react'
import { motion } from 'framer-motion'

function SectionWrapper ({ children, id }) {
  return (
    <section id={id} className="py-16">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
