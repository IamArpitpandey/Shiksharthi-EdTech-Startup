import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleRoleLogin = (role) => {
    if (onLogin) onLogin(role);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <p className="text-gray-600 mb-4">
        This is a placeholder login page. Use a quick role button to preview the dashboard.
      </p>

      <div className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button
          type="button"
          onClick={() => handleRoleLogin("student")}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login as Student (demo)
        </button>

        <div className="mt-3 text-center text-sm text-gray-500">Or quickly preview as:</div>
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            onClick={() => handleRoleLogin("student")}
            className="flex-1 bg-indigo-500 text-white py-2 rounded hover:opacity-90"
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => handleRoleLogin("teacher")}
            className="flex-1 bg-green-600 text-white py-2 rounded hover:opacity-90"
          >
            Teacher
          </button>
          <button
            type="button"
            onClick={() => handleRoleLogin("parent")}
            className="flex-1 bg-purple-600 text-white py-2 rounded hover:opacity-90"
          >
            Parent
          </button>
        </div>
      </div>
    </div>
  );
}
