import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Library from "./pages/Library";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  // Global state for authentication and user role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'student', 'teacher', or 'parent'

  // Function to handle login and set the role
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} onLogout={handleLogout} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route
            path="/library"
            element={<Library isLoggedIn={isLoggedIn} userRole={userRole} />}
          />
          <Route
            path="/quiz"
            element={<Quiz isLoggedIn={isLoggedIn} userRole={userRole} />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                isLoggedIn={isLoggedIn}
                userRole={userRole}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onLogin={handleLogin}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
