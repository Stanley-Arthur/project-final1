import React from 'react'
import Image from 'next/image'

const CloudCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className=' max-w-[90%] pt-20 mx-[5%] items-center gap-x-10  gap-y-10 grid md:grid-cols-2 lg:grid-cols-3   '>
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <Image  width={50} height={50} alt="" src="/img/icons8-icloud-50 (2).png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-xl font-extrabold'>
                        The Cloud PC(Daas)
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                Leverage the cloud in new ways with desktop virtualization. Keep your team connected and save on hardware and labor costs with a desktop experience that goes wherever you do.
                </p>
                </div>
            </div>
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <Image  width={50} height={50} alt="" src="/img/icons8-computer-support-50.png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-2xl font-bold'>
                        Business Community
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                Working from anywhere and accessing data on the go is a must in today’s business environment. Get the products and support to help your team work seamlessly.
                </p>
                </div>
            </div>
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                        <Image  width={50} height={50} alt="" src="/img/icons8-windows8-50.png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-2xl font-bold'>
                        Azure Migration
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                Whether it’s a simple “lift and shift” or a complete overhaul into the cloud, our engineers make moving to the cloud like floating on air. 
                </p>
                </div>
            </div>
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <Image  width={50} height={50} alt="" src="/img/icons8-microsoft-48.png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-2xl font-bold'>
                        Microsoft 365
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                We manage the purchasing, distribution, and ongoing support of all of your Microsoft licensed products. We ensure your business operations run securely and smoothly.
                </p>
                </div>
            </div>
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <Image  width={50} height={50} alt="" src="/img/icons8-nas-24.png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-2xl font-bold'>
                        Managed Azure
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                Maintaining cloud infrastructure isn’t easy. We optimize resource performance and cost while maintaining compliance for any Azure environment.
                </p>
                </div>
            </div>
    
            <div className='flex  flex-col shadow-lg  cursor-pointer px-8 hover:scale-105  duration-500 bg-white rounded-lg h-80 w-80  '>
                <div className='flex flex-col mx-4 my-5'>
                    <div className='text-white rounded-full w-16 h-16 flex items-center justify-center'>  
                    <Image  width={50} height={50} alt="" src="/img/icons8-voip-50.png"/>
                    </div>
                    <div className='ml-[5%] '>
                        <p className='text-2xl font-bold'>
                        UCaaS
                        </p> 
        
                    </div>
                </div>
                <div className='flex  justify-center items-center w-58'>
                <p >
                Close the gaps in your business communication. Increase collaboration and decrease downtime with cloud-based phone, chat, and video tools.


                </p>
                </div>
            </div>  
 
      </div>
      
    </div>
  )
}

export default CloudCard