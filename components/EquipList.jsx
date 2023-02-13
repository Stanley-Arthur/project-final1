import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EquipList = ({item}) => {
  return (
    <div className='flex  flex-col shadow-lg items-center  cursor-pointer hover:scale-105 ease-in duration-300 bg-gray-100 rounded-lg min-h-80 w-80  '>
            <div className=' text-white  w-42 h-42 pt-5 flex items-center justify-center'>  
                <Link href={`/product/${item._id}`} >
                <Image src={item.img} className='rounded-md' width={200} height={200} alt='' priority/>
                </Link>
            </div>
            <div className='w-[200px]'>
                <h1 className='font-bold'>{item.title}</h1>
                <span className='text-green-400 border-b border-b-green-400 text-[24px] font-semibold'>${item.price}</span>
                <p>{item.desc}</p>
            </div>
          
        
      
   </div>
)
}

export default EquipList