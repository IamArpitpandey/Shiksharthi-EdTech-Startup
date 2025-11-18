import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSignOutAlt, FaUser } from "react-icons/fa";

export default function Navbar({ isLoggedIn, userRole, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Define links based on login status
  const baseLinks = [
    { name: "Videos", path: "/videos" },
    { name: "Library", path: "/library" },
    { name: "Quizzes", path: "/quiz" },
  ];
  
  // Add Dashboard if logged in
  const navLinks = isLoggedIn 
    ? [...baseLinks, { name: "Dashboard", path: "/dashboard" }] 
    : baseLinks;

  const handleLogout = () => {
    onLogout();
    setMenuOpen(false); // Close mobile menu
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-semibold text-gray-800">Shiksharthi</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                 <FaUser className="text-blue-600"/> 
                 <span className="capitalize">{userRole}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition flex items-center gap-2"
              >
                <FaSignOutAlt /> Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-blue-600">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner animate-fadeIn">
          <div className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaUser className="text-blue-600"/> 
                    <span className="capitalize">{userRole}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                >
                  <FaSignOutAlt /> Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-600 font-semibold"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}