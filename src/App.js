import React, { useState, useEffect } from "react";
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
import { onAuthStateChanged, signOut } from "firebase/auth"; //  Firebase functions
import { auth } from "./firebase"; //  Firebase auth object

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); 
  const [loading, setLoading] = useState(true); 

  //  FIREBASE STATE LISTENER
  useEffect(() => {
    // Listens for sign-in, sign-out, or session changes (like page refresh)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
        
        setUserRole("student"); 
      } else {
        // User is signed out
        setIsLoggedIn(false);
        setUserRole(null);
      }
      setLoading(false);
    });

    
    return () => unsubscribe();
  }, []); 

  // Function to handle login 
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  // Function to handle logout using Firebase
  const handleLogout = async () => {
    try {
        await signOut(auth); 
        
    } catch (error) {
        console.error("Error during logout:", error);
    }
  };

  
  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-xl text-indigo-600">Loading user session...</h1>
        </div>
    );
  }

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