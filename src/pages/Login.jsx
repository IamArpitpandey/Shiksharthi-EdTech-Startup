import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // IMPORT FIREBASE AUTH

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  // State to hold form input values and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const USER_ROLE = "student"; 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      //  FIREBASE LOGIN CALL
      await signInWithEmailAndPassword(auth, email, password);
      
      
      if (onLogin) onLogin(USER_ROLE); 
      
      
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err.message);
      // Display a user-friendly error message
      setError("Login failed. Check your email and password."); 
    } finally {
        setIsLoading(false);
    }
  };

  // Keep the demo login buttons for quick testing
  const handleRoleLoginDemo = (role) => {
    if (onLogin) onLogin(role);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <p className="text-gray-600 mb-4">
        Log in with a real account or use a demo button below.
      </p>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
          placeholder="Password" 
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {/* Error Message */}
        {error && <div className="text-red-600 text-sm mt-1">{error}</div>}

        {/* Login Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? "Logging In..." : "Login"}
        </button>
      </form>

      {/* Demo buttons remain below the main form */}
      <div className="mt-3 text-center text-sm text-gray-500">Or quickly preview as:</div>
      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={() => handleRoleLoginDemo("student")}
          className="flex-1 bg-indigo-500 text-white py-2 rounded hover:opacity-90"
        >
          Student (Demo)
        </button>
        <button
          type="button"
          onClick={() => handleRoleLoginDemo("teacher")}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:opacity-90"
        >
          Teacher (Demo)
        </button>
        <button
          type="button"
          onClick={() => handleRoleLoginDemo("parent")}
          className="flex-1 bg-purple-600 text-white py-2 rounded hover:opacity-90"
        >
          Parent (Demo)
        </button>
      </div>
    </div>
  );
}