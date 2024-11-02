import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='bg-slate-100 p-2 w-[60%] flex rounded-3xl animate-fade animate-ease-in animate-duration-1000 animate-delay-1000'>
      <CiSearch className='text-slate-900 text-2xl' />
      <p className="text-lg text-slate-700 mx-3">Enter a subject you wanna quiz on...</p>
    </div>
  )
}

export default SearchBar
