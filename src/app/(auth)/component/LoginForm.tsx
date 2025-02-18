"use client";
import { login } from "@/redux/auth/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispath = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispath(login(user));
  };
  return (
    <form className="space-y-4" onSubmit={handleLogin}>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
