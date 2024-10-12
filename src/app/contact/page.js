"use client"

import Navbar from '@/Components/Navbar/Navbar'
import React,{useState} from 'react'
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from '@/Components/Footer/Footer';
//img
import  instagram from "@/assets/instagram.png"
import  facebook from "@/assets/facebook.png"
import  linkedin from "@/assets/linkedin.png"
import  twitter from "@/assets/twitter.png"
import  contactUs from "@/assets/contact-us-banner.png"
import Image from "next/image";
const page = () => {
    const [state, handleSubmit] = useForm("mbljrvae");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    }
  return (
   <>
   <Navbar/>
   <div className="pb-[10rem]">
    <div className='w-full' >
        <Image className='w-full' src={contactUs} alt="ContactUs"  />
    </div>
    <div className='below-sm:w-[90%] below-sm:top-0 below-sm:p-0    w-[50%] flex flex-col justify-center items-center gap-[1rem] m-auto bg-white relative top-[-5rem] rounded-[1rem] p-[2rem]' >
        <div className='flex w-[100%] items-center  justify-between below-sm:w-full gap-[2rem] below-sm:pl-[1rem] ' >
            <div className='w-[50%] text-[2rem] below-sm:text-[1.3rem] ' >
                <h2 className='font-semibold' >Love to hear from you, Get in touch👋</h2>
            </div>
            <div className='w-[50%] text-[1.5rem] gap-[1rem] flex flex-col below-sm:text-[1.2rem]' >
                <h2 className='font-semibold' >Follow Our Social Media</h2>
                <div className='w-[100%] flex gap-[1rem] ' >
                    <Image className='w-[10%]  ' src={instagram} alt="Instagram"  />
                    <Image className='w-[10%]  ' src={facebook} alt="facebook"  />
                    <Image className='w-[10%]  ' src={linkedin} alt="linkedin"  />
                    <Image className='w-[10%]  ' src={twitter} alt="twitter"  />
                </div>
            </div>
        </div>
        <div className='w-full ' >
            <form className=" w-[100%]   rounded-md  below-sm:w-[95%] below-sm:p-[1rem] flex flex-col gap-[1rem] items-start "   id='myForm' onSubmit={handleSubmit}>
                <div className=" flex gap-[2rem] w-full  ">
                    <div className='w-[50%]' >
                    <h2>First Name</h2>
                    <input className='bg-gray-50  w-full p-[0.4rem] text-[1.2rem] rounded-[10px] ' type="text" name='FirstName' required/>
                    </div>
                    <div className='w-[50%]' >
                        <h2>Last Name</h2>
                    <input className='bg-gray-50 w-full p-[0.4rem] text-[1.2rem] rounded-[10px] ' type="text" name='LastName'  required />
                    </div>
                </div>
                <div className=" flex gap-[2rem] w-full  ">
                <div className='w-[50%]' >
                        <h2>Your Email</h2>
                        <input className='bg-gray-50 w-full p-[0.4rem] text-[1.2rem] rounded-[10px] ' type="text" name='Email' required/>
                    </div>
                    <div className='w-[50%]' >
                        <h2>Your Phone no.</h2>
                    <input className='bg-gray-50 w-full p-[0.4rem] text-[1.2rem] rounded-[10px] ' type="text" name='Phone'  required/>
                    </div>
                </div>
                <div className="w-full ">
                    <h2>Message</h2>
                    <input className='bg-gray-50 w-full h-[30vh] text-center p-[0.2rem] text-[1.2rem] rounded-[10px] ' type="text" name='Message'   required/>
                </div>
                <button className='bg-gray-800 p-[0.6rem] w-fit p-l-[1rem] pr-[1rem] text-center text-[1.1rem] font-semibold text-white  cursor-pointer border-none ' >Send Messgae</button>
            </form>
        </div>
    </div>
   </div>
   <Footer/>
   <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
   </>
  )
}

export default page
