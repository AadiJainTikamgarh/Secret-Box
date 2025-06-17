"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Share2,
  MessageCircle,
  Eye,
  X,

  Sparkles,
  Link as LinkIcon,
} from "lucide-react";
import { HomeIcon, LogOut } from "lucide-react";

import Footer from "@/Components/Footer";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const router = useRouter();


  const [userId, setUserId] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/user/responses");
        response.data.response.map((e) =>
          setMessages((mes) => [
            ...mes,
            { id: `${e.nglResponse._id}`, text: `${e.nglResponse.response}` },
          ])
        );
        // console.log(response.data.response)
      } catch (error) {
        console.log("Failed in fetching messages : ", error.message);
      }
    }
    fetchData()
  }, []);
  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      toast.success("Logout successfully");
      router.push("/login");
    } catch (error) {
      console.log("Error in LoggingOut", error);
      toast.error("Something went wrong");
    }
  };

  const getId = async () => {
    try {
      const response = await axios.get("/api/user/me");
      setUserId(response.data.userId);
      console.log("UserId from API", response.data.userId);
    } catch (error) {
      console.log("Error in Fetching User Id from Token", error);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/nglresponse/${userId}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (error) {
      console.log("Error copying link", error);
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Send me anonymous messages!",
          text: "Share your thoughts with me anonymously",
          url: `${window.location.origin}/nglresponse/${userId}`,
        });
      } catch (error) {
        console.log("Error sharing", error);
      }
    } else {
      copyLink();
    }
  };

  useEffect(() => {
    getId();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />


      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-b border-blue-200 ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-blue-600 text-2xl md:text-3xl font-semibold md:ml-5 md:font-bold">
              Secret Box
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              {/* Home Button for All Screens */}
              <a href="/home">
                <motion.button

                  className="inline-flex items-center gap-1 md:gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 md:px-4 py-2 rounded-lg font-medium transition-colors border border-blue-200 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HomeIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </motion.button>
              </a>

              {/* Sign Out Button */}
              <motion.button
                onClick={logout}
                className="inline-flex items-center gap-1 md:gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-3 md:px-4 py-2 rounded-lg font-medium transition-colors border border-red-200 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 border border-blue-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">
              Anonymous Messages
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Your NGL Link
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your link and receive honest, anonymous messages from friends
            and followers
          </p>
        </motion.div>

        <motion.div className="max-w-2xl mx-auto mb-12" variants={itemVariants}>
          {userId ? (
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <LinkIcon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Your Anonymous Link
                </h3>
              </div>

              <div className="bg-white rounded-xl p-4 mb-4 border border-blue-100">
                <code className="text-blue-700 text-sm break-all">
                  {`${window.location.origin}/nglresponse/${userId}`}
                </code>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={copyLink}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy className="w-4 h-4" />
                  {copiedLink ? "Copied!" : "Copy Link"}
                </motion.button>

                <motion.button
                  onClick={shareLink}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>
              </div>

              <motion.div
                className="mt-4 p-4 bg-blue-100 rounded-xl border border-blue-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-blue-800 text-sm">
                  💡 <strong>Pro tip:</strong> Share this link on your social
                  media stories, bio, or with friends to start receiving
                  anonymous messages!
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-200"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-blue-200">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </motion.div>
              </div>
              <p className="text-gray-700">Generating your unique link...</p>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Your Messages
              </h2>
            </div>
          </div>

          <motion.div className="grid gap-4" variants={containerVariants}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200 hover:from-gray-100 hover:to-blue-100 rounded-2xl p-6 border transition-all cursor-pointer hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedMessage(msg);
                }}
                layout
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-lg shadow-md">
                        💬
                      </div>
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed line-clamp-2">
                      {msg.text}
                    </p>
                  </div>
                  <Eye className="w-5 h-5 text-blue-500 opacity-50" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-lg w-full border border-gray-200 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                    💬
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold">
                      Anonymous Message
                    </h3>
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelectedMessage(null)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-800 text-lg leading-relaxed">
                  {selectedMessage.text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
