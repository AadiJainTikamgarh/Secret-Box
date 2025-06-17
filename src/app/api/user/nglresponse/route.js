import { User } from "@/models/userModels";import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbConnect } from "@/dbconfig/dbconnect";

export async function POST(request){
    try {
        await dbConnect();
        const body =await request.json();
        const{message,id}= body

        //Finding User
        const user = await User.findByIdAndUpdate(id,{$push: {nglResponse : {response: message}}})
        if(!user){
            console.log(id)
            return NextResponse.json(
                {error:"User Not Found"},
                {status:403}
            )
        }
        //Adding message to the array

        
        return NextResponse.json(
            {message:"Message Deliverded successfully",success:true},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:error.message || "Internal Server Error"},
            {status:405}
        )
    }
}