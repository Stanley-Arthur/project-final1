import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousel from '@/components/carousel'
import ManagedCards from '@/components/ManagedCards'

const managedservices = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex flex-col  pt-20 h-full w-full relative">
        <Image alt="" src="/img/chris.jpg " className=' object-cover  w-full h-screen  ' width={1000} height={1000} />
        <span className=' bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
       
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-5xl font-bold  font-sans '>Managed IT Support</h2>
            <p className='text-white text-xl font-semibold '>Comprehensive IT Services and Support for Your Organization </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-red-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>Request Service Details</button>
              </a>
            </Link>
          </div> 
        </div>      
      </div>

      <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
        <div className='md:w-[50%]  w-full flex justify-center mx-3 items-center flex-col'>
          <div>
            <h1 className='text-2xl font-bold '>An Entire Managed IT Team at Your Side</h1>
            <p className='font-semibold mt-5 mb-5'>Each SmartSoft Business client receives the support of a dedicated team of IT consultants. And with the backing of over 100 technicians across the West, there’s no technology problem that we can’t handle.</p>
            <p className='text-gray-500'>All of our IT services include :</p>
            <div className='font-bold space-y-3'>
              <p className='flex flex-row space-x-2 '>
                <Image alt="" src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                Premier Onboard Services
              </p>
              <p className='flex flex-row space-x-2 '>
                 <Image alt="" src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                Support from a Team of Experts
              </p>
              <p className='flex flex-row space-x-2  '>
              <Image alt="" src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                Access to the Latest Technology
              </p>
              <p className='flex flex-row space-x-2  '>
              <Image alt="" src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                Down-to-Earth Consultants
              </p>
              <p className='flex flex-row space-x-2 '>
              <Image alt="" src="/img/icons8-checkmark-24.png" className='mr-4' width={30} height={20}/>
                Network Monitoring
              </p>
            </div>
          </div>
         
          <p className='text-gray-400'>
          The technology your company depends on shouldn’t cause you stress or worry. Reach out today for a better way to manage your IT needs. 
          </p>
        </div>
        <div className='md:w-[50%] w-full'>
          <Image alt='' className='w-[500px] h-96 object-cover' src="/img/cdc.jpg" width={500} height={500}  />
        </div>
      </div>

      <Carousel/>

      <div className='min-h-[500px] mt-10 justify-center space-y-28 items-center w-full flex flex-col '>
        <h1 className='font-extrabold text-4xl'>SmartSoft Business by the Numbers</h1>
        <div className='flex md:flex-row flex-col  gap-y-20 gap-x-5 w-full justify-around items-center'>
          <div className='space-y-5 flex flex-col items-center'>
            <div className='bg-gradient-to-r space-y-3 from-purple-500/50 to-pink-500/50 w-[100px] rounded-full flex justify-center items-center h-[100px]'><Image alt="" src="/img/icons8-handshake-68.png" width={50} height={50}/></div>
            <h1 className='font-bold text-2xl'>700+</h1>
            <p className='text-2xl text-gray-400'>Organizations served</p>
          </div>
          <div className='space-y-5 flex flex-col items-center'>
            <div className='bg-gradient-to-r space-y-3 from-purple-500/50 to-pink-500/50 w-[100px] rounded-full flex justify-center items-center h-[100px]'><Image alt="" src="/img/icons8-calendar-50.png" width={50} height={50}/></div>
            <h1 className='font-bold text-2xl'>10+ Years</h1>
            <p className='text-2xl text-gray-400'>Experience as a trusted IT partner</p>
          </div>
          <div className='space-y-5 flex flex-col items-center'>
            <div className='bg-gradient-to-r space-y-3 from-purple-500/50 to-pink-500/50 w-[100px] rounded-full flex justify-center items-center h-[100px]'><Image alt="" src="/img/icons8-people-64.png" width={50} height={50}/></div> 
            <h1 className='font-bold text-2xl'>27,483</h1>
            <p className='text-2xl text-gray-400'>End users supported</p>
          </div>
          <div className='space-y-5 flex flex-col items-center'>
            <div className='bg-gradient-to-r space-y-3 from-purple-500/50 to-pink-500/50 w-[100px] rounded-full flex justify-center items-center h-[100px]'><Image alt="" src="/img/icons8-checked-checkbox-24.png" width={50} height={50}/></div>
            <h1 className='font-bold text-2xl'>97.7%</h1>
            <p className='text-2xl text-gray-400'>customer satisfaction rating</p>
          </div>
        </div>
      </div>
      <ManagedCards/>
      

      
    </div>
  )
}

export default managedservices