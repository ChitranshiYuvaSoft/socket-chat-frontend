"use client";
import { newMessageAdd } from "@/redux/message/messageSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";

const MessageForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState<string>("");
  console.log(text);
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      newMessageAdd({
        text: text,
      })
    );
    setText("");
  };
  return (
    <form
      className="p-4 bg-blue-100 flex items-center"
      onSubmit={handleMessage}
    >
      <input
        type="text"
        placeholder="Type your message"
        className="flex-1 px-3 py-2 bg-blue-50 text-blue-900 border border-blue-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-2 bg-cyan-500 text-white font-bold rounded-r-lg hover:bg-cyan-600 transition"
      >
        <IoMdSend className="text-base" />
      </button>
    </form>
  );
};

export default MessageForm;
