import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CyberCard = () => {
  return (
    <div>
        <div className='flex  gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  min-h-[800px] mt-5'>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                  Security is like an onion ― it’s built in layers.
                </h1>
                <p className='text-gray-500  text-2xl'>
                There is not a one-size-fits-all solution when it comes to cybersecurity. We’ve built our security services and products on the idea of layering on many levels of defense. These layers include:
                </p>
                <div className='flex flex-col ml-4 w-full'>
                    <h1 className='text-2xl font-bold'>Enterprise-Grade Tools</h1>
                    <p className='text-gray-500  text-xl'>We provide you with a variety of affordable software and hardware options to secure your business.</p>
                </div>
                <div className='flex flex-col ml-4 w-full'>
                    <h1 className='text-2xl font-bold'>Hands-On Expertise</h1>
                    <p className='text-gray-500  text-xl'>Our Security Consultants provide an added, human layer of monitoring and detection.</p>
                </div>
                <div className='flex flex-col ml-4 w-full'>
                    <h1 className='text-2xl font-bold'>Ongoing Training</h1>
                    <p className='text-gray-500  text-xl'>Employees are often the number one threat an organization faces. With training and regular tips, we help reduce that risk. </p>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='md:w-[40%] flex justify-center items-center  w-full'>
            <Image alt='' className='w-[500px] h-[500px] object-cover' src="/img/17.jpg" width={500} height={500}  />
            </div>
        </div>

        <div className='flex  gap-x-5 gap-y-8 items-center justify-center  flex-col md:flex-row  min-h-[800px] mt-5'>
            <div className='md:w-[40%] flex justify-center items-center w-full'>
            <Image alt='' className='w-[500px] h-[500px] object-cover' src="/img/12.jpg" width={500} height={500}  />
            </div>
            <div className='md:w-[50%] gap-y-10 w-full flex justify-center  items-center flex-col'>
                <h1 className='font-bold text-4xl'>
                The #1 Step to Cybersecurity: Data Backups
                </h1>
                <p className='text-gray-500  text-2xl'>
                We have an old saying that backups are the “holy grail” of computing. Ensuring that your company data and network is properly backed up can solve more IT problems than we can count. 
                </p>
                <div className='flex flex-col ml-4 w-full '>
                    <h1 className='text-2xl font-bold'>On-Premise vs Cloud Backups</h1>
                    <p className='text-gray-500  text-xl'>Our team of cyber and cloud engineers can work with you to determine the best method of backing up your business data. Using our world-class vendors, your data will stay protected.</p>
                </div>
                <div className='flex flex-col ml-4 w-full'>
                    <h1 className='text-2xl font-bold'>Disaster Recovery</h1>
                    <p className='text-gray-500  text-xl'>Getting your business back on its feet after an incident as quickly as possible is crucial. You can rest easy knowing that your data and response plan is supported by the latest backup and DR solutions.</p>
                </div>
            </div>
        </div>

       


    </div>
  )
}

export default CyberCard