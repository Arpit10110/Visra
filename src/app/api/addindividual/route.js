import connectdb from "@/dataBase";
import IndividualModal from "@/Model/IndividualSchema";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    try {
        connectdb();
        const {name,phone,email,address} =await req.json();
        await IndividualModal.create({
           name:name,
           phone:phone,
           email:email,
           address:address
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