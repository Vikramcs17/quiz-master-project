import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='bg-white/20 backdrop-blur-md p-4 w-full md:w-[60%] flex items-center rounded-3xl animate-fade animate-ease-in animate-duration-1000 animate-delay-1000 border border-white/30'>
      <CiSearch className='text-white text-2xl ml-2' />
      <input 
        type="text"
        placeholder="Enter a subject you want to quiz on..."
        className="bg-transparent border-none outline-none text-lg text-white placeholder-white/70 mx-3 w-full"
      />
    </div>
  )
}

export default SearchBar
