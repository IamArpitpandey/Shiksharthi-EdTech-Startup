import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; 

export default function Navbar() {
  const currentLocation = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Videos", path: "/videos" },
    { name: "Library", path: "/library" },
    { name: "Quiz", path: "/quiz" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-indigo-100 shadow-sm"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* 🎓 Shiksharthi Logo */}
        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-wide">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-lg"
          >
            <GraduationCap className="text-white w-6 h-6 drop-shadow-md" strokeWidth={2.5} />
            <div className="absolute -bottom-1 w-full h-[3px] bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full blur-[1px]" />
          </motion.div>

          <div className="flex flex-col leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-2xl font-extrabold">
              Shiksharthi
            </span>
            <span className="text-xs text-gray-500 tracking-widest uppercase">EdTech</span>
          </div>
        </Link>

        {/* 🌈 Stylish Navbar Buttons */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => {
            const isActive = currentLocation.pathname === link.path;

            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {link.name}
                </Link>

                {/* 🌈 Animated underline */}
                <motion.span
                  layoutId={isActive ? "activeUnderline" : undefined}
                  className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  } transition-opacity duration-300`}
                ></motion.span>
              </motion.div>
            );
          })}
        </div>

        {/* 🔘 Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm border border-indigo-400 rounded-lg hover:bg-indigo-50 transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 shadow-md"
          >
            Sign up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
