import { useState } from "react";
import {
  SlidersHorizontal,
  UserRound,
  ShoppingBag,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#f7efe5]/95 via-[#f3e4d7]/95 to-[#f7efe5]/95 backdrop-blur-md border-b border-[#d8c2ad] shadow-md relative">

      {/* Decorative Floral Elements */}
      <div className="absolute left-3 top-4 text-pink-400 text-xl opacity-80 select-none">
        ✿ ✿
      </div>
      <div className="absolute right-3 top-4 text-pink-400 text-xl opacity-80 select-none">
        ✿ ✿
      </div>

      {/* Top Navbar */}
      <div className="flex items-center justify-between px-8 py-4 relative z-10">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <SlidersHorizontal
            size={25}
            strokeWidth={2.5}
            className="cursor-pointer text-[#6d4c41] hover:text-[#b76e79] transition-all duration-300 hover:scale-110"
          />

          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-base font-semibold text-[#4b2e2e] tracking-wide">
              WOMEN
            </span>
            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          </div>
        </div>

        {/* Center Logo */}
        <div
          className="text-2xl font-semibold text-black whitespace-nowrap"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "0.12em",
          }}
        >
          CROWN & SHINE
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5 relative">

          {/* Search */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className={`absolute right-12 top-1/2 -translate-y-1/2 rounded-full border border-[#d8c2ad] bg-white/95 pl-4 pr-4 py-2 text-sm shadow-lg outline-none transition-all duration-500 ${
                showSearch
                  ? "w-56 opacity-100"
                  : "w-0 opacity-0 px-0 border-0"
              }`}
            />

            <Search
              size={24}
              strokeWidth={2.5}
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer text-[#4b2e2e] hover:text-[#b76e79] transition-all duration-300 hover:scale-110"
            />
          </div>

          {/* User */}
          <UserRound
            size={24}
            strokeWidth={2.5}
            className="cursor-pointer text-[#4b2e2e] hover:text-[#b76e79] transition-all duration-300 hover:scale-110"
          />

          {/* Shopping Bag */}
          <ShoppingBag
            size={24}
            strokeWidth={2.5}
            className="cursor-pointer text-[#4b2e2e] hover:text-[#b76e79] transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
    </nav>
  );
}