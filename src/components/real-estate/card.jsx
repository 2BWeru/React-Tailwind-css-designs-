import React from 'react'

const Card = () => {
  return (
    
    <div className='bg-brightRed flex flex-col justify-between items-center mx-auto px-34 py-8 md:flex-row'>
        <p className='font-bold text-3xl mx-auto text-center text-white py-8 md:text-4xl md:text-start'>Simplify how your team works today</p>
        <button className='bg-white rounded-full w-[150px] font-medium text-center text-red py-3 mx-auto'>Get Started</button>
    </div>
  )
}

export default Card;