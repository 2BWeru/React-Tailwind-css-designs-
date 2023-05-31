import React from 'react'
import logo from "../assets/img/logo-white.svg";
import facebook from "../assets/img/icon-facebook.svg";
import instagram from "../assets/img/icon-instagram.svg";
import pininterest from "../assets/img/icon-pinterest.svg";
import youtube from "../assets/img/icon-youtube.svg";
import twitter from "../assets/img/icon-twitter.svg";


const Footer = () => {
  return (
    <div className='flex py-16 px-4 bg-veryDarkBlue text-white'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='flex flex-col'>
                <img className='py-8' src={logo} alt="logo" />
                <div className='flex justify-center space-x-4'>
                    <img src={facebook} alt="" size={30} />
                    <img src={instagram} alt="" size={30} />
                    <img src={pininterest} alt="" size={30} />
                    <img src={youtube} alt="" size={30} />
                    <img src={twitter} alt="" size={30} />

                </div>
            </div>
            <div className='flex flex-row pt-4 mx-auto text-center'>
                <div className='flex flex-col px-10'>
                    <a className='py-2 hover:text-darkGrayishBlue'>Home</a>
                    <a className='py-2 hover:text-darkGrayishBlue'>About</a>
                    <a className='py-2 hover:text-darkGrayishBlue'>Pricing</a>
                    <a className='py-2 hover:text-darkGrayishBlue'>Product</a>
                </div>
                <div className='flex flex-col px-10'>
                    <a  className='py-2 hover:text-darkGrayishBlue'>Careers</a>
                    <a  className='py-2 hover:text-darkGrayishBlue'>Privacy Policy</a>
                    <a  className='py-2 hover:text-darkGrayishBlue'>Agreement</a>
                    <a  className='py-2 hover:text-darkGrayishBlue'>Community</a>
                </div>
            </div>
            
            <div className='flex items-center'>
                <input className='rounded-full mr-2 pl-4 py-2 text-center' type="email" placeholder='Enter email'/>
                <button className='bg-brightRed rounded-full font-medium text-center text-white py-3 px-6'>Go</button>

            </div>
        </div>
    </div>
  )
}

export default Footer