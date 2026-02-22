import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// images
import student1 from "./assets/student1.png";
import student2 from "./assets/student2.png";
import logo1 from "./assets/logo1.jpg";

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

            {/* BIG CENTER CIRCLE */}
            <div className="absolute w-[360px] h-[360px] bg-white/70 backdrop-blur-xl rounded-full shadow-xl border border-gray-200 flex items-center justify-center">

              {/* Inner Logo Circle */}
              <div className="w-[260px] h-[260px] rounded-full overflow-hidden shadow-lg">
                <img
                  src={logo1}
                  alt="Shiksharthi Logo"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>


            {/* LEFT STUDENT (ASK) */}
            <motion.div
              className="absolute -left-6 top-12 flex flex-col items-center"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src={student1}
                alt="Student avatar asking a question"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />

              <div className="mt-3 bg-black text-white shadow-md px-6 py-2 rounded-2xl text-sm">
                Why Shiksharthi?
              </div>
            </motion.div>

            {/* RIGHT STUDENT (REPLY) */}
            <motion.div
              className="absolute -right-6 bottom-12 flex flex-col items-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src={student2}
                alt="Student avatar replying"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />

              <div className="mt-3 bg-black text-white shadow-md px-6 py-2 rounded-2xl text-sm text-center max-w-[220px]">
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
                <img src="/logo192.png" alt="Shiksharthi logo" className="w-10 opacity-80" />
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
      {/* ---------------------------------------------------------------- */}
      {/* ⭐ SECTION 4 — FEATURES GRID */}
      {/* ---------------------------------------------------------------- */}

      <section className="py-24 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40">
        <div className="container mx-auto px-6 text-center max-w-6xl">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Everything You Need in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              One Platform
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Shiksharthi brings learning, revision, testing, and AI tools together —
            designed for students, teachers, and parents.
          </motion.p>

          {/* GRID */}
          <div className="mt-16 grid md:grid-cols-3 gap-10">

            {/* Feature Card */}
            {[
              {
                title: "🎥 Video Lectures",
                desc: "HD recorded + live classes with AI summaries.",
                color: "from-indigo-500 to-purple-500",
                link: "/videos",
              },
              {
                title: "📚 Notes & Library",
                desc: "Handwritten notes, PDFs, PYQs & more.",
                color: "from-blue-500 to-indigo-500",
                link: "/library",
              },
              {
                title: "⚡ AI Study Tools",
                desc: "Summaries, transcripts, flashcards — auto generated.",
                color: "from-purple-500 to-pink-500",
                link: "/videos",
              },
              {
                title: "📝 Quizzes & Tests",
                desc: "Adaptive quizzes & full-length tests.",
                color: "from-rose-500 to-purple-500",
                link: "/quiz",
              },
              {
                title: "📊 Smart Dashboard",
                desc: "Track progress, weaknesses & study suggestions.",
                color: "from-green-500 to-emerald-500",
                link: "/dashboard",
              },
              {
                title: "💬 Doubt Support",
                desc: "Ask questions & get instant AI-help.",
                color: "from-orange-500 to-red-500",
                link: "/dashboard",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-3xl shadow-md mx-auto`}
                >
                  {feature.title.split(" ")[0]}
                </div>

                <h3 className="text-xl font-bold mt-6 text-gray-900 group-hover:text-indigo-600 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">{feature.desc}</p>

                {/* button */}
                <a
                  href={feature.link}
                  className="inline-block mt-5 text-indigo-600 font-semibold text-sm group-hover:underline"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ⭐ SECTION 5 — STUDENT TESTIMONIALS */}
      {/* ---------------------------------------------------------------- */}

      <section className="py-24 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 overflow-hidden">

        <div className="container mx-auto px-6 max-w-6xl text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Thousands of Students
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Shiksharthi learners across India are loving their smarter learning experience.
          </motion.p>

          {/* Reviews Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-10">

            {[
              {
                name: "Ravi Kumar",
                feedback: "The AI summaries save me HOURS before exams. Love this platform!",
                dp: "https://i.pravatar.cc/150?img=13",
              },
              {
                name: "Khushi Sharma",
                feedback:
                  "Flashcards & quizzes helped me improve my score from 72% to 88%! Best app ever ❤️",
                dp: "https://i.pravatar.cc/150?img=32",
              },
              {
                name: "Aman Gupta",
                feedback:
                  "Notes + PYQs + video lectures in one place. Perfect for CBSE students!",
                dp: "https://i.pravatar.cc/150?img=21",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* DP */}
                <img
                  src={review.dp}
                  alt={review.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                />

                {/* Name */}
                <h3 className="text-xl font-semibold mt-5 text-gray-900">
                  {review.name}
                </h3>

                {/* Stars */}
                <p className="text-yellow-500 text-lg mt-1">★★★★★</p>

                {/* Feedback */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  “{review.feedback}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ⭐ SECTION 6 — CTA BANNER (JOIN SHIKSHARTHI) */}
      {/* ---------------------------------------------------------------- */}

      <section className="py-20 relative overflow-hidden">

        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 opacity-60 blur-[60px]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative container mx-auto px-6"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Ready to Transform Your Learning?
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of students who study smarter with Shiksharthi.
              AI-powered notes, summaries, quizzes, and a lot more — all in one place.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="/signup"
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-white text-indigo-700 shadow-md hover:shadow-lg hover:scale-[1.05] transition transform"
              >
                🚀 Join Shiksharthi Now
              </a>
            </div>

            {/* Secondary text */}
            <p className="mt-4 opacity-80 text-sm">
              No credit card required • Free for all students
            </p>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ⭐ SECTION 7 — AI TOOLS + STATS + APP DOWNLOAD (MERGED SUPER SECTION) */}
      {/* ---------------------------------------------------------------- */}

      <section className="py-28 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/30 overflow-hidden">

        {/* ------------------- AI Tools Deep Dive ------------------- */}
        <div className="container mx-auto px-6 max-w-6xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Smart AI Tools
            </span>
          </motion.h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Shiksharthi uses advanced AI to upgrade your learning experience.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            {[
              {
                icon: "🧠",
                title: "AI Summaries",
                desc: "Instantly condenses long lectures into short summaries.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "🪄",
                title: "Flashcards Generator",
                desc: "Creates key questions automatically from your videos.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "📜",
                title: "Auto Transcript",
                desc: "Full lecture converted into clean written text.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: "🤖",
                title: "Doubt Solver AI",
                desc: "Ask any question — get instant answers.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "🎯",
                title: "Adaptive Quiz",
                desc: "AI picks questions based on your weak topics.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🔍",
                title: "Smart Library Search",
                desc: "Find notes, books and PYQs instantly with AI.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tool.color} text-white flex items-center justify-center text-3xl shadow-md`}
                >
                  {tool.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6 text-gray-900">
                  {tool.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------- STATS COUNTER ------------------- */}

        <div className="mt-28 container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-extrabold text-gray-900"
          >
            Shiksharthi in{" "}
            <span className="text-indigo-600">Numbers</span>
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-4 gap-10 text-center">
            {[
              { value: "10,000+", label: "Students" },
              { value: "1,200+", label: "AI Summaries Generated" },
              { value: "8,000+", label: "Videos Watched" },
              { value: "5,000+", label: "Notes Downloaded" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">
                  {stat.value}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------- APP DOWNLOAD BANNER ------------------- */}

        <div className="mt-28 container mx-auto px-6 max-w-6xl">

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              Shiksharthi App is Coming Soon 📱
            </motion.h2>

            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Learn anywhere, anytime — with a smoother, faster experience.
            </p>

            <div className="mt-8 flex justify-center">
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:scale-[1.05] transition">
                🚀 Get Notified
              </button>
            </div>

            {/* subtle glow */}
            <div className="absolute inset-0 bg-white opacity-10 blur-[100px]"></div>
          </div>

        </div>
      </section>
    </div>
  );
}
