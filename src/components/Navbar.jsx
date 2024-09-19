import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'

const Navbar = () => {

    const navigate = useNavigate()
    const Nav = () => {}
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 hidden sm:flex bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" srcset="" />
                <img onClick={()=>navigate(1)} className='w-8 hidden sm:flex bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" srcset="" />
                <img className='sm:hidden w-full h-8 my-1' src={assets.spotify_main_logo} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                <div className='flex items-center cursor-pointer'>
                    <img className='w-5 h-5' src={assets.download_icon} alt="" />
                <p className='py-1 px-1 text-[15px]'>Install App</p>
                </div>
                {/* Hamburger Icon */}
                <img onClick={() => setIsOpen(!isOpen)} className='sm:hidden w-5 mr-4 h-6 cursor-pointer' src={assets.hamburger_icon} alt="" />
            
                <p className='bg-purple-500 hidden sm:flex text-black w-7 h-7 rounded-full items-center justify-center'>N</p>
            </div>
                {/* Hamburger Menu */}
            
            <div className='flex-col hidden w-full text-2xl font-bold p-6 h-full absolute bg-black top-0'>
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
                       
        </div>
        
    </>
  )
}

export default Navbar