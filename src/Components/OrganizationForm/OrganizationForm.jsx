'use client'
import { useState,useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
//material ui
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ImageUpload from "../ImageUpload/ImageUpload";


const OrganizationForm = ({cart,fullcart}) => {
    const router=useRouter();
    const [Name,SetName] = useState("");
    const [Email,SetEmail] =useState("");
    const [Phone,SetPhone] = useState("");
    const [Address,SetAddress] = useState("");
    const [Landmark,SetLandmark] = useState("");
    const [City,SetCity] = useState("");
    const [State,SetState] = useState("");
    const [PostalCode,SetPostalCode] = useState("");
    const [Orgname,SetOrgname] = useState("");
    const [Orgtype,SetOrgtype] = useState("");
    const [Gstno,SetGstno] = useState("");
    const [departname,Setdepartname] = useState("");
    const [TotalAmount,SetTotalAmount] = useState(0);

    const handleChange = (event) => {
        SetOrgtype(event.target.value);
      };
    
    
    const SubmitForm = async(paymentid)=>{
        const sendaddres = Landmark + "," + Address + ","+ City + ","+State+"," + PostalCode 
        let gstno ;
        if(Gstno == ""){
            gstno="N/A";
        }else{
            gstno=Gstno;
        }
        try {
            const {data} = await axios.post("/api/addoraganization",{
                name:Name,
                phone:Phone,
                email:Email,
                address:sendaddres,
                cart:fullcart,
                paymentid:paymentid,
                orgname:Orgname,
                orgtype:Orgtype,
                departname:departname,
                gstno:gstno
            });
            console.log(data);
            sendnotifation();
        } catch (error) {
            console.log(error)
        }
    }
    
    const createpayment = async(e)=>{
        e.preventDefault();
        const amount = TotalAmount
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
                    console.log(data);
                    if(data.success == true){
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
            router.push("/successorder")
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
        let tt=cart.Total_Amount;
        if(fullcart[0].token== true){
         tt= 423.72+tt;
        }
        if(fullcart[0].assistance == true){
        tt= 338.98+tt;
        }
        SetTotalAmount(tt);
        if( fullcart[0].profile==="Government"){
            SetOrgtype("Government");
        }
  }, [])
  return (
    <>
    <form onSubmit={createpayment} className="flex justify-between m-auto w-[95%] pt-[3rem] pb-[5rem] below-sm:w-[100%] below-sm:items-center below-sm:gap-[3rem] below-sm:flex-col below-tab:w-[99%] "  >
        <div className=' w-[50%] rounded-[5px] overflow-hidden below-sm:w-[95%] below-tab:w-[63%] '>
            <h1 className='bg-blue-500 text-white p-[0.2rem] ' >Personal & Address Details</h1>
            <div className='w-full p-[1rem] bg-gray-100 pt-[1rem]  flex flex-col gap-[1rem]  ' >
            <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
            <h3>Name</h3>
            <input value={Name} onChange={(e)=>SetName(e.target.value)} className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required />
            </div>
            <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  ' >
            <h3>Email ID</h3>
            <input value={Email} onChange={(e)=>SetEmail(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="email" required/>
            </div>
            <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
            <h3>Phone Number</h3>
            <input value={Phone} onChange={(e)=>SetPhone(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required />
            </div>

            <div className='text-[1.2rem] flex  gap-[0.2rem]  w-full justify-between '>
                    <div className='w-[48%]'>
                    <h3>Organization name</h3>
                    <input value={Orgname} onChange={(e)=>SetOrgname(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                    </div>
                    <div className='w-[48%]'>
                    <h3>Department  name</h3>
                    <input value={departname} onChange={(e)=>Setdepartname(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                    </div>
                </div>

            <div className='text-[1.2rem] flex  gap-[0.2rem]  w-full justify-between '>
                    <div className='w-[48%]'>
                    <h3>Organization type</h3>
                    {
                        fullcart[0].profile==="Government"?
                        <Select className="w-full bg-white !p-[0.5rem] !text-[1.1rem] "  value={Orgtype} onChange={handleChange}>
                        <MenuItem value={"Government"}>Government</MenuItem>
                     </Select>:
                    <Select className="w-full bg-white !p-[0.5rem] !text-[1.1rem] "  value={Orgtype} onChange={handleChange}>
                        <MenuItem value={"Proprietorship"}>Proprietorship</MenuItem>
                        <MenuItem value={"Partnership"}>Partnership</MenuItem>
                        <MenuItem value={"Limited Liability Partnership (LLP)"}>Limited Liability Partnership (LLP)</MenuItem>
                        <MenuItem value={"Corporate Entities"}>Corporate Entities</MenuItem>
                        <MenuItem value={"Trust/NGO"}>Trust/NGO</MenuItem>
                        <MenuItem value={"Public Sector Undertaking (PSU)"}>Public Sector Undertaking (PSU)</MenuItem>
                     </Select>
                    }
                    </div>
                    <div className='w-[48%]'>
                    <h3>Gst number(optional)</h3>
                    <input value={Gstno} onChange={(e)=>SetGstno(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text"/>
                    </div>
                </div>
            <div className='text-[1.2rem] flex flex-col gap-[0.2rem]  '>
            <h3>Address</h3>
            <textarea value={Address} onChange={(e)=>SetAddress(e.target.value)}  className='w-[100%] min-h-[20vh] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
            </div>
                <div className='text-[1.2rem] flex  gap-[0.2rem] w-full justify-between ' >
                    <div className='w-[48%]' >
                    <h3>Landmark</h3>
                    <input value={Landmark} onChange={(e)=>SetLandmark(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] '  type="text" required/>
                    </div>
                    <div className='w-[48%]' >
                    <h3>Postal Code</h3>
                    <input value={PostalCode} onChange={(e)=>SetPostalCode(e.target.value)}   className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                    </div>
                </div>
                <div className='text-[1.2rem] flex  gap-[0.2rem]  w-full justify-between '>
                    <div className='w-[48%]'>
                    <h3>City</h3>
                    <input value={City} onChange={(e)=>SetCity(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                    </div>
                    <div className='w-[48%]'>
                    <h3>State</h3>
                    <input value={State} onChange={(e)=>SetState(e.target.value)}  className='w-[100%] p-[0.3rem] text-[1.2rem]  border-[1px]  border-black rounded-[0.3rem] ' type="text" required/>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[45%]"  >
                        <h2>Upload Adhar Card :-</h2><ImageUpload/>
                    </div>
                    <div className="flex justify-between items-center w-[45%]">
                        <h2 >Upload Pan Card :-</h2><ImageUpload/>
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
                    <h2 className='w-[30%] p-[0.3rem] text-[1.1rem] text-center  '>₹{TotalAmount}</h2>
                </div>
            </div>
            <button type='submit' className='bg-blue-500 text-white text-[1.2rem] p-[0.3rem] rounded-[5px] ' >Pay Now</button>
        </div>
    </form>
</>
  )
}

export default OrganizationForm
