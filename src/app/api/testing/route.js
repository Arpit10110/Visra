import connectdb from "@/dataBase";
import IndividualModal from "@/Model/IndividualSchema";
import { NextResponse } from "next/server";
export const GET = async(req)=>{
    return(
        NextResponse.json({
            messsage:`hello welcome to visra backend`,
        })
    )
}