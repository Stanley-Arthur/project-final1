import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousol from '@/components/carousel'
import ManagedCards from '@/components/ManagedCards'
import CyberCard from '@/components/CyberCard'
import Post from '@/components/Post'

const Approach = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="flex flex-col   pt-20 h-full w-full relative">
        <Image src="/img/appro.jpg " className=' object-cover  w-full h-screen  ' width={1000} height={1000} />
        <span className=' bg-gradient-to-r from-purple-500/50 to-pink-500/50 h-screen  w-full absolute'/>
       
        <div className='absolute space-y-8 top-[40%] left-[25%] '>
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <h2 className='text-white text-3xl font-bold  font-sans '>Our Unique Approach to Providing IT Services</h2>
            <p className='text-white text-xl font-semibold '>Partnership, Service, Growth, People</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href="/contact" legacyBehavior >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              <button className=' text-md  bg-red-500 shadow-md w-[200px] text-white py-5 rounded font-semibold'>For more Inquiries</button>
              </a>
            </Link>
          </div>
          
        
        </div>
      
      </div>
      <Post/>

      <div className='gap-y-5'>

        <div className='flex flex-1 items-center  justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Dedicated to Your Success</h1>
              <p className='text-gray-500 mt-5 mb-5'>We are sincerely invested in the success of your business, and we believe that technology should be built in service to your greater goals.</p>
              <p className='text-gray-500'>With a dedicated Onboarding team, Client Success department, and Projects division, we’ve structured our company with our clients’ success at heart.</p>
            
            </div>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src="/img/d1.jpg" width={500} height={500}  />
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src="/img/team.jpg" width={500} height={500}  />
            </div>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>A Team of Experts</h1>
              <p className='text-gray-500 mt-5 mb-5'>Executech clients are supported by a dedicated team of Service Desk consultants and depending on your package, a Senior Engineer who will understand your team and network.</p>
              <p className='text-gray-500'>You are backed by a team of over 100 certified technical experts across the West with the expertise of a dozen enterprise-level IT departments at an affordable price.</p>
            
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Defy the Average</h1>
              <p className='text-gray-500 mt-5 mb-5'>We are not your average IT organization. We strive to defy the perception of the stiff, closeted, IT person.</p>
              <p className='text-gray-500'>When we hire technicians for our team, we look for individuals who stand out. Our team is made of not just great technical experts but great individuals who will bring a friendly and personal touch to their work.</p>
            
            </div>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src="/img/defy.jpg" width={500} height={500}  />
            </div>
          </div>

          <div className='flex flex-1 items-center justify-center mx-10 flex-col md:flex-row  h-screen mt-5'>
            <div className='md:w-[50%] w-full'>
              <Image alt='' className='w-[500px] h-80 object-cover' src="/img/pro.jpg" width={500} height={500}  />
            </div>
            <div className='md:w-[50%]  w-full flex  mx-3 items-center flex-col'>
          
              <h1 className='text-3xl font-bold  '>Proactive vs. Reactive</h1>
              <p className='text-gray-500 mt-5 mb-5'>We seek to understand your organization’s unique objectives and processes and strive to find great technology tools to help. Our model is to always provide proactive management of a computer network. </p>
              <p className='text-gray-500'>We want to stop problems before they happen and build solutions that will last for the long term. We don’t believe in Band-Aid fixes.</p>
            
            </div>
          </div>
      </div>


      <Carousol/>

        
     
     
      

      
    </div>
  )
}

export default Approach