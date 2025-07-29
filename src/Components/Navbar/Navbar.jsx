import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const ClickToHome = (movie) => {
    navigate("/");
  };
  const ClickToBollywood = (movie) => {
    navigate("/bollywood");
  };
  const ClickToHollywood = (movie) => {
    navigate("/hollywood");
  };
  const ClickToAnimation = (movie) => {
    navigate("/animation");
  };
  const ClickToSouthindian = (movie) => {
    navigate("/southindian");
  };
  return (
    <div className="bg-[#1E293B] w-full rounded-t-md px-4 py-3 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-indigo-400 text-2xl font-bold">
            {/* Placeholder for logo */}
            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10h2a8 8 0 0116 0h2c0-5.523-4.477-10-10-10zM2 10c0 4.418 3.582 8 8 8a8 8 0 008-8h-2a6 6 0 11-12 0H2z" />
            </svg> */}
            <p className="text-red-500">SeeHDMovie</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-1/6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Icons */}
        {/* <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div> */}
      </div>

      {/* Bottom Nav */}
      <div className="flex mt-4 space-x-6 text-[#c5ebff] font-medium">
        <button
          className="px-3 py-1 bg-[#0F172A] rounded-md cursor-pointer"
          onClick={() => ClickToHome()}
        >
          Home
        </button>
        <button
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => ClickToBollywood()}
        >
          Bollywood Movies
        </button>
        <button
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => ClickToHollywood()}
        >
          Hollywood Movies
        </button>
        <button
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => ClickToSouthindian()}
        >
          South Indian Dubbed
        </button>
        <button
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => ClickToAnimation()}
        >
          Animation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
