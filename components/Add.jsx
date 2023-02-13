import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({setClose}) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [price, setPrice] = useState(null);

    const handleCreate = async ()=>{
        const data = new FormData();
        data.append("file",file)
        data.append("upload_preset", "arthur")
        try{
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/stanarthur/image/upload",data);

            const {url}  = uploadRes.data;
            const newProduct = {
                title,
                desc,
                 price,
                 img: url,
            };
            await axios.post("http://localhost:3000/api/products",newProduct)
            setClose(true)
        }catch(error){
            console.log(error)
        }

    }
  return (
    <div className=' z-[999] absolute top-20 h-[100vh] w-[100vw]  flex justify-center items-center flex-col  text-black  bg-gray-600/60'  >
        <div className=' relative bg-white w-[500px] flex justify-center items-center flex-col gap-y-4 p-[50px] rounded-md'>
        <div className=' flex flex-col gap-y-5'>
            
            <span onClick={()=>setClose(true)} className="absolute top-[-10px]  cursor-pointer flex items-center left-[-10px] px-2 bg-black  text-white rounded-full ">
               <p>X</p>
             </span>
            <h1 className=' text-2xl font-bold'>Add a New Product</h1>
            <div className='flex justify-between items-center'>
             <label htmlFor="" className=''>Choose Image</label>
             <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
            </div>
             
        </div>
        <div className="flex flex-col mb-1 ">
          <label className="">Title</label>
          <input
            className="  border-b focus:outline-none"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-1 ">
          <label className="">Desc</label>
          <textarea
            rows={4}
            className=" border-b focus:outline-none"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-1 ">
          <label className="">price</label>
          <div>
            <input className=" border-b focus:outline-none" type="number" onChange={(e) => setPrice(e.target.value)}/>
          </div>
        </div>
        <button className='w-[200px] py-2 rounded-lg bg-red-400 text-white' onClick={handleCreate}> create</button>
        </div>
    </div>
  )
}

export default Add