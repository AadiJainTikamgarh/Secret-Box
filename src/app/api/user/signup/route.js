import axios from "axios";
import { dbConnect } from "@/dbconfig/dbconnect";
import { NextResponse } from "next/server";
import { User } from "@/models/userModels";


dbConnect();
export async function POST(request) {
    try {
        const body = request.json()
        const { email, password, googleLogin, name, image } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: "Please provide all required fields" },
                { status: 400 }
            );
        }

        console.log("Signup request:", { username, email });

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        if (googleLogin) {
            const newUser = new User({
                name,
                email,
                photo: image,
                refreshToken: await this.generateRefreshToken(),
                accessToken: await this.generateAccessToken()
            })
            const savedUser = await newUser.save()
            console.log("User created:", savedUser._id);
            return NextResponse.json(
                {
                    message: "User created successfully",
                    success: true
                },
                { status: 201 }
            );
        } else {
            const newUser = new User({

                email,
                password,
                refreshToken: await this.generateRefreshToken(),
                accessToken: await this.generateAccessToken()
            })
            const savedUser = await newUser.save()
            console.log("User created:", savedUser._id);
            return NextResponse.json(
                {
                    message: "User created successfully",
                    success: true
                },
                { status: 201 }
            );

        }

    } catch (error) {

        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { ststus: 404 }
        )
    }
}