import React from 'react'
import person1 from "../assets/img/avatar-ali.png"
import person2 from  "../assets/img/avatar-richard.png"
import person3 from  "../assets/img/avatar-shanai.png"

const Testimonials = () => {
  return (
    <div className='w-full mt-8 '>
     <p className='py-12 font-bold text-4xl text-center mx-auto mb-12'>What's Different About Manage?</p>
    <div className='flex flex-col mx-auto space-y-0 space-x-4 items-center md:flex-row md:w-3/4'>
        <div className='flex flex-col bg-veryLightGray md:pb-6 px-6 mb-6'>
            <img className='w-20 mx-auto top-[-20%]' src={person1} alt="" />
            <h1 className='text-center font-bold py-4'>Anisha Li</h1>
            <p className='text-center py-4 text-darkGrayishBlue text-sm'>“Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”</p>

        </div>
        <div className='flex flex-col bg-veryLightGray md:pb-6 px-6 mb-6'>
            <img className='w-20 mx-auto' src={person3} alt="" />
            <h1 className='text-center font-bold py-4'>Ali Bravo</h1>
            <p className='text-center py-4 text-darkGrayishBlue text-sm'>“We have been able to cancel so many other subscriptions since
             using Manage. There is no more cross-channel confusion and everyone 
             is much more focused.”</p>

        </div>
        <div className='flex flex-col bg-veryLightGray md:pb-6 px-6 mb-6'>
            <img className='w-20 mx-auto' src={person2} alt="" />
            <h1 className='text-center font-bold py-4'>Richard Watts</h1>
            <p className='text-center py-4 text-darkGrayishBlue text-sm'>“Manage has supercharged our team’s workflow. The ability to
             maintain visibility on larger milestones at all times keeps 
             everyone motivated.”</p>

        </div>
        </div>
        <div className='flex'>
        <button className='bg-brightRed rounded-full w-[150px] font-medium text-center text-white py-3 mx-auto m-10'>Get Started</button>

        </div>
    </div>
  )
}

export default Testimonials;