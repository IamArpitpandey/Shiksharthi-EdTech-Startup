import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// images
import student1 from "./assets/student1.png";
import student2 from "./assets/student2.png";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      {/* ---------------------------------------------------------------- */}
      {/* ⭐ HERO SECTION (student ask/reply) */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative overflow-hidden min-h-[85vh] bg-gradient-to-br from-white via-gray-50 to-indigo-50 select-none flex items-center">

        {/* soft blobs */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[320px] h-[320px] rounded-full bg-indigo-200 blur-[140px] opacity-20"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-purple-200 blur-[140px] opacity-20"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 11, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Learn Smarter,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Grow Faster
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Join <strong>Shiksharthi</strong> — your AI-powered learning
              companion. Recorded & live classes, curated notes, quizzes,
              and smart dashboards — all in one place.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-4 text-xl font-medium text-gray-700"
            >
              <Typewriter
                words={[
                  "Smart Video Summaries 📘",
                  "AI Flashcards 🧠",
                  "Personal Dashboard 📊",
                  "Adaptive Quizzes 🎯",
                ]}
                loop
                cursor
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex gap-4 mt-8"
            >
              <button className="px-7 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:scale-105 transition">
                🚀 Get Started
              </button>

              <button className="px-7 py-3 rounded-xl border border-indigo-300 bg-white text-indigo-700 hover:bg-indigo-50 hover:scale-105 transition">
                🎥 Explore Videos
              </button>
            </motion.div>
          </div>

          {/* RIGHT — STUDENT ASK/ANSWER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            {/* big circle */}
            <div className="absolute w-[360px] h-[360px] bg-white/70 backdrop-blur-xl rounded-full shadow-xl border border-gray-200 overflow-hidden flex items-center justify-center">
              <img
                src="/logo192.png"
                alt="Shiksharthi Logo"
                className="w-44 h-44 opacity-90"
              />
            </div>

            {/* student ask */}
            <motion.div
              className="absolute left-0 top-8 flex flex-col items-center"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src={student1}
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />

              <div className="mt-3 bg-black text-white shadow-md px-5 py-2 rounded-2xl text-sm">
                Why Shiksharthi?
              </div>
            </motion.div>

            {/* student reply */}
            <motion.div
              className="absolute right-0 bottom-10 flex flex-col items-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src={student2}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-3 bg-black text-white shadow-md px-6 py-2 rounded-2xl text-sm">
                Because we make learning 10× smarter with AI!
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ⭐ SECTION 2 — WHY SHIKSHARTHI (full proper section below hero) */}
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      {/* ⭐ CENTERED WHY SHIKSHARTHI SECTION (FULL HORIZONTAL) */}
      {/* ---------------------------------------------------------------- */}

      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50 overflow-hidden text-center">

        <div className="container mx-auto px-6 relative z-10 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Shiksharthi?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Because Shiksharthi helps students understand faster, revise smarter,
              and stay motivated using modern AI-driven learning tools — making
              education simple, adaptive, and effective.
            </p>

            {/* Bullet Points */}
            <ul className="mt-10 space-y-4 text-gray-700 text-left mx-auto w-fit">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                AI-based summaries for quick revision
              </li>

              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                Personal flashcards based on weaknesses
              </li>

              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                Smart performance dashboard
              </li>

              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                Recorded + Live classes for complete concept clarity
              </li>
            </ul>

          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* ⭐ SECTION 3 – HOW SHIKSHARTHI WORKS */}
      {/* -------------------------------------------------------------- */}

      <section className="py-24 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 overflow-hidden">

        <div className="container mx-auto px-6 max-w-5xl text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Shiksharthi Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Your learning journey is designed to be fast, smart and effective —
            powered by AI.
          </motion.p>

          {/* 3 STEPS */}
          <div className="mt-16 grid md:grid-cols-3 gap-12">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
                <img src="/logo192.png" className="w-10 opacity-80" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">1. Learn</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Watch recorded or live classes designed for board exams,
                JEE/NEET and foundation levels.
              </p>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-3xl">🧠</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">2. Revise with AI</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Get instant summaries, flashcards and automatic transcripts
                created using our AI engine.
              </p>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                3. Track & Improve
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Smart dashboard tells your weak areas, strengths and suggests
                what to study next.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
