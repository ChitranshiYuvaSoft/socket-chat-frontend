"use client";
import React from "react";
import { IoMdSend } from "react-icons/io";

const MessageForm = () => {
  return (
    <div className="p-4 bg-blue-100 flex items-center">
      <input
        type="text"
        placeholder="Type your message"
        className="flex-1 px-3 py-2 bg-blue-50 text-blue-900 border border-blue-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
      />
      <button className="px-3 py-2 bg-cyan-500 text-white font-bold rounded-r-lg hover:bg-cyan-600 transition">
        <IoMdSend className="text-base" />
      </button>
    </div>
  );
};

export default MessageForm;
