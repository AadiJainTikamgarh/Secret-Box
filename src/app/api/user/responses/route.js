import { NextResponse } from "next/server";
import axios from "axios";
import { dbConnect } from "@/dbconfig/dbconnect";
import { User } from "@/models/userModels";
import mongoose from "mongoose";

dbConnect();

export async function GET(request){
    try {
        
        try {
            const user = await axios.get("/api/user/me");
            const userId = user?.userId;
        } catch (error) {
            console.log("Failed in fetching userId : ", userId);
            return NextResponse.json({error: error?.message}, {status: 404})
        }

        const messages = await User.aggregate({
            $match: {
                _id: new mongoose.Types.ObjectId(userId)
            }
        },{
            $unwind: "$nglResponse"
        },{
            $sort: {
                "$nglResponse.createdAt": -1
            }
        },{
            $project: {
                nglResponse: 1
            }
        })

        return NextResponse.json({response: messages}, {status: 200})

    } catch (error) {
        console.log("Something went wrong", error?.message)
        return NextResponse.json({error: error?.message},{status: 500})
    }
}