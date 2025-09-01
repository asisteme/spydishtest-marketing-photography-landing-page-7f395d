import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer () {
  return (
    <footer className="bg-brandAccent py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} SpyDishTest. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brandPrimary transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-brandPrimary transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-brandPrimary transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
