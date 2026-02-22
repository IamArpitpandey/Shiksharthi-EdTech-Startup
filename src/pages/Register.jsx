// pages/Register.jsx

import { useState } from "react";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    class: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // backend API call here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        />

        <select
          name="class"
          className="w-full p-3 border rounded-lg"
          onChange={handleChange}
        >
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="12">Class 12</option>
        </select>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Register
        </button>

      </form>
    </div>
  );
}
