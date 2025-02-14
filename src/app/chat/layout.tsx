import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ChatSection from "./component/ChatSection";
import Navbar from "./component/Navbar";

const layout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] bg-gray-900 flex items-center justify-center flex-col">
      <Header />
      <section className="w-[100%] h-[90%] flex items-center justify-center">
       <Navbar/>
        <Sidebar />
        <main className="w-[80%] h-[100%] flex items-center justify-center">
          {/* {children}
           */}
          <ChatSection />
        </main>
      </section>
    </div>
  );
};

export default layout;
