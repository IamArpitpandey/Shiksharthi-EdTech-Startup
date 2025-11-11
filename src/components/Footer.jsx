import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Shiksharthi • Empowering Education</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy" className="hover:text-blue-600">Privacy</a>
          <a href="/terms" className="hover:text-blue-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
