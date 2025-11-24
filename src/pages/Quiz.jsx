import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight, FaSearch, FaPlay } from "react-icons/fa";
import { Navigate, Link } from "react-router-dom";

// Clean, single Quiz module aligned to the Home theme

const QuizCard = ({ title, description, color = "bg-indigo-600", link = "/quiz/start" }) => (
  <motion.div whileHover={{ y: -4 }} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex flex-col h-full">
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 ${color} text-white rounded-lg flex items-center justify-center text-xl`}><FaPlay /></div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
      <Link to={link} className="text-sm font-medium text-indigo-600 flex items-center gap-2">Start <FaChevronRight className="text-xs" /></Link>
      <span className="text-xs text-gray-400">15 mins</span>
    </div>
  </motion.div>
);

const StudentQuiz = ({ quizzes }) => {
  const [query, setQuery] = useState("");
  const filtered = quizzes.filter(q => q.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-md border border-indigo-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Quick Quiz Center</h2>
            <p className="text-gray-600">Pick a quiz, practice adaptively, or resume where you left off.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/quiz/next" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600">Resume Next</Link>
            <Link to="/quiz/adaptive" className="border-2 border-indigo-400 text-indigo-700 px-4 py-2 rounded-lg">Adaptive Practice</Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-3 text-gray-400"><FaSearch /></div>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search quizzes, topics or skills..." className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 bg-white" />
            </div>
            <div className="w-40 text-right">
              <div className="text-sm text-gray-500">Avg time</div>
              <div className="text-lg font-semibold">12m</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800">Available Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(q => <QuizCard key={q.id} title={q.title} description={q.description} color={q.color} link={`/quiz/${q.id}`} />)}
            {filtered.length === 0 && <div className="text-sm text-gray-500">No quizzes found.</div>}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Progress</p>
                <div className="text-xl font-bold">75%</div>
              </div>
              <div className="w-36 h-6 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-400">Streak: 12 days</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-800">Upcoming</h4>
            <p className="text-sm text-gray-500 mt-2">Maths Quiz — Tomorrow 8:00 PM</p>
            <button className="mt-3 w-full px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white">Set Reminder</button>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

const TeacherQuiz = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-md border border-indigo-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Assessments</h2>
          <p className="text-gray-600">Create and manage quizzes for your classes.</p>
        </div>
        <div>
          <Link to="/quiz/builder" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600">Create Quiz</Link>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">Teacher tools coming soon.</div>
  </motion.div>
);

const ParentQuiz = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-md border border-indigo-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Child Assessment Review</h2>
          <p className="text-gray-600">View recent scores and upcoming assessments.</p>
        </div>
        <div>
          <Link to="/dashboard" className="border-2 border-indigo-400 text-indigo-700 px-4 py-2 rounded-lg">Dashboard</Link>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">Parent insights coming soon.</div>
  </motion.div>
);

// Example mock quizzes
const mockQuizzes = [
  { id: 1, title: 'Trigonometry Practice', description: '10 questions — timed', color: 'bg-indigo-500' },
  { id: 2, title: 'Chemical Bonding Quiz', description: '15 questions — graded', color: 'bg-indigo-500' },
  { id: 3, title: 'Kinematics Adaptive', description: 'Adaptive practice for motion', color: 'bg-indigo-500' },
  { id: 4, title: 'Grammar Quick Drill', description: '5 quick questions', color: 'bg-indigo-500' },
];

export default function Quiz({ isLoggedIn, userRole }) {
  if (!isLoggedIn || !userRole) return <Navigate to="/login" replace />;

  if (userRole === 'student') return <section className="min-h-[70vh] py-10 px-4"><StudentQuiz quizzes={mockQuizzes} /></section>;
  if (userRole === 'teacher') return <section className="min-h-[70vh] py-10 px-4"><TeacherQuiz /></section>;
  return <section className="min-h-[70vh] py-10 px-4"><ParentQuiz /></section>;
}
