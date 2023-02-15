import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import SwiperCore,{ Autoplay, EffectCoverflow, EffectFade, Navigation,Pagination} from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css'
import Banner from './Banner'
import Link from 'next/link'
import Image from 'next/image'


SwiperCore.use([EffectCoverflow,Pagination,Autoplay,EffectFade])

const Feature = () => {
  return (
    <div className='relative'>
          <Swiper 
      // effect={'coverflow'}
      // grabCursor={true}
      // centeredSlides={true}
      slidesperview={1}
      loop={true}
      speed={600}

      
      
      
      

      // coverflowEffect={{
      //   rotate:50,
      //   stretch:0,
      //   depth:100,
      //   modifier:1,
      //   slideShadow:false,
        
      // }}
      // pagination={true}
      autoplay={{
        delay:4000,
        disableOnInteraction:false,
      }}
      className="duration-1000  ease-in-out transition-opacity"
      >
        <SwiperSlide className='object-center w-80 h-80 bg-cover relative'>
          <Image src="/img/ju.jpg" alt="" className='w-full h-screen' width={1000} height={1000} />
          
          <div className='flex  flex-col cursor-pointer py-10 px-10  bg-black/50 text-white h-62 w-96 absolute top-[45%] md:top-[34%] md:right-[15%]  '>
            
            <div className='font-sans text-2xl font-bold'> 
              <h3>
              Microsoft Azure
              </h3>    
            </div>

            <div className='pt-3 pb-4 font-sans text-lg'> 
              <p>Our certified Azure consultants build and implement custom migration plans to set you up for success in the cloud</p>
              
            </div>
            <div className='flex justify-around items-center'>
              <p className=' text-white bg-blue-400 rounded-sm py-2 px-5 mr-2'>Read More</p>
              <Link href="/contact" legacyBehavior>
                <a href="/contact" target="_blank" rel="noopener noreferrer">

              <button className=' text-white bg-black/25 border-2 py-2 px-5  rounded-sm border-white'>Contact Us
              </button>
                </a>
              </Link>
            </div>
                
          </div>
          
        </SwiperSlide >
        <SwiperSlide className='object-center w-80 h-80 bg-cover  '>
          <Image width={1000} height={1000} src="/img/kate.jpg" alt="" className='w-full h-screen' />
          <div className='flex  flex-col cursor-pointer py-10 px-10 bg-black/50 text-white h-62 w-96 absolute top-[45%] md:top-[34%] md:left-[20%] '>
            
            <div className='font-sans text-2xl font-bold'> 
              <h3>
              Remote Support
              </h3>    
            </div>

            <div className='pt-3 pb-4 font-sans text-lg'> 
              <p>We offer a range of internet services incliding:</p>
              <p>Fixed Wireless Broadband, ADSL and NBN</p>
            </div>
            <div className='flex justify-around items-center'>
              <p className=' text-white bg-blue-400 rounded-sm py-2 px-5 mr-2'>Read More</p>
              <Link href="/contact" legacyBehavior>
                <a href="/contact" target="_blank" rel="noopener noreferrer">

              <button className=' text-white bg-black/25 border-2 py-2 px-5  rounded-sm border-white'>Contact Us
              </button>
                </a>
              </Link>
            </div>
                
          </div>


        </SwiperSlide>
        <SwiperSlide className='object-center w-80 h-80 bg-cover '>
          <Image width={1000} height={1000} src="/img/damir.jpg" alt="" className='w-full h-screen' />
          <div className='flex  flex-col cursor-pointer py-10 px-10 bg-black/50 text-white h-62 w-96 absolute top-[45%] md:top-[34%] md:right-[20%] '>
            
            <div className='font-sans text-2xl font-bold'> 
              <h3>
                Convinient Environment
              </h3>    
            </div>

            <div className='pt-3 pb-4 font-sans text-lg'> 
              <p>We provide the best working environment for our clients</p>
              <p>Experience the best customer service and product services with SmartSoft Business</p>
            </div>
            <div className='flex justify-around items-center'>
              <p className=' text-white bg-blue-400 rounded-sm py-2 px-5 mr-2'>Read More</p>
              <Link href="/contact" legacyBehavior>
                <a href="/contact" target="_blank" rel="noopener noreferrer">

              <button className=' text-white bg-black/25 border-2 py-2 px-5  rounded-sm border-white'>Contact Us
              </button>
                </a>
              </Link>
            </div>
                
          </div>


        </SwiperSlide>
        <SwiperSlide className='object-center w-80 h-80 bg-cover ' >
          <Image width={1000} height={1000} src="/img/ade.jpg" alt="" className='w-full h-screen' />
          <div className='flex  flex-col cursor-pointer py-10 px-10 bg-black/50 text-white h-62 w-96 absolute top-[45%] md:top-[34%] md:right-[15%] '>
            
            <div className='font-sans text-2xl font-bold'> 
              <h3>
              Office 365/Email
              </h3>    
            </div>

            <div className='pt-3 pb-4 font-sans text-lg'> 
              <p>We offer a range of internet services including:</p>
              <p>Managing email, syncing files, or getting trained on Teams</p>
              <p>Microsoft licenses, support, and training.</p>
              <p>DLP policies,Compliance and Security.</p>
            </div>
            <div className='flex justify-around items-center'>
              <p className=' text-white bg-blue-400 rounded-sm py-2 px-5 mr-2'>Read More</p>
              <Link href="/contact" legacyBehavior>
                <a href="/contact" target="_blank" rel="noopener noreferrer">

              <button className=' text-white bg-black/25 border-2 py-2 px-5  rounded-sm border-white'>Contact Us
              </button>
                </a>
              </Link>
            </div>
                
          </div>


        </SwiperSlide>

      {/* <div className='md:fixed text-white  top-[10%]  w-[250px] h-[200px] left-[-1] z-10'>
      <Image src="/img/20230213_143501_0000.png" width={2000} height={2000} className="w-full h-full"/>
      <p className='text-sm uppercase text-yellow-600 font-bold'>innovation.technology.services</p>
      </div> */}
      <div className='md:absolute text-white top-[18%]  left-[20%] z-10'>
        <Banner/>
      </div>
      </Swiper>  
    </div>
  )
}

export default Feature