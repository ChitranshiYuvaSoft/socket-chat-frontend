"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdSend } from "react-icons/io";
import MessageForm from "./MessageForm";

const ChatSection = () => {
  // Variants for the chat message animation
  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <div className="w-full h-full flex flex-col bg-blue-50">
      {/* Conversation Header (static) */}
      <div className="p-4 bg-blue-100 flex items-center justify-between">
        <h2 className="text-blue-900 text-base sm:text-lg font-semibold">
          Contact Name
        </h2>
        <p className="text-blue-700 text-xs sm:text-sm">Online</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
        {/* Received Message */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={messageVariants}
          className="max-w-xs bg-gradient-to-r from-blue-200 to-blue-100 text-blue-900 p-3 rounded-2xl shadow-lg text-xs sm:text-sm"
        >
          Hi, how can I help you?
        </motion.div>

        {/* Sent Message */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={messageVariants}
          className="max-w-xs bg-gradient-to-l from-cyan-200 to-cyan-100 text-blue-900 p-3 rounded-2xl shadow-lg ml-auto text-xs sm:text-sm"
        >
          I have a question regarding your product.
        </motion.div>

        {/* Additional messages can be animated similarly */}
      </div>

      {/* Message Input (static) */}
      <MessageForm />
    </div>
  );
};

export default ChatSection;
