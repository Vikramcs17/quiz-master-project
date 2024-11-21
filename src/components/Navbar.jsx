import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='w-full text-white flex justify-between px-20 py-8 relative z-50'>
      <Link to="/" className="text-2xl font-bold animate-fade-down animate-once animate-duration-[800ms] animate-delay-300 animate-ease-in relative z-50">
        <span className="">Quiz</span> <span className="text-[#00ddff]">master.</span>
      </Link>
      <ul className='text-lg flex justify-end gap-16 mr-3 relative z-50'>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in">
          <Link to="/" className="relative">
            <span className={`${location.pathname === '/' ? 'text-[#00ddff]' : ''}`}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-700 animate-ease-in">
          <Link to="/about" className="relative">
            <span className={`${location.pathname === '/about' ? 'text-[#00ddff]' : ''}`}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-1000 animate-ease-in">
          <Link to="/contact" className="relative">
            <span className={`${location.pathname === '/contact' ? 'text-[#00ddff]' : ''}`}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
