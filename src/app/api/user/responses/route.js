import { NextResponse } from "next/server";
import { getUserViaToken } from "@/helper/getUserViaToken";
import { dbConnect } from "@/dbconfig/dbconnect";
import { User } from "@/models/userModels";
import mongoose from "mongoose";

dbConnect();

export async function GET(request){
    try {
        let userId = await getUserViaToken()

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