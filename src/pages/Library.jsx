import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { Navigate, Link } from "react-router-dom";

// Magazine / Mosaic-style Library — visually distinct from Dashboard/Home

const mockResources = [
  { id: 1, title: 'Trigonometry Formulas', description: 'A compact cheat-sheet of trig identities and transforms.', subject: 'Mathematics', type: 'Notes', color: 'from-amber-400 to-amber-600' },
  { id: 2, title: 'Genetics: Mendel’s Laws', description: 'Clear summary + worked problems.', subject: 'Biology', type: 'PDF', color: 'from-rose-400 to-rose-600' },
  { id: 3, title: 'Chemical Bonding: Visuals', description: 'Animated explainer video and notes.', subject: 'Chemistry', type: 'Video', color: 'from-fuchsia-400 to-fuchsia-600' },
  { id: 4, title: 'Cold War: Interactive Maps', description: 'Maps and timeline overlays for quick revision.', subject: 'History', type: 'Interactive', color: 'from-amber-300 to-amber-500' },
  { id: 5, title: 'Poetry Close-Reading', description: 'Annotated examples and practice prompts.', subject: 'English', type: 'Guide', color: 'from-emerald-400 to-emerald-600' },
  { id: 6, title: 'Past Exam Paper: 2019', description: 'Full paper with marking scheme.', subject: 'Mathematics', type: 'Exam', color: 'from-sky-400 to-sky-600' },
  { id: 7, title: 'Physics Quick Labs', description: 'Short lab videos with steps and data sheets.', subject: 'Physics', type: 'Video', color: 'from-indigo-400 to-indigo-600' },
  { id: 8, title: 'World Capitals Map Set', description: 'Printable and interactive practice.', subject: 'Geography', type: 'Map', color: 'from-yellow-300 to-yellow-500' },
];

const Tag = ({ children, active = false, onClick }) => (
  <button onClick={onClick} className={`text-sm px-3 py-1 rounded-full border ${active ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-indigo-700 border-indigo-100'} shadow-sm`}>{children}</button>
);

const FeatureCard = ({ item }) => (
  <motion.article initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.01 }} className="relative rounded-2xl overflow-hidden shadow-lg">
    <div className={`w-full h-64 bg-gradient-to-br ${item.color} flex items-end p-6`}>
      <div className="backdrop-blur-sm bg-white/30 rounded-lg p-3">
        <h3 className="text-xl font-bold text-white drop-shadow">{item.title}</h3>
        <p className="text-sm text-white/90 mt-1">{item.description}</p>
        <div className="mt-3">
          <Link to={`/library/${item.id}`} className="inline-flex items-center gap-2 text-white font-semibold">Open <FaChevronRight /></Link>
        </div>
      </div>
    </div>
  </motion.article>
);

const MosaicCard = ({ item, size = 'md' }) => {
  const sizeClass = size === 'lg' ? 'row-span-2 col-span-2 h-full' : 'h-48';
  return (
    <motion.div whileHover={{ y: -6 }} className={`rounded-xl overflow-hidden shadow-md ${sizeClass}`}>
      <div className={`w-full h-full bg-gradient-to-br ${item.color} p-4 flex flex-col justify-end`}>
        <div className="bg-white/40 p-3 rounded-md">
          <h4 className="font-semibold text-white drop-shadow-sm text-lg">{item.title}</h4>
          <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StudentLibrary = () => {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const subjects = useMemo(() => ['All', ...Array.from(new Set(mockResources.map(r => r.subject)))], []);

  const filtered = useMemo(() => mockResources.filter(r => {
    if (activeTag !== 'All' && r.subject !== activeTag) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.subject.toLowerCase().includes(q);
  }), [query, activeTag]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {/* Magazine hero (aligned with Home theme) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl border border-indigo-100">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <h1 className="text-3xl font-extrabold text-gray-900">Explore the Library — visually rich and curated</h1>
                <p className="mt-3 text-gray-700">A magazine-style collection of study guides, videos and interactive resources to help you revise faster.</p>

                <div className="mt-5 flex gap-3">
                  <Link to="/library/featured" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600">Featured</Link>
                  <Link to="/library/new" className="border border-indigo-400 text-indigo-700 px-4 py-2 rounded-lg">New Arrivals</Link>
                </div>
              </div>

              <div className="w-full lg:w-64">
                <div className="bg-white p-4 rounded-xl shadow-inner">
                  <label className="sr-only" htmlFor="lib-search">Search library</label>
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500"><FaSearch /></div>
                    <input id="lib-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search topics, titles, subjects" className="flex-1 bg-transparent outline-none" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {subjects.map(s => <Tag key={s} onClick={() => setActiveTag(s)} active={activeTag === s}>{s}</Tag>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h4 className="font-semibold">Trending This Week</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>Physics Quick Labs</span> <span className="text-indigo-500">Views</span></li>
              <li className="flex justify-between"><span>Genetics: Mendel’s Laws</span> <span className="text-indigo-500">Downloads</span></li>
              <li className="flex justify-between"><span>Past Exam Paper: 2019</span> <span className="text-indigo-500">Attempts</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h4 className="font-semibold">Collections</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>Exam Prep</Tag>
              <Tag>Visuals</Tag>
              <Tag>Interactive</Tag>
            </div>
          </div>
        </div>
      </div>

      {/* Mosaic grid */}
      <section>
        <h3 className="text-xl font-bold">Curated Picks</h3>
        <p className="text-sm text-gray-500">Hand-picked items to boost revision and understanding.</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-fr">
          {/* feature large card */}
          <div className="col-span-2 lg:col-span-2 row-span-2">
            <FeatureCard item={mockResources[2]} />
          </div>

          {/* mosaic items — vary sizes for a magazine feel */}
          {filtered.map((r, idx) => (
            <div key={r.id} className={`${idx % 5 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}>
              <MosaicCard item={r} size={idx % 5 === 0 ? 'lg' : 'md'} />
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center">
        <button className="px-6 py-2 rounded-full bg-amber-600 text-white">Load more</button>
      </div>
    </motion.div>
  );
};

const TeacherLibrary = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">Teacher tools and upload manager.</div>
  </motion.div>
);

const ParentLibrary = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">Parent view: recommended readings and progress snapshots.</div>
  </motion.div>
);

export default function Library({ isLoggedIn, userRole }) {
  if (!isLoggedIn || !userRole) return <Navigate to="/login" replace />;

  if (userRole === 'student') return <section className="min-h-[70vh] py-10 px-4"><StudentLibrary /></section>;
  if (userRole === 'teacher') return <section className="min-h-[70vh] py-10 px-4"><TeacherLibrary /></section>;
  return <section className="min-h-[70vh] py-10 px-4"><ParentLibrary /></section>;
}
