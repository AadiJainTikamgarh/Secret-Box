import axios from "axios";
import { dbConnect } from "@/dbconfig/dbconnect";
import { NextResponse } from "next/server";
import { User } from "@/models/userModels";


dbConnect();
export async function POST(request) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: "Please provide all required fields" },
                { status: 400 }
            );
        }

        console.log("Signup request:", { email, password });

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        let token = undefined


        const newUser = new User({

            email,
            password,

        })
        // console.log(newUser)
        token = newUser.generateRefreshToken();
        newUser.refreshToken = token;
       
        const savedUser = await newUser.save()
        console.log(token)

        console.log("User created:", savedUser._id);
        const response = NextResponse.json(
            {
                message: "User created successfully",
                success: true
            },
            { status: 201 }
        )

        response.cookies.set("token", token, { httpOnly: true });

        return response



    } catch (error) {

        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 404 }
        )
    }
}