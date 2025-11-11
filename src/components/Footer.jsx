import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-6 flex items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Shiksharthi. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  )
}
