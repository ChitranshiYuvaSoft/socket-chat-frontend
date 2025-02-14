"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-[25%] h-full bg-gray-900 shadow-xl flex flex-col"
      >
        {/* Search Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-gray-900 w-full h-[15%] flex items-center justify-center px-6"
        >
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
            <input
              type="text"
              placeholder="Search chats"
              className="w-full pl-10 pr-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Chat List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 overflow-y-auto hide-scrollbar space-y-2 px-6 py-4"
        >
          {[1, 2, 3, 4, 5].map((chat, index) => (
            <motion.div
              key={chat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              className="flex items-center p-1 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
              <div className="ml-3">
                <p className="text-white text-sm font-semibold">
                  Contact {chat}
                </p>
                <p className="text-gray-400 text-xs">Last message preview...</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
