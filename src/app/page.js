"use client";

import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home() {
  const router = useRouter();

  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState([
    "Hey, you’re great!",
    "Keep up the amazing work!",
    "Don’t be discouraged, you got this!",
  ]);

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");

      router.push('/login');
    } catch (error) {
      console.log("Error in LoggingOut", error);
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

  useEffect(() => {
    getId();
  }, []);

  return (
    <div>
      <Header/>
      <div
        className="min-h-[50vh] p-6"
        style={{ backgroundColor: "white" }}>
        <h1
          className="text-4xl font-semibold mb-4"
          style={{ color: "#4212de" }}>
          Your NGL Link
        </h1>

        {userId ? (
          <div className="mb-4">
            <input
              readOnly
              value={`${window.location.origin}/nglresponse/${userId}`}
              className="p-2 mr-2 rounded border-2 border-[#4212de]"
            />
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `${window.location.origin}/nglresponse/${userId}`
                )
              }
              className="p-2 ml-2 rounded bg-[#4212de] text-gray-50">
              Copy Link
            </button>
          </div>
        ) : (
          <p>Fetching link...</p>
        )}

        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#4212de" }}>
          Your Messages
        </h2>

        <ul className="mb-4">
          {messages.map((msg, index) => (
            <li
              key={index}
              className="p-4 rounded shadow-md mb-2"
              style={{ border: "1px solid #4212de" }}>
              {msg}
            </li>
          ))}
        </ul>

        <button
          onClick={logout}
          className="p-2 rounded bg-[#4212de] text-gray-50">
          Sign Out
        </button>
      </div>
      <Footer/>
    </div>
  );
}
