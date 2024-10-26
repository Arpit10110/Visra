import React from 'react'

const IndidvidualForm = ({cart}) => {
  return (
    <>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }} className="flex justify-between m-auto w-[90%] pt-[3rem] pb-[5rem] "   >
            <div className=' w-[50%] rounded-[5px] overflow-hidden '>
                <h1 className='bg-blue-500 text-white p-[0.2rem] ' >Personal & Address Details</h1>
                <div className='w-full p-[1rem] bg-gray-100 pt-[1rem]  flex flex-col gap-[1rem]  ' >
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
                <h3>Name</h3>
                <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required />
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
                <h3>Email ID</h3>
                <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="email" required/>
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
                <h3>Phone Number</h3>
                <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required />
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
                <h3>Address</h3>
                <textarea className='w-[100%] min-h-[20vh] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                </div>
                    <div className='text-[1.2rem] flex  gap-[0.2rem] w-full justify-between ' >
                        <div className='w-[48%]' >
                        <h3>Landmark</h3>
                        <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required/>
                        </div>
                        <div className='w-[48%]' >
                        <h3>Postal Code</h3>
                        <input  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                        </div>
                    </div>
                    <div className='text-[1.2rem] flex  gap-[0.2rem]  w-full justify-between '>
                        <div className='w-[48%]'>
                        <h3>City</h3>
                        <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                        </div>
                        <div className='w-[48%]'>
                        <h3>State</h3>
                        <input className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[30%] flex flex-col gap-[1rem] ' >
                <div className='border-[1px] border-gray-600 w-full rounded-[5px] overflow-hidden bg-gray-50 ' >
                    <h2 className='p-[0.2rem] text-[1.3rem] bg-[#DFF1F8] ' >Payment Summary</h2>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600   ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600  ' >Digital Signature (DSC)</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center '>₹{cart.DSC_Price}</h2>
                    </div>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600 ' >Digital Signature (DSC)</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹{cart.DSC_Price}</h2>
                    </div>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600 ' >GST (18%)</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center '>₹{cart.Gst}</h2>
                    </div>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem] font-semibold  border-r-[1px] border-gray-600 ' >Payable Amount</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹{cart.Total_Amount}</h2>
                    </div>
                </div>
                <button type='submit' className='bg-blue-500 text-white text-[1.2rem] p-[0.3rem] rounded-[5px] ' >Pay Now</button>
            </div>
        </form>
    </>
  )
}

export default IndidvidualForm
