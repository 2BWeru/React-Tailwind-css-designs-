import React,{useState} from 'react'
import logo from "../assets/img/logo.svg";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const Navbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
   <nav className='relative text-black container p-6 h-24 mx-auto'>
        <div className='flex justify-between'>
            <div className="py-2">
                <img className='' src={logo} alt="" />
            </div>
            <div className='hidden lg:flex space-x-6 py-2'>
                <a className='hover:text-darkGrayishBlue'>Pricing</a>
                <a className='hover:text-darkGrayishBlue'>Product</a>
                <a className='hover:text-darkGrayishBlue'>About Us</a>
                <a className='hover:text-darkGrayishBlue'>Careers</a>
                <a className='hover:text-darkGrayishBlue'>Community</a>
            </div>
            <button className='hidden lg:block pl-2 bg-brightRed rounded-full w-[200px] py-3 text-white'>Get Started</button>

            <div className='items-center lg:hidden' onClick={handleNav}>
                {nav ?<AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
            </div>
            <div className={nav ? 'flex fixed bg-blue-100 w-[60%] flex-col items-center mt-20 py-8 hover:cursor-default px-8 ease-in-out duration-500':'hidden right-[-100%]'}>
                <a className='border-b border-b-red-400 hover:text-darkGrayishBlue py-4 font-bold text-md lg:text-4xl'>Pricing</a>
                <a className='border-b border-b-red-400 hover:text-darkGrayishBlue py-4 font-bold text-md lg:text-4xl'>Product</a>
                <a className='border-b border-b-red-400 hover:text-darkGrayishBlue py-4 font-bold text-md lg:text-4xl'>About Us</a>
                <a className='border-b border-b-red-400 hover:text-darkGrayishBlue py-4 font-bold text-md lg:text-4xl'>Careers</a>
                <a className='border-b border-b-red-400 hover:text-darkGrayishBlue py-4 font-bold text-md lg:text-4xl'>Community</a>
            </div>
        </div>
   </nav>
  )
}

export default Navbar