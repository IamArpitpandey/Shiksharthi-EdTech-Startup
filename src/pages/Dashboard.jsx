import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends, FaClipboardCheck, FaBookOpen, FaChartLine, FaUsers, FaArrowRight, FaCommentDots } from "react-icons/fa";
import { Navigate } from "react-router-dom";

// --- Sub-components for each role ---

const StudentDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    {/* Hero area - align with home page gradients and CTA styles */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600">Here's your quick snapshot for today.</p>
        </div>
        <div className="flex gap-3">
          <a href="/videos" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 transition">Explore Videos</a>
          <a href="/quiz" className="border-2 border-indigo-400 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">Start Quiz</a>
        </div>
      </div>
    </div>
    <h1 className="text-4xl font-extrabold text-blue-700 flex items-center gap-3">
      <FaGraduationCap className="text-5xl" /> Student Learning Hub
    </h1>
    <p className="text-xl text-gray-600">
      Welcome! Here is your personalized roadmap to success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Progress */}
      <DashboardCard 
        title="My Learning Progress" 
        icon={<FaChartLine />} 
        color="bg-blue-600" 
        content="75% Completion in Physics. Streak: 12 days."
        linkText="View Analytics"
      />
      {/* Card 2: Assignments */}
      <DashboardCard 
        title="Pending Assignments" 
        icon={<FaClipboardCheck />} 
        color="bg-yellow-500" 
        content="2 overdue tasks. Maths Quiz due tomorrow."
        linkText="Go to Quizzes"
      />
      {/* Card 3: Resources */}
      <DashboardCard 
        title="Latest Videos" 
        icon={<FaBookOpen />} 
        color="bg-indigo-500" 
        content="New lecture on Chemical Bonding added today."
        linkText="Watch Now"
      />
    </div>

    {/* KPI Row */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <KPIStat title="Courses" value="5" subtitle="Enrolled" />
      <KPIStat title="Average" value="88%" subtitle="Score" />
      <KPIStat title="Assignments" value="2" subtitle="Pending" />
    </div>

    {/* Quick Access Section */}
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quick Access</h3>
      <div className="flex flex-wrap gap-4">
        <QuickButton text="Start Quiz" href="/quiz" icon={<FaClipboardCheck />} />
        <QuickButton text="Browse Library" href="/library" icon={<FaBookOpen />} />
        <QuickButton text="Message Teacher" href="#" icon={<FaCommentDots />} onClick={() => alert('Message teacher feature coming soon')} />
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <KPIStat title="Classes" value="3" subtitle="Active" />
      <KPIStat title="To-Grade" value="30" subtitle="Submissions" />
      <KPIStat title="Students" value="145" subtitle="Enrolled" />
    </div>
  </motion.div>
);

const TeacherDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    {/* Teacher hero with Home palette */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Teacher Dashboard</h2>
          <p className="text-gray-600">Overview of your classes and grading queue.</p>
        </div>
        <div className="flex gap-3">
          <a href="/quiz" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Start Quiz</a>
          <a href="/library" className="border-2 border-blue-600 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition">Open Library</a>
        </div>
      </div>
    </div>

    <h1 className="text-4xl font-extrabold text-indigo-700 flex items-center gap-3">
      <FaChalkboardTeacher className="text-5xl" /> Teacher Control Panel
    </h1>
    <p className="text-xl text-gray-600">
      Manage your classes, assignments, and student performance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Students */}
      <DashboardCard 
        title="Total Students" 
        icon={<FaUsers />} 
        color="bg-blue-600" 
        content="145 Students across 3 classes. 5 new sign-ups."
        linkText="View Roster"
      />
      {/* Card 2: Grading */}
      <DashboardCard 
        title="Pending Grading" 
        icon={<FaClipboardCheck />} 
        color="bg-yellow-500" 
        content="30 Math papers need review. 5 Quizzes awaiting."
        linkText="Start Grading"
      />
      {/* Card 3: Announcements */}
      <DashboardCard 
        title="Class Announcements" 
        icon={<FaCommentDots />} 
        color="bg-indigo-500" 
        content="Upcoming Parent-Teacher meeting on Friday."
        linkText="Send Message"
      />
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <KPIStat title="Child Courses" value="4" subtitle="Enrolled" />
      <KPIStat title="Progress" value="88%" subtitle="Average" />
      <KPIStat title="Messages" value="2" subtitle="Unread" />
    </div>
  </motion.div>
);

const ParentDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Parent Dashboard</h2>
          <p className="text-gray-600">Track your child's progress and messages.</p>
        </div>
        <div className="flex gap-3">
          <a href="/library" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Browse Resources</a>
          <button
            onClick={() => alert('Contact teachers feature coming soon')}
            className="border-2 border-blue-600 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Teachers
          </button>
        </div>
      </div>
    </div>

    <h1 className="text-4xl font-extrabold text-purple-700 flex items-center gap-3">
      <FaUserFriends className="text-5xl" /> Parent Engagement Portal
    </h1>
    <p className="text-xl text-gray-600">
      Track your child's progress and communicate with teachers.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Child Progress */}
      <DashboardCard 
        title="Child's Performance" 
        icon={<FaChartLine />} 
        color="bg-blue-600" 
        content="Average score: 88%. Needs focus in Science."
        linkText="Detailed Report"
      />
      {/* Card 2: Teacher Contact */}
      <DashboardCard 
        title="Contact Teacher" 
        icon={<FaCommentDots />} 
        color="bg-indigo-500" 
        content="Message all teachers in one place."
        linkText="Open Inbox"
      />
      {/* Card 3: School Calendar */}
      <DashboardCard 
        title="Upcoming Events" 
        icon={<FaBookOpen />} 
        color="bg-yellow-500" 
        content="Field trip permission slip due next week."
        linkText="View Calendar"
      />
    </div>
  </motion.div>
);

// --- Shared Components ---

const DashboardCard = ({ title, content, icon, color = "bg-blue-600", linkText }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition duration-300 card-glow"
  >
    <div className={`w-12 h-12 ${color} text-white rounded-full flex items-center justify-center text-xl mb-4`}> 
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-4">{content}</p>
    <button aria-label={`${linkText} for ${title}`} className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
      {linkText} <FaArrowRight className="text-xs" />
    </button>
  </motion.div>
);

const QuickButton = ({ text, href, icon, onClick }) => {
  const commonClasses = "bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-indigo-100 transition duration-150 shadow-sm";

  if (!href || href === "#") {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={commonClasses}
        aria-label={text}
        onClick={onClick}
      >
        {icon} {text}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={commonClasses}
      aria-label={text}
    >
      {icon} {text}
    </motion.a>
  );
};

const KPIStat = ({ title, value, subtitle }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-start gap-1">
    <p className="text-sm text-gray-500">{title}</p>
    <div className="flex items-baseline gap-2">
      <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <div className="mt-2 text-xs text-gray-400">Updated today</div>
  </div>
);

// --- Main Dashboard Component ---

export default function Dashboard({ isLoggedIn, userRole }) {
  // 1. Check if user is logged in
  if (!isLoggedIn || !userRole) {
    // If not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // 2. Render the dashboard based on the user's role
  const renderDashboard = () => {
    switch (userRole) {
      case "student":
        return <StudentDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      case "parent":
        return <ParentDashboard />;
      default:
        // Fallback for an unknown role
        return (
          <div className="text-center p-10 bg-red-50 border border-red-200 rounded-lg">
            <h2 className="text-2xl font-bold text-red-600">
              Role Not Recognized
            </h2>
            <p className="text-red-500 mt-2">
              Please log in again with a valid user role.
            </p>
          </div>
        );
    }
  };

  return (
    <section className="min-h-[70vh] py-10">
      {renderDashboard()}
    </section>
  );
}
