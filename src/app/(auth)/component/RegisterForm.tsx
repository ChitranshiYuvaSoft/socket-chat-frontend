"use client";
import { register } from "@/redux/auth/authSlice";
import { AppDispatch } from "@/redux/store";
import { UserInfo } from "@/type";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = userInfo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(userInfo));
  };

  return (
    <form className="space-y-4" onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="block w-full text-center bg-cyan-500 text-white font-bold py-2 rounded-lg hover:bg-cyan-600 transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
