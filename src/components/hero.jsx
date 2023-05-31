import React from 'react'
import banner from "../assets/img/illustration-intro.svg"
const Hero = () => {
  return (
    <div className='py-8 container flex flex-col-reverse mt-10 space-y-0 space-x-0 md:flex-row md:px-6'>
      <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <p className='max-w-md mx-auto text-center font-bold text-4xl md:text-left md:text-5xl'>Bring everyone together to build better products.</p>
          <p className='text-center max-w-sm mx-auto md:text-start'>Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.</p>
          <button className='bg-brightRed rounded-full py-3 font-medium text-center text-white w-[200px] hover:bg-brightRedLight mx-auto md:mx-0 md:ml-20'>Get Started</button>     
      </div>
      <div className='px-6 py-12 md:w-1/2'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Hero