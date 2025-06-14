'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaBook, FaInfoCircle, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#4212de] text-white shadow-lg sticky top-0 z-100 "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              
              <span className="text-2xl font-bold text-[#Fff]">SECRET BOX</span>
            </Link>
          </motion.div>

          
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex space-x-8"
          >
            <Link href="/introduction" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaHome /> Home
            </Link>
            
            <Link href="/About" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaInfoCircle /> About
            </Link>
            <Link href="/team" className="hover:text-[#FFD700] transition flex items-center gap-2">
              < RiTeamFill />Team
            </Link>
            <Link href="/contact" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaPhone /> Contact
            </Link>
            
          </motion.nav>

          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden text-2xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'py-4' : ''}`}
        >
          <div className="flex flex-col space-y-4">
            <Link href="/introduction" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaHome /> Home
            </Link>
            <Link href="/Resources" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaBook /> Resources
            </Link>
            <Link href="/About" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaInfoCircle /> About
            </Link>
            <Link href="/team" className="hover:text-[#FFD700] transition flex items-center gap-2">
            < RiTeamFill />Team
            </Link>
            <Link href="/contact" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaPhone /> Contact
            </Link>
            <Link href="/donation" className="hover:text-[#FFD700] transition flex items-center gap-2">
              <FaDonate/>Donate
            </Link>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header; 