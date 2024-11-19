import connectdb from "@/dataBase";
import VisraOrderModel from "@/Model/IndividualSchema";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    try {
        await connectdb();
        const {name,phone,email,address,cart,paymentid,adharimg,panimg,otherimg} =await req.json();
        let tt=cart[0].price.Total_Amount;
        if(cart[0].token== true){
            tt= 423.72+tt;
           }
           if(cart[0].assistance == true){
           tt= 338.98+tt;
           }
           console.log("this is the value of:-",tt);
        const userinfo = {
            name:name,
            phone:phone,
            email:email,
            address:address
        }
        const orderinfo = {
            profile:cart[0].profile,
            classify:cart[0].classify,
            year:cart[0].years,
            token:cart[0].token,
            assistance:cart[0].assistance
        }
        const priceinfo = {
            dscprice:cart[0].price.DSC_Price,
            assprice:cart[0].price.Asst_Service_Price,
            tokenprice:cart[0].price.Token_Price,
            gst:cart[0].price.Gst,
            totalprice:tt,
        }
        const imginfo = {
            adhar:adharimg,
            pan:panimg,
            other:otherimg
        }
        await VisraOrderModel.create({
            order:orderinfo,
            user:userinfo,
            price:priceinfo,
            paymentid:paymentid,
            image:imginfo
        })
        return(
            NextResponse.json({
                success: true,
                message:"order successfully created",
            })
        )
    } catch (error) {
        return(
            NextResponse.json({
                success: false,
                message:error,
            })
        )
    }
   
} 