"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MessageForm from "./component/MessageForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { messages } from "@/redux/message/messageSlice";

const page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userMessage } = useSelector((state: RootState) => state.message);
  const { user } = useSelector((state: RootState) => state.auth);

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

  const userId = user?.user?._id;

  useEffect(() => {
    dispatch(messages());
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-blue-50">
      <div className="p-4 bg-blue-100 flex items-center justify-between">
        <h2 className="text-blue-900 text-base sm:text-lg font-semibold">
          Contact Name
        </h2>
        <p className="text-blue-700 text-xs sm:text-sm">Online</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
        {userMessage?.map((item, index) => (
          <motion.div
            key={index}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={messageVariants}
            className={
              item?.sender?._id === userId
                ? "max-w-xs bg-gradient-to-r from-cyan-200 to-cyan-100 text-blue-900 p-3 rounded-2xl shadow-lg ml-auto text-xs sm:text-sm"
                : "max-w-xs bg-gradient-to-l from-blue-200 to-blue-100 text-blue-900 p-3 rounded-2xl shadow-lg  text-xs sm:text-sm"
            }
          >
            {item?.text}
          </motion.div>
        ))}
      </div>

      <MessageForm />
    </div>
  );
};

export default page;
