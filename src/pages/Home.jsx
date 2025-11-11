import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <section className="pt-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Learn faster. Score higher.</h1>
          <p className="mt-4 text-gray-600 text-lg">Recorded & live classes, notes, quizzes and AI tools — sab ek jagah. Start your learning roadmap today.</p>
          <div className="mt-6 flex gap-4">
            <Link to="/videos" className="btn-primary">Explore Videos</Link>
            <Link to="/signup" className="btn-outline">Get Started</Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <div className="font-semibold">Videos</div>
              <div>Recorded + Live</div>
            </div>
            <div>
              <div className="font-semibold">Notes</div>
              <div>Handwritten + PDFs</div>
            </div>
            <div>
              <div className="font-semibold">Quizzes</div>
              <div>Adaptive tests</div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="h-56 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Placeholder for hero image / mock video
            </div>
            <div className="mt-4 text-sm text-gray-500">Demo: Use this area to show featured class or promo.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
