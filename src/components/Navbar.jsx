import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full text-white flex justify-between px-20 py-8'>
      <span className="text-2xl font-bold animate-fade-down animate-once animate-duration-[800ms] animate-delay-300 animate-ease-in">
        <span className="">Quiz</span> <span className="text-[#00ddff]">master.</span>
      </span>
      <ul className='text-lg flex justify-end gap-16 mr-3'>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in">
          <span className="relative">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </li>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-700 animate-ease-in">
          <span className="relative">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </li>
        <li className="group cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-1000 animate-ease-in">
          <span className="relative">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
