import { Link } from "react-router-dom";
import { LogIn, UserPlus, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../pages/assets/logo1.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">

      <div className="px-6 py-4 flex justify-between items-center">

        {/* ===== Left Brand Section ===== */}
        <Link to="/" className="flex items-center gap-3 group">

          {/* Circle Logo */}
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-md ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition duration-300">
            <img
              src={logo}
              alt="Shiksharthi Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Premium Brand Text */}
          <span className="text-2xl font-bold tracking-tight text-indigo-700 hover:text-indigo-600 transition duration-300">
  Shiksharthi
</span>


        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200"
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-700 to-violet-600 text-white hover:scale-105 transition duration-200 shadow-lg"
          >
            <UserPlus size={18} />
            Register
          </Link>

        </div>

        {/* ===== Mobile Toggle ===== */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-indigo-700 font-medium"
            >
              <UserPlus size={18} />
              Register
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
