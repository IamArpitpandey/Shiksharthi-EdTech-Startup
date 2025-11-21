import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-gray-300 border-t border-indigo-300">
      <div className="container mx-auto px-6 py-6 flex flex-col items-center justify-center text-center">
        {/* Brand */}
        <h3 className="text-xl font-bold text-white mb-1">Shiksharthi</h3>
        <p className="text-sm text-gray-400 mb-3">
          Empowering Students through Smart AI Learning
        </p>

        {/* 🌐 Social Media Links */}
        <div className="flex gap-6 text-3xl mb-3">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[#1877F2] hover:brightness-125 transition-all"
          >
            <FaFacebookSquare />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[#E4405F] hover:brightness-125 transition-all"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[#0A66C2] hover:brightness-125 transition-all"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-[#1DA1F2] hover:brightness-125 transition-all"
          >
            <FaTwitterSquare />
          </motion.a>
        </div>

        {/* Divider Line */}
        <motion.div
          className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-3"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Shiksharthi EdTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
