import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, EffectFade]);

const Carousel = () => {
  return (
    <div className="relative">
      <h1 className="absolute top-5 left-[40%] uppercase font-extrabold text-2xl hidden md:block">
        see what our clients say
      </h1>
      <Swiper
        slidesPerview={1}
        loop={true}
        speed={600}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="md:duration-5000 md:h-[400px] md:ease-in-out md:transition-opacity hidden md:block"
      >
        <SwiperSlide className="w-96 h-96 gap-y-10 pt-10 text-xl flex flex-col justify-center items-center relative">
          <div className="min-w-[800px] text-gray-500 mx-52">
            <h1>
              &ldquo;In a world where technology and security threats change at the speed of light, I have confidence that through SmartSoft Business, the city is on top of this rapid evolution.&rdquo;
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl">James Smith</h2>
            <p className="text-gray-500">Dome Kwabenya</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-80 h-96 gap-y-10 text-xl pt-10 flex flex-col justify-center items-center relative">
          <div className="min-w-[800px] text-gray-500 mx-52">
            <h1>
              &ldquo;Throughout the years, partnering with SmartSoft Business has proven to be one of the best decisions we have made both in terms of receiving a quality output and a strong ROI. They help us deliver world-class service at a responsible price. In order to replicate the services we receive from SmartSoft Business, we would have to staff and manage a multi-person IT department that would be cost prohibitive. We highly recommend SmartSoft Business and encourage you to utilize their expertise.&rdquo;
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-xl">Jones Bonfe</h2>
            <p className="text-gray-500">Mile 11, Street 14</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-80 h-96 gap-y-10 text-xl pt-10 flex flex-col justify-center items-center relative">
          <div className="min-w-[800px] text-gray-500 mx-52">
            <h1>
              &ldquo;SmartSoft Business has also been proactive in helping us keep our IT long-term plans, our hardware and our electronic devices updated, current and advanced as well. We would recommend their services to anyone looking for exceptional information technology support of any kind.&rdquo;
            </h1>
          </div>
           <div className='flex flex-col items-center'>
             <h2 className="font-bold text-xl">Mark Abgeyno</h2>
              <p className="text-gray-500">Madina hapton doe street</p>
            </div>
            </SwiperSlide >
            <SwiperSlide className='w-80 h-96  gap-y-10 text-xl pt-10   flex flex-col justify-center items-center  relative'>
                    <div  className='min-w-[800px] text-gray-500  mx-52   '>
                    <h1>
                         &ldquo;We&rsquo;re a municipal government organization that has worked with SmartSoft Business for about eight years as our sole IT provider. We&rsquo;ve found SmartSoft Business employees to be qualified and competent professionals with a willing and friendly demeanor. I can genuinely recommend SmartSoft Business for their services.&rdquo;
                    </h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className="font-bold text-xl">Emmanuel Teye</h2>
                        <p className="text-gray-500">East Legon Hills, street 478</p>
                    </div>

             
            
            </SwiperSlide >
           

        
        
        </Swiper>
        
    </div>
  )
}

export default Carousel