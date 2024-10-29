'use client'
import { useState } from "react";
import axios from "axios"
const IndidvidualForm = ({cart,fullcart}) => {
    const [Name,SetName] = useState("");
    const [Email,SetEmail] =useState("");
    const [Phone,SetPhone] = useState("");
    const [Address,SetAddress] = useState("");
    const [Landmark,SetLandmark] = useState("");
    const [City,SetCity] = useState("");
    const [State,SetState] = useState("");
    const [PostalCode,SetPostalCode] = useState("");

    const SubmitForm = async(e)=>{
        e.preventDefault();
        const sendaddres = Landmark + "," + Address + ","+ City + ","+State+"," + PostalCode 
        try {
            const {data} = await axios.post("/api/addindividual",{
                name:Name,
                phone:Phone,
                email:Email,
                address:sendaddres,
                cart:fullcart
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <>
        <form onSubmit={SubmitForm} className="flex justify-between m-auto w-[90%] pt-[3rem] pb-[5rem] "   >
            <div className=' w-[50%] rounded-[5px] overflow-hidden '>
                <h1 className='bg-blue-500 text-white p-[0.2rem] ' >Personal & Address Details</h1>
                <div className='w-full p-[1rem] bg-gray-100 pt-[1rem]  flex flex-col gap-[1rem]  ' >
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
                <h3>Name</h3>
                <input onChange={(e)=>SetName(e.target.value)} value={Name}   className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required />
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
                <h3>Email ID</h3>
                <input onChange={(e)=>SetEmail(e.target.value)} value={Email} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="email" required/>
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
                <h3>Phone Number</h3>
                <input onChange={(e)=>SetPhone(e.target.value)} value={Phone} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required />
                </div>
                <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
                <h3>Address</h3>
                <textarea onChange={(e)=>SetAddress(e.target.value)} value={Address} className='w-[100%] min-h-[20vh] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                </div>
                    <div className='text-[1.2rem] flex  gap-[0.2rem] w-full justify-between ' >
                        <div className='w-[48%]' >
                        <h3>Landmark</h3>
                        <input onChange={(e)=>SetLandmark(e.target.value)} value={Landmark} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required/>
                        </div>
                        <div className='w-[48%]' >
                        <h3>Postal Code</h3>
                        <input onChange={(e)=>SetPostalCode(e.target.value)} value={PostalCode}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                        </div>
                    </div>
                    <div className='text-[1.2rem] flex  gap-[0.2rem]  w-full justify-between '>
                        <div className='w-[48%]'>
                        <h3>City</h3>
                        <input onChange={(e)=>SetCity(e.target.value)} value={City} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                        </div>
                        <div className='w-[48%]'>
                        <h3>State</h3>
                        <input onChange={(e)=>SetState(e.target.value)} value={State} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
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
