import React from 'react'
const BlogCard = ({title, imgurl, desc ,date }) => {
  return (
    <>
        <div className='w-[30%] flex flex-col gap-[1rem] p-[1rem]  bg-gray-100 rounded-[0.5rem] hidde-nav:w-[45%]  below-sm:w-[90%] ' >
            <img className='w-full object-cover'  src={imgurl} />
            <h2 className='text-blue-500 font-semibold text-[1.2rem] ' >{date}</h2>
            <h1 className=' font-bold text-[1.4rem] '>{title}</h1>
            <p  className='text-gray-700'>
                {desc}
            </p>
        </div>
    </>
  )
}

export default BlogCard