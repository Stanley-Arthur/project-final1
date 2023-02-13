import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ManagedCards = () => {
  return (
    <div>
        <div className='flex  gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                  Local Consultants, Local Service
                </h1>
                <p className='text-gray-500  text-2xl'>
                 From Scottsdale and Salt Lake City to and from Sacramento, Grand Junction, Seattle and Spokane, we have local certified technicians who are your source of managed IT services, expertise, and help. Our team of over 100 technicians has hands-on experience and personal skills to solve any problem.
                </p>
            </div>
            <div className='md:w-[40%] w-full'>
            <Image alt='' className='w-[500px] h-72 object-cover' src="/img/ist.jpg" width={500} height={500}  />
            </div>
        </div>

        <div className='flex  gap-x-5 gap-y-4 items-center justify-center  flex-col md:flex-row  h-screen '>
            <div className='md:w-[40%] w-full'>
            <Image alt='' className='w-[500px] h-72 object-cover' src="/img/1 (2).jpg" width={500} height={500}  />
            </div>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                  The Difference Is in Our People  
                </h1>
                <p className='text-gray-500  text-2xl'>
                  Our IT service is different because of the people we hire. At Executech, you get more than just a technical expert — you get a personal, friendly consultant that is ready and willing to help you with any problem. We are available 24/7/365 and we can diagnose and resolve your most difficult issues quickly and efficiently.
                </p>
            </div>
        </div>

        <div className='flex  gap-x-5 gap-y-4 items-center justify-center  flex-col md:flex-row  h-screen '>
            <div className='md:w-[40%] w-full'>
            <Image alt='' className='w-[500px] h-72 object-cover' src="/img/photo.jpg" width={500} height={500}  />
            </div>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                 Worry-Free IT 
                </h1>
                <p className='text-gray-500  text-2xl'>
                  The technology your company depends on shouldn’t cause you stress. As odd as it sounds, we know that IT should be in the back of your mind — it should simply work.
                  We build personal relationships with your team while making sure that the IT that supports your organization runs smoothly without being noticed.
                </p>
            </div>
        </div>


    </div>
  )
}

export default ManagedCards