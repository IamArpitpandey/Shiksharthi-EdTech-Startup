import React from "react";

export default function Signup() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <p className="text-gray-600 mb-4">
        This is a placeholder signup page. We'll add backend later.
      </p>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Full Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}
