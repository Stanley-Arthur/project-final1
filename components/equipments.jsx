import React from 'react'
import EquipList from './EquipList'

const Equipments =({equipment}) => {
  console.log(equipment) 
  
  return (
    <div className='flex justify-center items-center flex-col font-[poppins] '>
       <div className='flex justify-center pl-10 w-[90%] md:w-[50%] my-24 space-y-4 flex-col items-center'>
          
          <div className='flex flex-col items-center  text-2xl '>
            <p>SmartSoft Business Solutions has a proven track record over  <span className='text-violet-900 font-bold'>10 years</span>, we deliver <span className='text-violet-900 font-bold'>reliable</span>, <span className='text-violet-900 font-bold'>well designed</span>, and <span className='text-violet-900 font-bold'>cost effective</span> business technology, communications and support</p>
          </div>
        </div>
    <div></div>

    <div className=' max-w-[90%] mx-[5%] items-center md:space-x-4 gap-y-10 gap-x-10 grid md:grid-cols-2 lg:grid-cols-3     '>
       { equipment.map(item=>(
        <div  key={item._id}>
          <EquipList  item ={item}/>
        </div>
         ))}


    </div>
  </div>
     
  )
}
export default Equipments