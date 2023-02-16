import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { RiLockPasswordLine } from "react-icons/ri"
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";
import Cookies from "js-cookie";

const Login = () => {
  const [open, setOpen] =useState(false)  
  const  handleClick =()=>{
      setOpen(!open)
  }

  
  const [data, setData] = useState({email: "", password: "",});
  const [error, setError] = useState("")
  const router = useRouter()
  
 
  

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Cookies.set('loggedin', "true")
    const result = await signIn("credentials", {
        //...data,
        redirect: false,
        email: data.email,
        password: data.password,
      });
    

    localStorage.setItem("result",JSON.stringify(result))

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/contact")
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 justify-center items-center">
        
      <div className=" shadow-md flex flex-col justify-center bg-white items-center w-96 h-96 rounded-lg ">
            <div className="uppercase font-sans font-bold mb-2">
              <h1>login</h1>
            </div>
        <form id="form" className=" space-y-3" onSubmit={handleSubmit} >
          {error && <p>{error}</p>}
          <div className="input-group flex items-center border p-3 w-[300px] relative">
                <IoMailOpenOutline  className="input-icons text-gray-400" />
                {/* <label>Full Name</label> */}
                <input type='email' id="email" name="email" value={data.email} onChange ={handleChange} placeholder="email"  className="w-full h-full focus:outline-none pl-3  form-input login-inp  " />
          </div>
          <div className="input-group relative flex items-center border p-3 w-[300px]">
                <RiLockPasswordLine className="input-icons  text-gray-400" />
                {/* <label>Password</label> */}
                <input type={(open === false)? "password": "text"} placeholder="Password" name="password" id="password"value={data.password} onChange ={handleChange} className="w-full h-full focus:outline-none pl-3  form-input login-inp " />
                {(open === false)?<AiFillEye onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />:<AiFillEyeInvisible onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />}
          </div>
         
          <div className="flex flex-col">
            <button  className="border p-5 rounded bg-gray-900 text-white font-semibold" >Login</button>
          </div>
          <div className="text-center text-grey-400 text-sm mt-4 ">
            <h1 className="">
              Don't have an account?{" "}
              <Link href="/register" legacyBehavior>
                <a>
                <span className="text-indigo-500">Sign up</span>
                </a>
              </Link>
            </h1>
          </div>
        </form>
      </div>
        
    </div>
  );
};

export default dynamic (()=> Promise.resolve(Login),{ssr:false})
