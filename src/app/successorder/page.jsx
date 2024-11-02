import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Link from 'next/link'
import Footer from '@/Components/Footer/Footer'
const page = () => {
  return (
   <>
   <Navbar/>
   <div className='mb-[8rem] w-full min-h-[60vh] items-center justify-center flex flex-col gap-[2rem]' >
        <h2 className='text-green-800 text-[3rem]  ' >🎉🎉Order Has Been Placed Successfully🎉🎉</h2>
       <Link className='p-[0.5rem] px-[1rem]  text-[1.3rem] bg-red-600 text-white rounded-[1rem] ' href={"/"}>Go Back To Home Page</Link>
   </div>
   <Footer/>
   </>
  )
}

export default page
