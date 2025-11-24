import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase"; //  IMPORT FIREBASE AUTH

export default function Signup() {
  const navigate = useNavigate();
  // State to hold form input values and error message
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      //  FIREBASE SIGNUP CALL
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's profile with their full name
      await updateProfile(userCredential.user, {
        displayName: fullName
      });

      // If signup is successful, navigate to the login page
      alert("Account created successfully! Please log in.");
      navigate("/login"); 

    } catch (err) {
      console.error("Signup failed:", err.message);
      // Display a user-friendly error based on Firebase error codes
      let errorMessage = "Sign up failed. Please try again.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "This email address is already in use.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      }
      setError(errorMessage); 
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <p className="text-gray-600 mb-4">
        Register to create a new student account.
      </p>
      
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        {/* Full Name Input */}
        <input 
          type="text" 
          placeholder="Full Name" 
          className="border p-2 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Password (min 6 characters)" 
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Error Message */}
        {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
        
        {/* Sign Up Button */}
        <button 
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}