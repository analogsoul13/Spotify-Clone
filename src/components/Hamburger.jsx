import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
  return (
    <>
    <div className='flex sm:hidden '>
        {/* Hamburger Icon */}
        <img onClick={() => setIsOpen(!isOpen)} className='sm:hidden w-5 mr-4 h-6 cursor-pointer' src={assets.hamburger_icon} alt="" />
    </div>
    {isOpen && (
        // Hamburger Menu
        <div className='flex flex-col sm:hidden w-full text-2xl font-bold p-6 h-full absolute bg-black top-0'>
            <div className='flex justify-end p-2'>
                <img onClick={toggle} className='w-6 h-6 cursor-pointer mr-2' src={assets.close_icon} alt="" />
            </div>
        <div className='flex flex-row w-full mt-8 mb-6'>
            <ul>
                <li className='cursor-pointer'>Log in</li>
                <li className='cursor-pointer'>Sign up</li>
            </ul>
        </div>
        <span>-</span>
        <div className='flex flex-row w-full mt-10 text-xl'>
            <ul>
                <li className='cursor-pointer'>Premium</li>
                <li className='cursor-pointer'>Help</li>
                <li className='cursor-pointer'>Download</li>
                <li className='cursor-pointer'>Privacy</li>
                <li className='cursor-pointer'>Terms</li>
            </ul>
        </div>

    </div>
    )}

    </>
  )
}

export default Hamburger