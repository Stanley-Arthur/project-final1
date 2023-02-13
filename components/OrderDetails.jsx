import React, { useState } from 'react'

const OrderDetails = ({total, createOrder}) => {
    const [customer, setCustomer] =useState("")
    const [address, setAddress] =useState("")
    const handleClick =()=>{
      createOrder({customer,address,total,method:0})
    }
  return (
    <div className='flex justify-center  items-center w-72 h-58  md:w-full md:h-screen   bottom-20 bg-black/20 z-50 absolute md:top-0 md:left-20 '>
        <div className='md:w-[500px] w-[300px] bg-white rounded-lg z-50  flex flex-col p-[30px] items-center justify-center'>
            <h1 className='font-bold'>You will pay $50.99 after delivery</h1>
            <div className='flex flex-col w-full mb-[15px]'>
              <label className='mb-[10px]' htmlFor="Name">Name Surname</label>
              <input   onChange={(event)=>setCustomer(event.target.value)} placeholder='Stanley Arthur' className=' h-[40px] border focus:outline-none' type="text"  />
            </div>
            <div className='flex flex-col w-full mb-[15px]'>
            <label htmlFor="Phone Number" className='mb-[10px]'>Phone Number</label>
              <input type="text" placeholder='0547082558' className=' border focus:outline-none h-[40px]'/>
            </div>
            <div className='flex flex-col w-full mb-[15px]'>
              <label className='mb-[10px]' htmlFor="Address">Address</label>
              <textarea rows={5}  onChange={(event)=>setAddress(event.target.value)} placeholder='Achimota 3rd street' className='border focus:outline-none' type="text"  />
            </div>
            <button className='bg-teal-600  text-white  font-bold text-[10px] cursor-pointer   px-10 py-3 rounded-lg' onClick={handleClick}>Order</button>
        </div> 
    </div>
  )
}

export default OrderDetails