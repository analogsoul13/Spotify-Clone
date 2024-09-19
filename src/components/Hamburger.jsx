import React from 'react'
import { assets } from '../assets/assets'

const Hamburger = () => {
    
  return (
    <div className=' flex-col hidden w-full text-2xl font-bold p-6 h-full absolute bg-black top-0'>
        <div className='flex justify-end p-2'>
            <img className='w-6 h-6 cursor-pointer' src={assets.close_icon} alt="" />
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
  )
}

export default Hamburger