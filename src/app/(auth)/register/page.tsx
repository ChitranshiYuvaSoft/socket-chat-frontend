import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-80 h-80 bg-cyan-400 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Registration Form Container */}
      <div className="relative w-[38%] max-w-md rounded-2xl p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Sign up using social networks
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-3">
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            <FaGoogle className="text-gray-300 text-xl" />
          </button>
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            <FaFacebookF className="text-gray-300 text-xl" />
          </button>
          <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            <FaInstagram className="text-gray-300 text-xl" />
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="block w-full text-center bg-cyan-500 text-white font-bold py-2 rounded-lg hover:bg-cyan-600 transition">
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
