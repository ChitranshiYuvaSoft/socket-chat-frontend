import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-6 relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 rounded-full blur-[100px] sm:blur-[150px] opacity-30"></div>
      </div>

      <div className="relative w-full max-w-lg sm:max-w-xl h-[100%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 space-y-6 sm:space-y-8">
        <div className="w-20 h-20 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-full shadow-md animate-pulse">
          <BsFillSendFill className="text-4xl sm:text-5xl text-cyan-300 drop-shadow-lg" />
        </div>

        <div className="w-full text-center space-y-3 sm:space-y-4">
          <h3 className="text-2xl sm:text-4xl md:text-3xl font-bold text-white flex items-center justify-center gap-2 sm:gap-3">
            Hey User
            <img
              src="./Image/Hii.png"
              alt="Hi Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </h3>
          <h3 className="text-lg sm:text-xl md:text-xl font-medium text-gray-200">
            Welcome to Our Chat App
          </h3>

          <p className="text-gray-400 text-base sm:text-lg md:text-base max-w-md mx-auto leading-relaxed">
            Connect with friends in real-time, experience smooth messaging, and
            enjoy our interactive chat system.
          </p>
        </div>

        <Link
          href="/login"
          className="relative bg-cyan-500 hover:bg-cyan-600 text-white text-base sm:text-lg md:text-lg font-semibold rounded-full px-8 sm:px-6 py-3 sm:py-3 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50"
        >
          Get Started 🚀
        </Link>

        <div className="absolute -top-4 sm:-top-6 right-8 sm:right-10 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 sm:bottom-10 left-16 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Page;
