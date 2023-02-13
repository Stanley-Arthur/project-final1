import React from 'react'
import {AiOutlineCopyright, AiOutlineMenu,AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Socials = () => {
  return (
    <div className='flex justify-around text-black bg-gray-200 h-28 '>
        <div className='flex items-center   sm:w-[50%] '>
            <div className='rounded-full mr-6 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                <FaLinkedinIn/>
            </div>
            <div className='rounded-full mr-6 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                <AiOutlineMail/>
           </div>
            <div className='rounded-full mr-6 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                 <BsFillPersonLinesFill/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                <AiOutlineTwitter/>
            </div>
        </div>
        <div className='flex  items-center hidden md:block'>
            <p className='flex justify-center items-center'>Copyright <AiOutlineCopyright className='mr-2 ml-2'/> 2022 | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Socials