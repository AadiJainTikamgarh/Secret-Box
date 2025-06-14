import { NextResponse } from "next/server";
import { dbConnect } from "@/dbconfig/dbconnect";
import mongoose from "mongoose";

export async function POST(request){
    try {
        const body = await request.json();
        const{email,password}= body

        if(!email||!password){
            return NextResponse.json(
                {error:"Please Provide Both Details"},
                {status:401}
            )
        }
        console.log("Login request:", { email, password });
        const user = mongoose.findOne({email})
        if(!user){
            return NextResponse.json(
                {error:"No User found with this email. Try to SignUp first."},
                {ststus:402}
            )
        }

        //password checking
        

    } catch (error) {
        return NextResponse.json(
            {error:error.message||"Internal Server Error"},
            {status:404}
        )
    }
}