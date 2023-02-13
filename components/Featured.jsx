import React,{useState} from 'react'
import Image from 'next/legacy/image'
import { BsFillArrowRightSquareFill,BsFillArrowLeftSquareFill } from 'react-icons/bs'
import {GoLocation,} from 'react-icons/go'
import {AiFillPhone,AiOutlineMessage} from 'react-icons/ai'
const Featured = () => {
    const [index, setIndex]=useState(0) 
    const handleArrow=(direction)=>{
        if(direction=="l"){
            setIndex(index !==0 ? index-1:2)
        }
        if(direction=="r"){
            setIndex(index !==2 ? index+1:0)
        }

    }



    const images= [
        '/img/cesar.jpg',
        '/img/shub.jpg',
        '/img/charles.jpg',
    ]
  return (
    <div className='h-[calc(100vh-20px)]  overflow-hidden relative'>
        <div>
         <BsFillArrowLeftSquareFill size={50} onClick={()=>handleArrow('l')} className="cursor-pointer text-white/50 z-20 absolute top-80 left-10"/>
        </div>
        <div className='w-[300vw] h-full flex duration-1000  ease-in-out transition-opacity ' style={{transform:`translateX(${-100*index}vw)`}}> 
            {images.map((img,i)=>(
                 <div key={i} className="w-[100vw] h-full relative ">
                  <Image src={img} alt=''  className='object-cover'  layout='fill'/>
                 </div>
            ))}
        </div>
        <div>
         <BsFillArrowRightSquareFill onClick={()=>handleArrow('r')}  size={50} className ="z-99 cursor-pointer text-white/50 absolute top-80 right-10"/>
        </div>
        <div className='flex fle-col justify-center items-center'>

            <div className='text-white text-4xl font-extrabold absolute py-5 px-9 bg-black/60 top-[25%] left-[40%]'>
             <h1 className='uppercase'>Get in Touch </h1>
            </div>
            <div className='flex md:flex-row flex-col absolute gap-x-20 mx-10 justify-center items-center  top-[40%] left-[20%]'>
                <div className='flex flex-col  bg-black/70 w-96 h-96 items-center justify-center '>
                    <div className='flex rounded-full bg-gray-500/80 w-14 h-14 items-center justify-center text-gray-500 hover:text-white '> 
                        <GoLocation size={25} className='w-36 animate-bounce pr-2 text-yellow-300'/>    
                    </div>
                    <h1 className='uppercase text-white my-4 font-semibold'>Location</h1>
                    <div className='flex justify-center gap-y-3 items-center flex-col'>
                        <div className='text-white space-y-4 font-semibold justify-center items-center flex flex-col'>
                            <p>Locate us at Achimota, Opposite St.Johns School</p>
                            <p>Last floor of the EcoBank Building</p>
                            <p>First junction of the 3rd Street 234</p>
                        </div>
                    </div>
                </div>
                <div className=' hidden md:block md:flex flex-col  bg-black/70 w-96 h-96 items-center justify-center '>
                    <div className='flex rounded-full bg-gray-500/80 w-14 h-14 items-center justify-center text-gray-500 hover:text-white '> 
                        <AiFillPhone size={25} className='w-36 animate-bounce pr-2 text-yellow-300'/>    
                    </div>
                    <h1 className='uppercase text-white my-4 font-semibold'>phone</h1>
                    <div className='flex justify-center gap-y-3 items-center flex-col'>
                        <div className='text-white space-y-4 font-semibold justify-center items-center flex flex-col'>
                            <p>Interested in SmartSoft Services?pick up the phone</p>
                            <p>to chat with a member of our sales teams</p>
                            <p>Tel: 678-554-8811</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured