import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaDownload } from "react-icons/fa";

// Demo data
const videos = [
  { id: 1, title: "Physics - Laws of Motion", subject: "Physics", chapter: "Laws of Motion", thumbnail: "https://img.youtube.com/vi/0mH3eEOkZ3A/maxresdefault.jpg" },
  { id: 2, title: "Chemistry - Periodic Table", subject: "Chemistry", chapter: "Classification of Elements", thumbnail: "https://img.youtube.com/vi/Yy9q7Yx7nUw/maxresdefault.jpg" },
  { id: 3, title: "Maths - Trigonometry Basics", subject: "Mathematics", chapter: "Trigonometric Ratios", thumbnail: "https://img.youtube.com/vi/8uHztX0yYlY/maxresdefault.jpg" },
  { id: 4, title: "Biology - Cell Structure", subject: "Biology", chapter: "The Fundamental Unit of Life", thumbnail: "https://img.youtube.com/vi/QnQe0xW_JY4/maxresdefault.jpg" },
  { id: 5, title: "Physics - Work Energy Power", subject: "Physics", chapter: "Energy Concepts", thumbnail: "https://img.youtube.com/vi/pMV2g0VhJpA/maxresdefault.jpg" },
  { id: 6, title: "Chemistry - Chemical Bonding", subject: "Chemistry", chapter: "Bonding & Structure", thumbnail: "https://img.youtube.com/vi/CBT8eKaL-kg/maxresdefault.jpg" },
];

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Filtered videos list
  const filteredVideos = videos.filter((v) => {
    const matchSearch =
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSubject =
      selectedSubject === "All" || v.subject === selectedSubject;
    return matchSearch && matchSubject;
  });

  const subjects = ["All", "Physics", "Chemistry", "Mathematics", "Biology"];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">🎥 Video Lectures</h2>

        {/* 🔍 Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by topic or chapter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* 🧠 Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {subjects.map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedSubject === subj
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* 🎬 Video Cards */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group rounded-xl p-[2px] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 hover:shadow-2xl transition-all duration-500"
              >
                {/* Inner Card */}
                <div className="bg-white rounded-[10px] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-44 object-cover transition-all duration-500 ease-in-out group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <FaPlay className="text-white text-4xl drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {video.subject} • {video.chapter}
                    </p>

                    <button className="mt-4 flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 delay-100">
                      <FaDownload /> Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ❌ No Results */}
        {filteredVideos.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-center mt-12"
          >
            No videos found. Try another subject or search term.
          </motion.p>
        )}
      </div>
    </section>
  );
}
