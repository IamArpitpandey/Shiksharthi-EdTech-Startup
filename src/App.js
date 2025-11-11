import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Library from "./pages/Library";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";      // ✅ add this
import Signup from "./pages/Signup";    // ✅ add this

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/library" element={<Library />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />        {/* ✅ new route */}
          <Route path="/signup" element={<Signup />} />      {/* ✅ new route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
