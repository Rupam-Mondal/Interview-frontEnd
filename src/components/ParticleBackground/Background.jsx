import React from "react";
import { Particles } from "../ui/particles";
import assets from "@/assets/assest";
import { useNavigate } from "react-router-dom";
import { ScrollProgress } from "../magicui/scroll-progress";

const Background = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScrollProgress className="top-[75px]" />
      <Particles
        className="absolute min-h-[250vh] inset-2"
        quantity={500}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div>
        {/* Main Content */}
        <div className="min-h-[100vh] flex flex-col justify-center gap-5 items-center text-center px-6 space-y-6">
          
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-6xl font-semibold leading-none text-transparent">
              Welcome to{"\n"}Our{" "}
              <span className="text-4xl md:text-8xl text-[#38BDF8]">
                InterView
              </span>{" "}
              Website
            </span>

          <button
            className="hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 border border-white text-white/50 hover:shadow-xl"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Get Started for Free
          </button>
        </div>

        <hr className="w-3/4 mx-auto border-t-2 border-gray-600 mb-6" />

        <section className="py-16 px-8 text-center">
          <h2 className="text-4xl font-bold text-[#38BDF8]">About Us</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            We aim to provide the best platform to help individuals prepare for
            interviews with ease. Our resources, guidance, and interactive tools
            make interview preparation seamless.
          </p>
        </section>

        <section className="py-16 px-8 text-center bg-gray-800/30 mb-10">
          <h2 className="text-4xl font-bold text-[#38BDF8]">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
              <h3 className="text-xl font-semibold">Mock Interviews</h3>
              <p className="mt-2 text-gray-400">
                Practice real interview scenarios with AI-driven simulations.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
              <h3 className="text-xl font-semibold">Question Bank</h3>
              <p className="mt-2 text-gray-400">
                Access hundreds of frequently asked interview questions.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="mt-2 text-gray-400">
                Get tips and insights from industry professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <div className="absolute w-full h-full hidden md:block bg-gradient-to-b to-black from-transparent z-[1] pointer-events-none" />

        <div className="w-full h-screen flex justify-center items-center pb-10 md:p-10 ">
          <img
            src={assets.image1}
            alt="Illustration"
            className="max-w-[90%] md:max-w-[60%] rounded-lg shadow-lg transition duration-500 hover:shadow-[0px_0px_100px_30px_rgba(255,255,0,0.2)] border border-white border-opacity-40 md:my-10 "
          />
        </div>
      </div>
    </>
  );
};

export default Background;
