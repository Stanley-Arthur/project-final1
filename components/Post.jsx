import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='flex justify-center bg-gray-50 items-center flex-col'>
        <h1 className='text-4xl font-bold'>Our Values</h1>
        <div className='md:w-[700px] xl:w-[900px] flex items-center justify-center'>
         <p className='text-2xl hidden md:block'>Not just words on a wall (though we do have those), these are values that define how we view all of our relationships. </p>
        </div>
        <div className='flex justify-around md:flex-row bg-white rounded space-y-10 md:space-y-2 flex-col  py-16 mt-10 md:min-w-[700px] mx-auto md:shadow-2xl items-center'>
            <div className='text-gray-400 space-y-2'>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>  <p>People First</p></div>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>  <p>Integrity</p></div>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>  <p>Ownership</p></div>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>   <p>Growth Mindset</p></div>       
            </div>
            <div className='text-gray-400 space-y-2'>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/> <p>Communication</p></div>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>  <p>Teamwork</p></div>
                <div className='flex flex-row items-center gap-x-2'><Image alt='' src="/img/stan.png" width={20} height={20}/>  <p>Excellence</p></div> 
            </div>
        </div>
    </div>
  )
}

export default Post