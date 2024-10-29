import connectdb from "@/dataBase";
import IndividualModal from "@/Model/IndividualSchema";
import { NextResponse } from "next/server";
export const POST = async(req)=>{
   const {name}= await req.json()
    return(
        NextResponse.json({
            messsage:"Hello",
            data:name,
        })
    )
}