"use client"
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React, { useState } from 'react'
import { Particles } from '@/Components/ui/particles'
import { Send, MessageCircle, Lock } from 'lucide-react'

const page = () => {
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        

        setIsSubmitting(true)
        
        
       
        
        setIsSubmitted(true)
        setIsSubmitting(false)
        setMessage('')
        
        
        setTimeout(() => {
            setIsSubmitted(false)
        }, 3000)
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-white via-purple-50 to-[#4212de30]'>
            <Header />
            <div className="absolute overflow-hidden h-full w-full">
                <Particles color="#4212de" quantitiy={2500} size={0.6}/>
            </div>
            
            <div className='min-h-screen relative z-10 flex items-center justify-center px-4 py-10 '>
                <div className="w-full max-w-2xl  bg-gray-50 rounded-2xl px-8 py-8 border-4 border-[#4212de]">
                    
                    <div className="text-center mb-4 md:mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#4212de]/10 rounded-full border border-[#4212de]/20 backdrop-blur-sm">
                                <MessageCircle className="w-12 h-12 text-[#4212de]" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Send Anonymous Message
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Share your thoughts anonymously and securely
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4 text-[#4212de] text-sm font-medium">
                            <Lock className="w-4 h-4" />
                            <span>100% Anonymous & Secure</span>
                        </div>
                    </div>

                    
                    <div className="border border-white/30 rounded-2xl py-8 md:px-8  ">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="message" className="block text-gray-800 text-lg font-medium mb-3">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your anonymous message here..."
                                        className="w-full h-40 px-4 py-3 bg-white/30 backdrop-blur-md border  rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4212de] focus:border-transparent resize-none border-blue-400"
                                        maxLength={500}
                                        required
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-500 text-sm">
                                            {message.length}/500 characters
                                        </span>
                                        <div className="flex items-center gap-2 text-[#4212de] text-sm font-medium">
                                            <Lock className="w-3 h-3" />
                                            <span>Anonymous</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!message.trim() || isSubmitting}
                                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                                        !message.trim() || isSubmitting
                                            ? 'bg-blue-300 text-cyan-900 cursor-not-allowed'
                                            : 'bg-[#4212de] hover:bg-[#3010b8] text-white shadow-lg hover:shadow-[#4212de]/30 transform hover:scale-[1.02]'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Anonymous Message
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-green-500/20 backdrop-blur-md rounded-full border border-green-400/30">
                                        <MessageCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-gray-600">
                                    Your anonymous message has been delivered securely.
                                </p>
                            </div>
                        )}
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl p-4 text-center shadow-lg">
                            <Lock className="w-8 h-8 text-[#4212de] mx-auto mb-2" />
                            <h4 className="text-gray-800 font-semibold mb-1">Anonymous</h4>
                            <p className="text-gray-600 text-sm">No personal info required</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl p-4 text-center shadow-lg">
                            <MessageCircle className="w-8 h-8 text-[#4212de] mx-auto mb-2" />
                            <h4 className="text-gray-800 font-semibold mb-1">Secure</h4>
                            <p className="text-gray-600 text-sm">End-to-end protection</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl p-4 text-center shadow-lg">
                            <Send className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h4 className="text-gray-800 font-semibold mb-1">Instant</h4>
                            <p className="text-gray-600 text-sm">Delivered immediately</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default page