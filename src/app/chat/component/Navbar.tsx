"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaUserFriends, FaCog, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Desktop Vertical Navbar */}
      <nav className="hidden md:flex flex-col items-center justify-between w-[4%] h-full bg-gray-700 py-4 shadow-xl">
        <div className="flex flex-col items-center space-y-8">
          <NavItem icon={<FaComments />} />
          <NavItem icon={<FaUserFriends />} />
        </div>
        <div className="flex flex-col items-center space-y-8">
          <NavItem icon={<FaCog />} />
          <NavItem icon={<FaUserCircle />} />
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 bg-slate-600 py-2 justify-around shadow-lg">
        <NavItem icon={<FaComments />} />
        <NavItem icon={<FaUserFriends />} />
        <NavItem icon={<FaCog />} />
        <NavItem icon={<FaUserCircle />} />
      </nav>
    </>
  );
};

const NavItem = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center cursor-pointer p-2 rounded-lg transition-colors duration-200"
    >
      <div className="text-white text-xl">{icon}</div>
      {/* <span className="text-xs text-white mt-1">{label}</span> */}
    </motion.div>
  );
};

export default Navbar;
