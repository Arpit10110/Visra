'use client'

import BlogCard from '@/Components/BlogCard/BlogCard'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React,{useState} from 'react'
const page = () => {
    // const [Data,SetData]=useState([]);
    const Data=[
        {
            img:"https://docs3x.esimplified.com/docs/1/?p=$$$$$$jEGxCpnaC@@@@@@NPSBED8BOqA==",
            title:"DSC for ICEGATE: Protecting Data and Verifying IGCR Accuracy",
            date:"07-Nov-2024",
            desc:"Indian Customs Electronic Gateway (ICEGATE) is the official platform used by Indian Customs. It simplifies and automates customs processes for easier trade. Recently, it has revolutionized customs operations by providing digital solutions that make processes more efficient."
        },
        {
            img:"https://docs3x.esimplified.com/docs/1/?p=$$$$$$jEGxCpnaC94s@@@@@@g@@@@@@nVRmpA==",
            title:"DSC for ICEGATE: Protecting Data and Verifying IGCR Accuracy",
            date:"07-Nov-2024",
            desc:"Indian Customs Electronic Gateway (ICEGATE) is the official platform used by Indian Customs. It simplifies and automates customs processes for easier trade. Recently, it has revolutionized customs operations by providing digital solutions that make processes more efficient."
        },
        {
            img:"https://docs3x.esimplified.com/docs/1/?p=$$$$$$jEGxCpnaC8ADSLb7j6d9A==",
            title:"DSC for ICEGATE: Protecting Data and Verifying IGCR Accuracy",
            date:"07-Nov-2024",
            desc:"Indian Customs Electronic Gateway (ICEGATE) is the official platform used by Indian Customs. It simplifies and automates customs processes for easier trade. Recently, it has revolutionized customs operations by providing digital solutions that make processes more efficient."
        },
    ]

  return (
    <>
        <Navbar/>
        <div className='flex py-[4rem] justify-center items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500   ' >
            <h1 className='text-[4vw] font-semibold text-white ' >Blogs</h1>
        </div>
        <div className='flex flex-wrap justify-around py-[4rem] hidde-nav:gap-y-[2rem] ' >
            {
                Data.map((i,index)=>{
                    return(
                        <BlogCard key={index} title={i.title} imgurl={i.img} desc={i.desc} date={i.date}  />
                    )
                })
            }
        </div>
        <Footer/>
    </>
  )
}

export default page