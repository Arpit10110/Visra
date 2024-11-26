import { NextResponse } from "next/server"
import Razorpay from "razorpay"

const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RazarPay_key_id,
    key_secret: process.env.NEXT_PUBLIC_RazarPay_key_secret,
  });
export const POST = async(req)=>{
        const {amount} =await req.json();
        console.log(amount);
        const options = {
            amount: Number(amount * 100), // amount in the smallest currency unit
            currency: "INR",
          };
          const order = await instance.orders.create(options);
          return(
              NextResponse.json({
                success: true,
                order
              })
          )
   
  
}