"use client"
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full h-[10%] bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg px-4 py-3 flex items-center justify-between">
      {/* Left: Branding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <h1 className="text-white text-2xl font-bold">Chat Central</h1>
      </motion.div>

      {/* Middle: Search Bar (only visible on md and up) */}
     

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBell className="text-white text-2xl hover:text-cyan-500 cursor-pointer" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaUserCircle className="text-white text-2xl hover:text-cyan-500 cursor-pointer" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
