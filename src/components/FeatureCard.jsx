import React from 'react'
import { HiOutlineAcademicCap, HiOutlineCube } from 'react-icons/hi'

const FeatureCard = () => {
    return (
        <div className='text-left w-[250px] bg-violet-100 p-4 rounded-xl animate-fade-down animate-delay-1000'>
            <HiOutlineCube className="text-[36px] text-blue-700 bg-blue-100 shadow-xl p-2 rounded-[32px]" />
            <h2 className='text-gray-900 text-lg font-bold'>Feature 1</h2>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error maiores aliquid accusamus ipsam, temporibus minus.</p>
        </div>
    )
}

export default FeatureCard
