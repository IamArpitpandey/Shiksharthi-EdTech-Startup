import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { user, logout } = useAuth();

  if (!user) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-28 px-6 relative">

      <button
        onClick={logout}
        className="absolute top-28 right-10 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Logout
      </button>

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900">
          Welcome {user.name} 👋
        </h1>

        <p className="text-gray-600 mt-2">
          Continue your learning journey with Shiksharthi
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-500 text-sm">Videos Watched</p>
            <h3 className="text-2xl font-bold mt-2 text-indigo-600">12</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-500 text-sm">Quizzes Attempted</p>
            <h3 className="text-2xl font-bold mt-2 text-indigo-600">8</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-500 text-sm">Notes Downloaded</p>
            <h3 className="text-2xl font-bold mt-2 text-indigo-600">5</h3>
          </div>

        </div>

      </div>
    </div>
  );
}