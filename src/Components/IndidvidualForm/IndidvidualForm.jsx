'use client'
import { useState,useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import ImageUpload from "../ImageUpload/ImageUpload";

const IndidvidualForm = ({cart,fullcart,backloader}) => {
    const router=useRouter();
    const [Name,SetName] = useState("");
    const [Email,SetEmail] =useState("");
    const [Phone,SetPhone] = useState("");
    const [Address,SetAddress] = useState("");
    const [Landmark,SetLandmark] = useState("");
    const [City,SetCity] = useState("");
    const [State,SetState] = useState("");
    const [PostalCode,SetPostalCode] = useState("");
    const [TotalAmount,SetTotalAmount] = useState(0);
    const [AdharImg,SetAdharImg] = useState("NA");
    const [PanImg,SetPanImg] = useState("NA");
    const [OtherImg,SetOtherImg] = useState("NA");

    const SubmitForm = async(paymentid)=>{
        const sendaddres = Landmark + "," + Address + ","+ City + ","+State+"," + PostalCode;
        try {
            const {data} = await axios.post("/api/addindividual",{
                name:Name,
                phone:Phone,
                email:Email,
                address:sendaddres,
                cart:fullcart,
                paymentid:paymentid,
                adharimg:AdharImg,
                panimg:PanImg,
                otherimg:OtherImg
            });
            console.log(data);
            sendnotifation();
        } catch (error) {
            console.log(error)
        }
    }
    const createpayment = async(e)=>{
        e.preventDefault();
        const amount = TotalAmount;
        const {data:{order}}= await axios.post("/api/createpayment",{
            amount
          })
          const options = {
            key: process.env.NEXT_PUBLIC_RazarPay_key_id, 
            amount: order.amount,  
            currency: "INR",
            name: "Visra",
            description: "Test Transaction",
            image: "https://visra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.967247f3.png&w=3840&q=75",
            order_id: order.id, 
            handler: async function (response){
               try {
                    const {data} = await axios.post("/api/paymentverification",{
                        razorpay_payment_id:response.razorpay_payment_id,
                        razorpay_order_id:response.razorpay_order_id,
                        razorpay_signature:response.razorpay_signature
                    }) 
                    if(data.success == true){
                        backloader(true);
                        SubmitForm(data.paymentId)
                    }
               } catch (error) {
                console.log(error)
               }
            },
            prefill: {
                name: Name,
                email: Email,
                contact: Phone
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        
    }

    const sendnotifation = async()=>{
        try {
            const data = await axios.post("https://formspree.io/f/mbljrvae",{
                name:Name,
                phone:Phone,
                email:Email,
                message:`New Order placed successfully by ${Name}`
            })
        backloader(false);
            router.push("/successorder")
        } catch (error) {
            console.log(error)
        }
    }

    const setAdharimage = (url)=>{
        SetAdharImg(url);
    }
    const setPanimage = (url)=>{
        SetPanImg(url);
    }

    const setOtherimage = (url)=>{
        SetOtherImg(url);
    }

    useEffect(() => {
        let tt=cart.Total_Amount;
        if(fullcart[0].token== true){
         tt= 423.72+tt;
        }
        if(fullcart[0].assistance == true){
        tt= 338.98+tt;
        }
        let x= tt.toFixed(1)
        SetTotalAmount(x);
  }, [])

    return (
    <>
        <form onSubmit={createpayment} className="flex justify-between m-auto w-[95%] pt-[3rem] pb-[5rem] below-sm:w-[100%] below-sm:items-center below-sm:gap-[3rem] below-sm:flex-col below-tab:w-[99%]  "   >
            <div className=' w-[50%] rounded-[5px] overflow-hidden below-sm:w-[95%] below-tab:w-[63%]  '>
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
                    <div className="flex justify-between items-center w-[45%]"  >
                        <h2>Upload Adhar Card :-</h2>
                        {
                            AdharImg==="NA"?<ImageUpload subAdhar={setAdharimage} required/>:
                            <h1 className=" rounded-md border-[1px] border-green-600 px-[1rem] py-[0.5rem] bg-green-600 text-white " >Image Uploaded</h1>
                        }
                    </div>
                    <div className="flex justify-between items-center w-[45%]">
                        <h2 >Upload Pan Card :-</h2>
                        {
                            PanImg==="NA"?<ImageUpload subAdhar={setPanimage} required/>:
                            <h1 className=" rounded-md border-[1px] border-green-600 px-[1rem] py-[0.5rem] bg-green-600 text-white " >Image Uploaded</h1>
                        }
                    </div>
                    <div className="flex justify-between items-center w-[45%]">
                        <h2 >Upload Others:-</h2>
                        {
                            OtherImg==="NA"?<ImageUpload subAdhar={setOtherimage} />:
                            <h1 className=" rounded-md border-[1px] border-green-600 px-[1rem] py-[0.5rem] bg-green-600 text-white " >Image Uploaded</h1>
                        }
                    </div>
                    
                </div>
            </div>
            <div className='w-[40%] flex flex-col gap-[1rem] below-sm:w-[95%] below-tab:w-[35%] ' >
                <div className='border-[1px] border-gray-600 w-full rounded-[5px] overflow-hidden bg-gray-50 ' >
                    <h2 className='p-[0.2rem] text-[1.3rem] bg-[#DFF1F8] ' >Payment Summary</h2>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600   ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600  ' >Digital Signature (DSC)</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center '>₹{cart.DSC_Price}</h2>
                    </div>
                    {
                    fullcart[0].token ? 
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600 ' >USB Token Price</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹423.72</h2>
                    </div>: <></>
                }
                {
                    fullcart[0].assistance == true ? 
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600 ' >Assistance Price</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹338.98</h2>
                    </div>: <></>
                }
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem]  border-r-[1px] border-gray-600 ' >GST (18%)</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center '>₹{cart.Gst}</h2>
                    </div>
                    <div className='flex w-full justify-between  border-t-[1px]  border-gray-600  ' >
                        <h2 className='w-[70%] p-[0.3rem] text-[1.1rem] font-semibold  border-r-[1px] border-gray-600 ' >Payable Amount</h2>
                        <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹{TotalAmount}</h2>
                    </div>
                </div>
                <button type='submit' className='bg-blue-500 text-white text-[1.2rem] p-[0.3rem] rounded-[5px] ' >Pay Now</button>
            </div>
        </form>
    </>
  )
}

export default IndidvidualForm
