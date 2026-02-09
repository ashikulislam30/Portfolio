import { motion } from 'framer-motion';
import headImg from '../assets/head.png';
export default function Header({ darkMode, onToggleTheme, activeSection }) {
  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <motion.img
            src={headImg}
            alt="Profile"
            className="w-10 h-10 rounded-full ring-2 ring-white/10 group-hover:ring-teal-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
          />
          <span className="font-semibold text-white/90 group-hover:text-white transition-colors">
            Ashikul Islam
          </span>
        </a>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-white ${activeSection === item.id
                ? 'text-teal-400'
                : 'text-white/60'
                }`}
            >
              {item.label}
            </a>
          ))}
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
