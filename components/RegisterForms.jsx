import React, { useState } from "react";
import Link from "next/link";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


function RegisterForms() {
    const [open, setOpen] =useState(false)
     
    const  handleClick =()=>{
        setOpen(!open)
    }
   
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { fullName, email, password, confirmPassword } = data;

    if (
      fullName == "" &&
      email == "" &&
      password == "" &&
      confirmPassword == ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center pl-3 mt-10 flex-col rounded-lg shadow-md  h-full bg-white">
      <div className="form max-w-sm mx-auto w-96  flex flex-col items-center justify-center">
        <h1 className="font-semibold pb-3 text-2xl text-left uppercase">Create an account</h1>
        {error && (
          <h3 className="pb-6 text-left text-md text-red-700 font-bold">{error}</h3>
        )}
        <form id="form" className="text-left text-md" onSubmit={handleSubmit}>
          <div className="grid gap-4 ">
            <div className="input-group flex items-center border p-3 w-[300px] relative">
              <FaRegUserCircle  className="input-icons text-gray-400" />
              {/* <label>Full Name</label> */}
              <input type='text' id="fullName" name="fullName" value={data.fullName} onChange ={handleChange} placeholder="Full Name"  className="w-full h-full focus:outline-none pl-3  form-input login-inp  " />
            </div>
            <div className="input-group flex items-center border p-3 w-[300px] relative">
              <IoMailOutline className="input-icons text-gray-400" />
              {/* <label>Email</label> */}
              <input  type="email" placeholder="Email" id="email" name="email" value={data.email} onChange ={handleChange} className="w-full h-full focus:outline-none pl-3  form-input login-inp" />
            </div>
            <div className="input-group relative flex items-center border p-3 w-[300px]">
              <RiLockPasswordLine className="input-icons  text-gray-400" />
              {/* <label>Password</label> */}
              <input type={(open === false)? "password": "text"} placeholder="Password" name="password" id="password"value={data.password} onChange ={handleChange} className="w-full h-full focus:outline-none pl-3  form-input login-inp " />
              {(open === false)?<AiFillEye onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />:<AiFillEyeInvisible onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />}
            </div>
            <div className="input-group relative flex items-center border p-3 w-[300px]">
              <RiLockPasswordLine className="input-icons  text-gray-400" />
              {/* <label>Password</label> */}
              <input type={(open === false)? "password": "text"}  placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" value={data.confrimPassword} onChange ={handleChange} className="w-full h-full focus:outline-none pl-3  form-input login-inp " />
              {(open === false)? <AiFillEye onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />:<AiFillEyeInvisible onClick={handleClick} className="absolute right-2 top-[50%] translate-y-[-50%]" />}
            </div>
            <div className="submit-btn flex flex-col justify-center items-center mt-5">
              <button className="bg-gray-900 w-[300px] p-3 text-white rounded-lg">Create account</button>
            </div>
            <div className="text-center text-grey-400 mt-4 ">
              <h1>
                Already have an account?{" "}
                <Link href="/login" legacyBehavior>
                  <a>
                    <span className="text-indigo-500">sign in</span>
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForms;