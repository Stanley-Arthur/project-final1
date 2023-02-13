import Featured from "@/components/Featured";
import { sendContactForm } from "@/lib/api";
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading,Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const initValues={name:"",email:"", subject:"",message:""}
const initState = {values:initValues}

export default function Contact(){
  const  toast =useToast()
  const [state,setState]=useState(initState)
  const [touched,setTouched]=useState({})

  const {values, isLoading ,error} =state;

  const onBlur = ({target})=>setTouched((prev)=>({...prev,
  [target.name]:true}))
  const handleChange= ({target})=> setState((prev)=>({
    ...prev,
    values:{
      ...prev.values,
      [target.name]:target.value,
    }
  }));

  const onSubmit = async ()=>{
    setState((prev)=>({
      ...prev,
      isLoading: true
    }));
    try{
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title:"Message Sent.",
        status:"success",
        duration:"2000",
        position:"top"
      })

    }catch(error){
      setState((prev)=>({
        ...prev,
        isLoading: false,
        error: error.message,
      }));

    }
  }
  return(
    <div className="flex flex-col ">
      <div>
        <Featured/>
      </div>

  <div className="min-h-screen flex justify-center items-center bg-gray-900">

      <Container className=" mt-20 flex space-y-2 justify-center items-center flex-col ">
      <Heading className="text-white uppercase font-bold "> Contact </Heading>
      {error && (
        <Text className="text-red-300 mt-3 text-xl">{error}</Text>
      )}

      <FormControl  isRequired isInvalid={touched.name && values.name}>
        <FormLabel className="text-white ">Name</FormLabel>
        <Input
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="name" onChange={handleChange} className="border p-3 w-[300px] bg-gray-900 text-white" value={values.name}/>
        <FormErrorMessage className="text-red-300">Required</FormErrorMessage>
      </FormControl>
 
      <FormControl  isRequired isInvalid={touched.email && values.email}>
        <FormLabel className="text-white">Email</FormLabel>
        <Input
        type="email"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="email" onChange={handleChange} className="border p-3 w-[300px] bg-gray-900 text-white" value={values.email}/>
        <FormErrorMessage className="text-red-300">Required</FormErrorMessage>
      </FormControl>

      <FormControl  isRequired isInvalid={touched.subject && values.subject}>
        <FormLabel className="text-white">Subject</FormLabel>
        <Input
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        name="subject" onChange={handleChange} className="border p-3 w-[300px]  bg-gray-900 text-white" value={values.subject}/>
        <FormErrorMessage className="text-red-300">Required</FormErrorMessage>
      </FormControl>

      <FormControl  isRequired isInvalid={touched.message && values.message}>
        <FormLabel className="text-white">Message</FormLabel>
        <Textarea
        type="text"
        errorBorderColor="red.300"
        onBlur={onBlur}
        rows={4}
        name="message" onChange={handleChange} className="border  p-3 w-[300px] bg-gray-900 text-white" value={values.message}/>
        <FormErrorMessage className="text-red-300">Required</FormErrorMessage>
      </FormControl>
      <Button  className="border w-[100px] text-white font-bold p-2 rounded-lg " onClick ={onSubmit} isLoading={isLoading}
       disabled={!values.name|| !values.email || !values.subject || !values.message}
      >
        Submit
      </Button>
      
      </Container>
  </div>
    </div>
  )
} 

 

























 // import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted: ", formData);
//   };

//   return (
//     <form className="p-6 bg-white pt-20 rounded-lg shadow-md" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 font-medium mb-2"
//           htmlFor="name"
//         >
//           Name
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 font-medium mb-2"
//           htmlFor="email"
//         >
//           Email
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 font-medium mb-2"
//           htmlFor="message"
//         >
//           Message
//         </label>
//         <textarea
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="message"
//           name="message"
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button
//         className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Contact;

















































// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.location.href = `mailto:sammyanim01@outlook.com?subject=${formData.subject}&body=${formData.name},${formData.message},${formData.email}`;
//   };

//   return (
//     <div className=" flex items-center bg-gray-900 justify-center" >
//        <div className="mt-24 mb-10 pt flex flex-col  bg-white w-96  rounded-lg shadow-md justify-center items-center" >
        
//             <h1>Contact Us</h1>

//             <form className="p-4 pt-10" onSubmit={handleSubmit}>
//             <div className="mb-4">
//                 <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="name"
//                 >
//                 Name
//                 </label>
//                 <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="email"
//                 >
//                 Email
//                 </label>
//                 <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="message"
//                 >
//                 Message
//                 </label>
//                 <textarea
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             <button
//                 className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//             >
//                 Submit
//             </button>
//             </form>
//        </div>
//     </div>
//   );
// };

// export default Contact;
