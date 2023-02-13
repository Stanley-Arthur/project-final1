import React from "react";
import RegisterForms from "../components/RegisterForms";


function Register() {
  return (
      <div className="flex items-center justify-center w-full bg-gray-100 h-screen ">
        <div className="mx-auto grid md:grid-cols-2 gap-2  form-bg p-10 rounded-2xl">
          {/* //Input Forms on the left side of the screen */}
          <RegisterForms />
        </div>
        
      </div>

  );
}

export default Register;