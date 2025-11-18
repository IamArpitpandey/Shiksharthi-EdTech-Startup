import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login({ onLogin, isLoggedIn }) {
  const [selectedRole, setSelectedRole] = useState("student"); // Default role
  const navigate = useNavigate();

  // Redirect if already logged in
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would validate credentials here.
    // For this demo, we simulate a successful login based on the selected role.
    onLogin(selectedRole);

    // Redirect to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">👋 Welcome Back</h2>
      <p className="text-gray-600 mb-6 text-center">
        Select your role to view the personalized dashboard experience.
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleLoginSubmit}>
        {/* Role Selector */}
        <div className="flex justify-around bg-gray-50 p-2 rounded-xl border border-gray-200">
          {["student", "teacher", "parent"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`flex-1 py-2 capitalize font-semibold rounded-lg transition-all duration-200 ${
                selectedRole === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Placeholder Inputs */}
        <input 
          type="email" 
          placeholder="Email" 
          defaultValue="user@example.com"
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          defaultValue="password"
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
          required
        />

        <button 
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
        </button>
      </form>
    </div>
  );
}