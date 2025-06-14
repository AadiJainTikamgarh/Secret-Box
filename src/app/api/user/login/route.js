import { NextResponse } from "next/server";
import { dbConnect } from "@/dbconfig/dbconnect";
import mongoose from "mongoose";
import { User } from "@/models/userModels";

export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: "Please Provide Both Details" },
                { status: 401 }
            )
        }

        console.log("Login request:", { email, password });
        const user = mongoose.findOne({ email })
        if (!user) {
            return NextResponse.json(
                { error: "No User found with this email. Try to SignUp first." },
                { ststus: 402 }
            )
        }

        //password checking
        const isPasswordValid = await user.isPasswordMatch(password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }


        //Adding and saving the refresh token
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save();

        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            nglToken: user.nglToken
        };


        const response = NextResponse.json(
            {
                message: "Login successful",
                user: userResponse,
                accessToken,
                refreshToken
            },
            { status: 200 }
        );

        response.cookies.set("token", refreshToken, { httpOnly: true })

        return response
        
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 404 }
        )
    }
}