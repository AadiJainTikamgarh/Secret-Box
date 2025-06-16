"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Lock, Shield, Zap, Eye, Users } from "lucide-react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import axios from "axios";

const Page = ({ params }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            message,
            id: params.nglId
        }
        try {
            const response = await axios.post("/api/user/nglresponse", data)

        } catch (error) {
            console.log("Error in Sending Message . Try Again Later", error)
        }


    };

    const handleButtonClick = (e) => {
        console.log("Current message state.", message);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const featureVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
        },
    };

    return (
        <div className='min-h-screen bg-white relative'>

            <div className='absolute inset-0 z-0 bg-gradient-to-br from-[#4212de]/5 via-transparent to-purple-50/30' />


            <Header />

            <div className='container px-4 py-6 md:py-8 mx-auto relative z-10'>
                <motion.div
                    className='max-w-4xl mx-auto'
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.div className='text-center mb-6' variants={itemVariants}>
                        <motion.div
                            className='inline-flex items-center gap-2 bg-[#4212de]/10 px-4 py-2 rounded-full mb-6'
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <Lock className='w-4 h-4 text-[#4212de]' />
                            <span className='text-[#4212de] font-semibold text-sm'>100% Anonymous</span>
                        </motion.div>

                        <h1 className='text-5xl md:text-6xl font-semibold text-gray-900 mb-3 leading-tight'>
                            Send Anonymous
                            <span className='text-[#4212de] block'>Messages</span>
                        </h1>

                        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            Share your thoughts, feedback, or confessions completely anonymously.
                            No registration required, no traces left behind.
                        </p>
                    </motion.div>

                    <motion.div
                        className='bg-white rounded-3xl shadow-[0_0_20px_5px_rgb(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 my-8'
                        variants={itemVariants}
                        style={{ transform: "none" }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='p-3 bg-[#4212de]/10 rounded-2xl'>
                                    <MessageCircle className='w-6 h-6 text-[#4212de]' />
                                </div>
                                <h2 className='text-2xl font-semibold text-gray-900'>Your Anonymous Message</h2>
                            </div>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='message' className='block text-gray-800 text-lg font-semibold mb-4'>
                                        What would you like to say?
                                    </label>
                                    <textarea
                                        id='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder='Type your anonymous message here... Be honest, be kind, be yourself.'
                                        className='w-full h-48 px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4212de] focus:border-transparent resize-none transition-all duration-300 text-lg leading-relaxed'
                                        maxLength={1000}
                                        required
                                    />
                                    <div className='flex justify-between items-center mt-4'>
                                        <span className='text-gray-500 font-semibold'>{message.length}/1000</span>
                                        <div className='flex items-center gap-2 text-[#4212de] font-semibold'>
                                            <Eye className='w-4 h-4' />
                                            <span>Identity Protected</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    disabled={!message.trim()}
                                    onClick={handleButtonClick}
                                    className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${!message.trim()
                                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        : 'bg-[#4212de] hover:bg-[#3010b8] text-gray-50 shadow-md hover:shadow-lg'
                                        }`}
                                >
                                    <Send className='w-5 h-5' />
                                    Send Anonymous Message
                                </button>

                            </form>
                        </motion.div>
                    </motion.div>
                                <a href="/home">
                                    <button
                                        className="bg-[#122dde]  text-gray-50 shadow-md hover:shadow-lg w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mb-5"
                                    >
                                        <Send className='w-5 h-5' />
                                        Create your Anonymous message Link
                                    </button>
                                </a>

                    <motion.div variants={itemVariants}>
                        <h3 className='text-2xl font-semibold text-gray-900 text-center mb-12'>
                            Why Choose Our Platform?
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {[
                                {
                                    icon: Shield,
                                    title: "100% Anonymous",
                                    description: "No personal information required or stored",
                                },
                                {
                                    icon: Lock,
                                    title: "Safe Delivery",
                                    description: "End-to-end encryption protects your privacy",
                                },
                                {
                                    icon: Zap,
                                    title: "Instant Sending",
                                    description: "Messages delivered immediately upon submission",
                                },
                                {
                                    icon: Users,
                                    title: "Trusted Platform",
                                    description: "Used by many users for honest communication",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300'
                                    variants={featureVariants}
                                    whileHover='hover'
                                >
                                    <div className='inline-flex p-4 bg-[#4212de]/10 rounded-2xl mb-4'>
                                        <feature.icon className='w-6 h-6 text-[#4212de]' />
                                    </div>
                                    <h4 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h4>
                                    <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
