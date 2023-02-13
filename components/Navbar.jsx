import React,{useState} from 'react'
import NavItems from './NavItems'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GiSmart} from 'react-icons/gi'
import Image from 'next/legacy/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'




const Navbar = () => {
    const {data} = useSession()
    const router =useRouter()

    const logOut=()=>{
        Cookies.remove('loggedin')
       router.push('/login')
    }
    

    const quantity =useSelector(state=> state.cart.quantity)

    const [nav, setNav]=useState(false)
   const handleNav=()=>{
        setNav(!nav)
    }
  return (
    
     <div className=' fixed w-full h-20 shadow-xl z-[100] bg-gray-900'>
        <div className=' flex xl:justify-around justify-between  items-center w-full h-full px-2 2xl:px-16'>
            <div className='inline-flex cursor-pointer  '>
                <GiSmart className='text-5xl text-[#f7AB0A] animate-pulse   lg:text-4xl'/> 
                <h1 className='text-3xl text-white  lg:text-3xl'>SmartSoft<span className='animate-pulse  text-blue-700'>BUSINESS</span></h1>

            </div>

            <div className='hidden md:block text-white'>
                <NavItems/>
                
            </div>
            <div onClick={handleNav} className='md:hidden text-white' >
                <AiOutlineMenu size={25 }/>
            </div>
            <div className='hidden md:block'>
                {data?.user ? (                
                <span className='text-white uppercase hover:border-b-4  hover:border-b-yellow-600' style={{cursor:"pointer"}} onClick={()=>logOut()} >Logout</span>  
                ): (
                <span>
                 <Link href="/login" className="text-white uppercase  hover:border-b-4  hover:border-b-yellow-600 cursor-pointer" >Login</Link>
                 </span>
                )}
            </div>
          
                <div>
            <Link href="/cart">
                <div className='md:relative xl:relative'>
                    <div className='md:flex md:justify-center  hidden '>  
                        <Image src='/img/cart.png' width="30px" height="20px" alt=''/>
                        <span className='absolute top-[-6px] left-6  bg-white text-gray-900 font-[poppins] flex items-center justify-center rounded-full w-[15px] h-[15px] '>{quantity}</span>
                    </div>  
                </div>
            </Link>
            </div>

        </div>
        <div className={nav?`md:hidden fixed left-0 top-0 w-full h-screen bg-black/70`:""}>
          <div className={nav?`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#8dcae9] p-10 ease-in-out duration-500 `:
              `fixed left-[-100%] top-0 p-10 ease-in-out duration-500 `}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div className='inline-flex cursor-pointer  '>
                            <GiSmart className='text-3xl text-[#f7AB0A] animate-pulse   lg:text-4xl'/> 
                            <h1 className='text-xl  text-white'>SmartSoft<span className='text-blue-700 animate-pulse uppercase'>Business</span></h1>

                        </div> 
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ' >
                            <AiOutlineClose/> 
                        </div>
                    </div> 
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4'>lets build something together</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <NavItems/> 
                    <div className='ml-10'>
                      {data?.user ? (                
                      <span className='text-black uppercase  hover:border-b-4 hover:border-b-yellow-600' style={{cursor:"pointer"}} onClick={()=>logOut()} >Logout</span>  
                       ): (
                      <span>
                       <Link href="/login" className="text-black uppercase  hover:border-b-4 hover:border-b-yellow-600 cursor-pointer" >Login</Link>
                      </span>
                        )}
                    </div>
                     
                    <div className='pt-[40] mt-6'>
                        <p className=' uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[50%] '>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                             <BsFillPersonLinesFill/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                            <AiOutlineTwitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    
  )
}

export default Navbar