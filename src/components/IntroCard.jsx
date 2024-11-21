// not used

import React from 'react'
import FeatureCard from './FeatureCard'

const IntroCard = () => {
  return (

    <div className='bg-white w-[35vw] translate-x-40 translate-y-36 p-6 text-center rounded-xl'>
      <h1 className="text-4xl text-violet-700 font-bold">Introduction</h1>
      <p className="text-violet-400 my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nemo qui quod perferendis vero impedit eius illum consectetur aperiam sunt.</p>
      <FeatureCard iconId={1} />
    </div>

  )
}

export default IntroCard
