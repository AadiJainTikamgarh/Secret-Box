"use client";
import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    if (isSubmitting) return; // Prevent double submission
    
    // Basic validation
    if (!formData.email || !formData.password) {
      toast("Email and password are required", {
        icon: "❗",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post("/api/user/signup", formData);
      toast.success("SignUp successfully");
      console.log("SignUp successfully ", response.data);
      router.push("/");
    } catch (error) {
      console.log("Failed to send data", error);
      
      // Better error handling
      if (error.response) {
        const status = error.response.status;
        if (status === 400 || status === 422) {
          toast("Email and password required", {
            icon: "❗",
          });
        } else if (status === 401 || status === 409) {
          toast("User already exists", {
            icon: "❗",
          });
        } else {
          toast.error("Something went wrong");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledWrapper>
      <Toaster/>
      <form className="form " onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        
        <label>
          <input 
            className="input" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder=" " 
            required 
            disabled={isSubmitting}
          />
          <span>Email</span>
        </label> 
        
        <label>
          <input 
            className="input" 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder=" " 
            required 
            disabled={isSubmitting}
          />
          <span>Password</span>
        </label>
        
        <button 
          className="submit" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        
        <p className="signin">Already have an account ? <a href="#">Signin</a> </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 30px;
    border-radius: 20px;
    position: relative;
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #4212de;
  }
  
  .title::before {
    width: 18px;
    height: 18px;
  }
  
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #4212de;
  }
  
  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(51, 51, 51, 0.7);
  }
  
  .signin {
    text-align: center;
  }
  
  .signin a:hover {
    text-decoration: underline #4212de;
  }
  
  .signin a {
    color: #4212de;
    text-decoration: none;
  }
  
  .form label {
    position: relative;
  }
  
  .form label .input {
    background-color: #fff;
    color: #333;
    width: 100%;
    padding: 20px 10px 5px 10px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .form label .input:focus {
    border-color: #4212de;
    box-shadow: 0 0 0 2px rgba(66, 18, 222, 0.1);
  }
  
  .form label .input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #f5f5f5;
  }
  
  .form label .input + span {
    color: rgba(51, 51, 51, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
  }
  
  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,
  .form label .input:valid + span,
  .form label .input:not(:placeholder-shown) + span {
    color: #4212de;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .submit {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    background-color: #4212de;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .submit:hover:not(:disabled) {
    background-color: #3610b8;
    transform: translateY(-1px);
  }
  
  .submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default SignupForm;