import React from "react";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className=" p-3 m-5 bg-red-600 rounded-md text-white text-center font-bold text-xl cursor-pointer">
      Add New product
    </div>
  );
};

export default AddButton; 