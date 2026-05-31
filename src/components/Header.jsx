import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import headImg from '../assets/head.png';

export default function Header({ darkMode, onToggleTheme, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'work', label: 'Work', path: '/experience' },
    { id: 'blogs', label: 'Blogs', path: '/blogs' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border-primary"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2 group">
          <motion.img
            src={headImg}
            alt="Profile"
            className="w-12 h-12 rounded-lg ring-2 ring-border-primary group-hover:ring-accent/50 transition-all object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-text-primary ${activeSection === item.id
                ? 'text-accent'
                : 'text-text-secondary'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
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

          <motion.button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`md:hidden border-t border-border-primary bg-bg-primary/95 backdrop-blur-xl ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-text-primary ${
                activeSection === item.id ? 'text-accent' : 'text-text-secondary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
