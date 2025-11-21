import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const videos = [
  {
    id: 1,
    title: "Physics - Laws of Motion",
    subject: "Physics",
    chapter: "Laws of Motion",
    thumbnail: "https://img.youtube.com/vi/0mH3eEOkZ3A/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Chemistry - Periodic Table",
    subject: "Chemistry",
    chapter: "Classification of Elements",
    thumbnail: "https://img.youtube.com/vi/Yy9q7Yx7nUw/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Maths - Trigonometry Basics",
    subject: "Mathematics",
    chapter: "Trigonometric Ratios",
    thumbnail: "https://img.youtube.com/vi/8uHztX0yYlY/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Biology - Cell Structure",
    subject: "Biology",
    chapter: "The Fundamental Unit of Life",
    thumbnail: "https://img.youtube.com/vi/QnQe0xW_JY4/hqdefault.jpg",
  },
];

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [modal, setModal] = useState({ open: false, video: null });
  const [activeTab, setActiveTab] = useState("summary");

  const subjects = ["All", "Physics", "Chemistry", "Mathematics", "Biology"];

  const filteredVideos = videos.filter((v) => {
    const matchSearch =
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSubject =
      selectedSubject === "All" || v.subject === selectedSubject;
    return matchSearch && matchSubject;
  });

  const openModal = (video) => setModal({ open: true, video });
  const closeModal = () => setModal({ open: false, video: null });

  return (
    <section className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-100 to-pink-50 text-gray-800">
      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 opacity-50 blur-[2px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.8 + 0.6,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * 500],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🌈 Enhanced Gradient Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-8rem] left-[-6rem] w-[450px] h-[450px] bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-400 rounded-full blur-[120px] opacity-70"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, scale: [1, 1.1, 1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1,
        }}
        className="absolute bottom-[-8rem] right-[-6rem] w-[400px] h-[400px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 rounded-full blur-[130px] opacity-60"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, scale: [1, 1.3, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2,
        }}
        className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-gradient-to-br from-amber-300 via-pink-300 to-blue-300 rounded-full blur-[100px] opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(79,70,229,0.25)]"
        >
          🎬 Video Lectures
        </motion.h2>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10 justify-center">
          <input
            type="text"
            placeholder="Search by topic or chapter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 border border-indigo-200 rounded-lg px-4 py-2 shadow-md focus:ring-2 focus:ring-indigo-300 outline-none bg-white/80 placeholder:text-gray-500 backdrop-blur-sm"
          />
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {subjects.map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${selectedSubject === subj
                  ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg"
                  : "bg-white hover:bg-indigo-50 text-gray-700 border border-gray-200"
                  }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {filteredVideos.map((video, index) => (
            <Tilt
              glareEnable
              glareMaxOpacity={0.25}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareColor="rgba(79,70,229,0.3)"
              className="rounded-2xl"
              key={video.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-white border border-indigo-100 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-2xl group-hover:brightness-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FaPlay className="text-indigo-500 text-5xl drop-shadow-lg animate-pulse" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {video.subject} • {video.chapter}
                  </p>

                  <button
                    onClick={() => openModal(video)}
                    className="w-full text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-2 rounded-lg hover:shadow-[0_0_10px_rgba(79,70,229,0.4)] transition-all duration-300"
                  >
                    🧠 Open AI Tools
                  </button>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>

      {/* 🧠 AI Modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-lg border border-indigo-100 shadow-[0_0_25px_rgba(79,70,229,0.3)] rounded-2xl w-[90%] max-w-md p-6 relative text-gray-800"
            >
              <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Learning Assistant
              </h3>

              {/* Tabs */}
              <div className="flex justify-center mb-4 gap-2">
                {["summary", "transcript", "flashcards"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-indigo-50"
                      }`}
                  >
                    {tab === "summary" && "🧠 Summary"}
                    {tab === "transcript" && "📜 Transcript"}
                    {tab === "flashcards" && "🪄 Flashcards"}
                  </button>
                ))}
              </div>

              {/* AI Reveal Cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-gray-700 leading-relaxed min-h-[140px] flex flex-col items-center text-center"
                >
                  {/* Loading Dots */}
                  <motion.div
                    className="flex items-center gap-1 justify-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  </motion.div>

                  {activeTab === "summary" && (
                    <div className="flex flex-col gap-3 w-full px-2">
                      {[
                        "Newton’s Laws explain how forces affect motion.",
                        "Law of Inertia: an object remains at rest or moves uniformly unless acted upon.",
                        "Force equals mass × acceleration (F = ma).",
                        "Action–Reaction pairs always exist simultaneously.",
                      ].map((text, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.4, duration: 0.5 }}
                          className="bg-white/80 border border-indigo-100 shadow-md p-3 rounded-xl hover:shadow-lg transition-all"
                        >
                          <p className="text-gray-800">{text}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "flashcards" && (
                    <div className="flex flex-col gap-3 w-full px-2">
                      {[
                        { q: "Q1. What is force?", a: "It is a push or pull acting on an object." },
                        { q: "Q2. Define inertia.", a: "Tendency of an object to resist change in motion." },
                        { q: "Q3. State Newton’s 3rd Law.", a: "Every action has an equal and opposite reaction." },
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.5, duration: 0.6 }}
                          className="bg-gradient-to-r from-indigo-50 to-pink-50 border border-indigo-200 shadow-sm p-3 rounded-xl hover:shadow-md"
                        >
                          <p className="font-semibold text-indigo-600">{card.q}</p>
                          <p className="text-gray-700 mt-1">{card.a}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "transcript" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-600 px-3 leading-relaxed"
                    >
                      [Transcript preview coming soon. AI will auto-generate the spoken content of this video
                      into readable text for accessibility.]
                    </motion.p>
                  )}

                  {/* ✨ Footer */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="mt-4 shimmer-text text-base"
                  >
                    ✨ Generated by Shiksharthi AI
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-indigo-700 text-lg"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
