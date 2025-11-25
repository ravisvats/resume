import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm">© {year} Ravi Shankar Vats. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-gray-500">Secure, scalable authorization solutions for modern apps.</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms" className="hover:text-gray-900">Terms of Use</Link>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col items-start gap-3 sm:gap-2 text-xs sm:text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span role="img" aria-label="location">📍</span>
            <span>Based in Gurugram, India • GMT+5:30</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a href="mailto:ravisvats@gmail.com" className="hover:text-gray-900 break-all sm:break-normal">ravisvats@gmail.com</a>
            <div className="flex items-center gap-2 sm:gap-3 opacity-80">
              <img src="/icons/python.svg" alt="Python" className="h-3 w-3 sm:h-4 sm:w-4" />
              <img src="/icons/fastapi-svgrepo-com.svg" alt="FastAPI" className="h-3 w-3 sm:h-4 sm:w-4" />
              <img src="/icons/aws-ec2-svgrepo-com.svg" alt="AWS" className="h-3 w-3 sm:h-4 sm:w-4" />
              <img src="/icons/react.svg" alt="React" className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer