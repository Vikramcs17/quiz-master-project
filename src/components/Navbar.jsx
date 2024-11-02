import React from 'react'

const Navbar = () => {

  return (
    <nav className='w-full text-white flex justify-between px-20 py-6'>
      <span className="text-2xl font-bold animate-fade-down animate-delay-500">
        <span className="">Quiz</span> <span className="text-[#00ddff]">master.</span>
      </span>
      <ul className='flex justify-end gap-16 animate-fade-down animate-delay-500 mr-3'>
        <li className="cursor-pointer hover:underline transition ease-in">Home</li>
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
