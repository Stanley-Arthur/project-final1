import React from 'react'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMobile,AiOutlineClockCircle} from 'react-icons/ai'



const Banner = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center flex-grow  gap-6 bg-white max-w-7xl px-20 mx-auto h-32'>
          
            <div className='flex '>

                <div className='text-black flex gap-2  justify-center items-center'>
                    <div>
                    <AiOutlineClockCircle size={25}/>
                    </div>
                
                    <div className='flex-col '>
                        <p>8:30am - 5:00pm</p>
                        <p className='text-black/30'>Monday - Friday</p>
                    </div>
                </div>
                <div className='text-black flex gap-2 ml-8 justify-center items-center'>
                    <div>
                    <GoLocation size={25}/>
                    </div>  
                    <div className='flex-col'>
                        <p>St.Johns,Achimota</p>
                        <p className='text-black/30'>On the Ecobank Building</p>
                    </div>
                </div>
                <div className='text-black flex gap-2 ml-8 justify-center items-center'>
                    <div>
                    <AiOutlineMobile size={25}/>
                    </div>
                    <div className='flex-col'>
                        <p>678-554-8811</p>
                        <p className='text-black/30'>sampsonanim@ultimateitsolutions.com</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner