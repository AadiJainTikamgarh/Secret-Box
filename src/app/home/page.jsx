"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    Share2,
    Eye,
    Users,
    Shield,
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    User,
    ChevronDown
} from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Head from 'next/head';


const page = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
            <Head>
                <title>Secret Box - Anonymous Messaging Platform</title>
                <meta name="description" content="Receive anonymous messages securely with Secret Box" />
            </Head>
            <Header />
            <motion.section
                className="flex flex-col items-center justify-center px-6 py-16 md:py-24"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div
                    className="text-center max-w-4xl"
                    variants={fadeInUp}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#4212de] to-blue-600 bg-clip-text text-transparent"
                        variants={fadeInUp}
                    >
                        Secret Box
                    </motion.h1>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-700"
                        variants={fadeInUp}
                    >
                        Receive Anonymous Messages
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                        variants={fadeInUp}
                    >
                        Connect with friends, colleagues, and your audience through honest, anonymous feedback.
                        Share your unique link and discover what people really think.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={fadeInUp}
                    >
                        <a href="/">
                            <motion.button
                                className="px-8 py-4 bg-[#4212de] text-white rounded-xl font-semibold text-lg shadow-xl hover:from-[#3610c4] hover:to-blue-700 transition-all flex items-center space-x-2"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(66, 18, 222, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Create Your Secret Box</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </a>
                        <motion.div
                            className="flex items-center space-x-2 text-gray-500"
                            variants={fadeInUp}
                        >
                            <Shield className="w-5 h-5" />
                            <span>100% Anonymous & Secure</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                className="px-6 py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div className="max-w-6xl mx-auto" variants={fadeInUp} id='about'>
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                        How Secret Box Works
                    </h3>
                    <div className="flex flex-col items-center space-y-12">

                        <motion.div
                            className="flex flex-col md:flex-row items-center max-w-4xl w-full"
                            variants={fadeInUp}
                        >
                            <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#4212de] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        1
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-800">Sign Up</h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed md:pr-8">
                                    Create your free account in seconds. No personal information required beyond basic setup.
                                    Once registered, you'll be redirected to your personal dashboard.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-64 h-40 bg-[#4212de] rounded-xl flex items-center justify-center shadow-lg">
                                    <User className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            variants={fadeInUp}
                            className="text-[#4212de]"
                        >
                            <ChevronDown className="w-8 h-8" />
                        </motion.div>


                        <motion.div
                            className="flex flex-col md:flex-row-reverse items-center max-w-4xl w-full"
                            variants={fadeInUp}
                        >
                            <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#4212de] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        2
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-800">Share Your Link</h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed md:pl-8">
                                    You'll see your unique link on the dashboard. Share it with friends, on social media,
                                    or wherever you want to receive anonymous feedback from people.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-64 h-40 bg-[#4212de] rounded-xl flex items-center justify-center shadow-lg">
                                    <Share2 className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            variants={fadeInUp}
                            className="text-[#4212de]"
                        >
                            <ChevronDown className="w-8 h-8" />
                        </motion.div>


                        <motion.div
                            className="flex flex-col md:flex-row items-center max-w-4xl w-full"
                            variants={fadeInUp}
                        >
                            <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#4212de] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        3
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-800">View Messages</h4>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed md:pr-8">
                                    Anonymous messages will appear on your dashboard. Click on any message to open
                                    and read the full content. All messages remain completely anonymous.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-64 h-40 bg-[#4212de] rounded-xl flex items-center justify-center shadow-lg">
                                    <MessageSquare className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>


            <motion.section
                className="px-6 py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div className="max-w-6xl mx-auto" variants={fadeInUp}>
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                        Why Choose Secret Box?
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "100% Anonymous",
                                description: "Complete privacy guaranteed. No tracking, no data collection from message senders."
                            },
                            {
                                icon: <Eye className="w-8 h-8" />,
                                title: "Easy to Use",
                                description: "Simple, clean interface. Share your link and start receiving messages immediately."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Connect Authentically",
                                description: "Get honest feedback and genuine thoughts from your network without barriers."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg max-w-sm border border-gray-100"
                                variants={fadeInUp}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-[#4212de] mb-6">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>


            <motion.section
                className="px-6 py-16 bg-gradient-to-br from-gray-50 to-blue-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp} id='team'>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Meet the Developers
                    </h3>
                    <p className="text-lg text-gray-600 mb-12">
                        Built with passion by two dedicated developers committed to privacy and user experience.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        {[
                            {
                                name: "Aadi Jain",
                                role: "Full Stack Developer",
                                description: "Passionate about creating secure and user-friendly applications.",
                                avatar: "/aadi.jpg",
                                git: "https://github.com/AadiJainTikamgarh",
                                link: "https://www.linkedin.com/in/aadi-jain-42a765319/",
                                mail: "AadiJainTikamgarh@gmail.com"
                            },
                            {
                                name: "Saumya Khushlani",
                                role: "Full Stack Developer",
                                description: "Turning ideas into functional, beautiful, and high-performance web applications.",
                                avatar: "/saumya.jpg",
                                git: "https://github.com/Saumyakhushlani",
                                link: "https://www.linkedin.com/in/saumya-khushlani-333955312/",
                                mail: "saumyakhushlani9@gmail.com"
                            }
                        ].map((dev, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg max-w-sm"
                                variants={fadeInUp}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                            >
                                <motion.img
                                    src={dev.avatar}
                                    alt={dev.name}
                                    className="w-48 h-48 rounded-full mb-2 object-cover border-4 border-blue-100"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h4 className="text-xl font-semibold mb-2 text-gray-800">{dev.name}</h4>
                                <p className="text-[#4212de] font-medium mb-3">{dev.role}</p>
                                <p className="text-gray-600 mb-6 leading-relaxed">{dev.description}</p>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={dev.git}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-[#4212de] transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Github className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href={dev.link}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href={`mailto:${dev.mail}`}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Mail className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>


            <motion.section
                className="px-6 py-16 bg-[#4212de] text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h3
                        className="text-3xl md:text-4xl font-bold mb-6"
                        variants={fadeInUp}
                    >
                        Ready to Start Receiving Anonymous Messages?
                    </motion.h3>
                    <motion.p
                        className="text-xl mb-8 opacity-90"
                        variants={fadeInUp}
                    >
                        Join thousands of users who trust Secret Box for honest, anonymous communication.
                    </motion.p>
                    <a href="/">
                        <motion.button
                            className="px-8 py-4 bg-white text-[#4212de] rounded-xl font-semibold text-lg shadow-xl hover:bg-gray-50 transition-all flex items-center space-x-2 mx-auto"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Create Your Secret Box</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </a>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default page;