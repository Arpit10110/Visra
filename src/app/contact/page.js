"use client"

import Navbar from '@/Components/Navbar/Navbar'
import React,{useState} from 'react'
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from '@/Components/Footer/Footer';
const page = () => {
    const [state, handleSubmit] = useForm("mbljrvae");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    }
  return (
   <>
   <Navbar/>
   <div className="flex justify-center pt-[5rem] w-full pb-[10rem]">
            <form className=" w-[50%] bg-gray-400 rounded-md p-[2rem] below-sm:w-[95%] below-sm:p-[1rem] flex flex-col gap-[1rem] items-center "   id='myForm' onSubmit={handleSubmit}>
                <div className=" flex gap-[2rem] w-full  ">
                    <input className='w-[50%] p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='FirstName' placeholder='First Name' required/>
                    <input className='w-[50%] p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='LastName' placeholder='Last Name' required />
                </div>
                <div className=" flex gap-[2rem] w-full  ">
                    <input className='w-[50%] p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='Email' placeholder='Email address' required/>
                    <input className='w-[50%] p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='Phone' placeholder='Phone number'  required/>
                </div>
                <div className="w-full ">
                    <input className='w-full h-[25vh] text-center p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='Message' placeholder='Message'  required/>
                </div>
                <button className='bg-primary-blue p-[0.4rem] text-[1.1rem] font-semibold text-white rounded-[1rem] cursor-pointer border-none ' >Send Messgae</button>
            </form>
   </div>
   <Footer/>
   <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
   </>
  )
}

export default page
