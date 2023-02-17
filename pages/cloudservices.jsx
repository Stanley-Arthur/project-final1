import CloudCard from '@/components/cloudCard'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Carousel from '@/components/carousel'



const cloudservices = () => {
  return (
    <div>
      <div className="flex flex-col  md:mb-96 pt-20 h-[500px] w-full relative">
        <Image alt='' src="/img/cloud.jpg " className=' object-cover  w-full min-h-screen  ' width={1000} height={1000} />
        <span className=' bg-gradient-to-r  from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
      
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-4xl font-bold  font-sans '>The Essential Cloud Tools for Any Business Goal</h2>
            <p className='text-white text-2xl font-semibold '>We’re taking your business to new heights with the latest cloud tools and solutions.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-red-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>Request a Consultation</button>
              </a>
            </Link>
          </div>
        </div> 
      </div>

      
      <CloudCard/>

      <div className='flex flex-1 items-center mb-10 justify-center mx-5 flex-col md:flex-row  mt-5'>
        <div className='md:w-[50%]  w-full flex justify-center mx-3 items-center flex-col'>
          <div>
            <h1 className='text-2xl font-bold '>Certified Experts</h1>
            <p className='font-semibold mt-5 mb-5'>Microsoft Gold Certified Partner</p>
            <div className='font-bold space-y-5'>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                CLoud Platform
              </p>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                CLoud Productivity
              </p>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                SMB CLoud Solution
              </p>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                Collaborations and Content
              </p>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                Datacenter
              </p>
              <p className='flex flex-row  space-x-2 '>
                <Image alt='' src="/img/stan.png" className='mr-4' width={30} height={20}/>
                Application Development
              </p>
           
            </div>
          </div>
        </div>
        <div className='md:w-[50%] w-full'>
          <Image alt='' className='w-[500px] min-h-[350px] object-cover' src="/img/cl.jpg" width={500} height={500}  />
        </div>
      </div>
      <Carousel/>
    </div>
  )
  }  


export default cloudservices
