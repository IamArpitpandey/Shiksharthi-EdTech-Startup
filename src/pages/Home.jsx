import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      {/* Floating gradient blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[-5rem] left-[-5rem] w-[400px] h-[400px] bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: TEXT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Learn smarter,  
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 text-transparent bg-clip-text">
              achieve higher.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Join <strong>Shiksharthi</strong> — your AI-powered learning
            companion. Recorded & live classes, curated notes, quizzes, and
            smart dashboards — all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              to="/videos"
              className="bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition-all duration-300"
            >
              <FaPlayCircle /> Explore Videos
            </Link>
            <Link
              to="/signup"
              className="border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: DEMO VIDEO / IMAGE CARD */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="h-64 w-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex flex-col justify-center items-center">
            <FaPlayCircle className="text-5xl text-blue-500 mb-2 animate-pulse" />
            <p className="text-gray-500">Watch sample lecture</p>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            “Every concept explained visually with clarity.”
          </p>
          <div className="absolute -bottom-5 right-5 bg-white shadow-md rounded-full p-3 hover:translate-x-1 transition-all duration-300 cursor-pointer">
            <FaArrowRight className="text-blue-600 text-xl" />
          </div>
        </motion.div>
      </div>

      {/* Floating shape right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-[-5rem] right-[-5rem] w-[350px] h-[350px] bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30"
      ></motion.div>
    </section>
  );
}
