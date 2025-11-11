import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">S</div>
          <div className="text-lg font-semibold">Shiksharthi</div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/videos" className="hover:text-black">Videos</Link>
          <Link to="/library" className="hover:text-black">Library</Link>
          <Link to="/quiz" className="hover:text-black">Quizzes</Link>
          <Link to="/dashboard" className="hover:text-black">Dashboard</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm px-3 py-2">Log in</Link>
          <Link to="/signup" className="btn-primary text-sm">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}