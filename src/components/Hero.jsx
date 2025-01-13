import React from "react";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/ask-to-ai");
  };
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center text-white text-center">
      <div className="animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 text-black tracking-wide drop-shadow-lg">
          Welcome to <span className="text-blue-300">Think.ai Bot</span>
        </h1>
        <p className="text-lg mb-8 text-gray-600 opacity-90">
          Your intelligent assistant for every need!
        </p>

        <button
          onClick={
            handleGetStarted
          }
          className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">
                Let's get started
              </span>
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </span>
        </button>
        <p className="mt-6 text-sm text-red-400 italic">
          Your feedback helps us grow! 🌟
        </p>
      </div>
    </section>
  );
};

export default Hero;
