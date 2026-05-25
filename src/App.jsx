import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SiReact } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import BlogsPage from './pages/BlogsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import CPBlogPage from './pages/CPBlogPage';
import AIMLBlogPage from './pages/AIMLBlogPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
  }, [showSplash]);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/home' || 
               ['/experience', '/blogs', '/projects', '/about'].includes(location.pathname);

    // Scroll spy logic for the Home page
    if (isHomePage) {
      const handleScroll = () => {
        const sections = ['hero', 'work', 'projects', 'blogs', 'about'];
        const scrollY = window.scrollY;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop - 150 <= scrollY) {
            const section = sections[i];
            setActiveSection(section);
            
            // Update URL without triggering a route change
            let newPath = section === 'hero' ? '/home' : 
                          section === 'work' ? '/experience' : 
                          `/${section}`;
            
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Set active section based on path for dedicated pages
      const path = location.pathname.substring(1);
      if (path === 'experience') setActiveSection('work');
      else setActiveSection(path);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bg-primary text-text-primary">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '0.08em' }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
                <div className="inline-flex items-center gap-2 text-white/80">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                  >
                    <FaBrain className="w-7 h-7 md:w-9 md:h-9" />
                  </motion.div>
                  <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/70">AI</span>
                </div>

                <motion.span
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 2.2, ease: 'linear', repeat: Infinity }}
                  className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(56,189,248,0.35)]"
                >
                  Ashikul Islam
                </motion.span>

                <div className="inline-flex items-center gap-2 text-white/80">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  >
                    <SiReact className="w-7 h-7 md:w-9 md:h-9" />
                  </motion.div>
                  <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/70">Web Dev</span>
                </div>
              </div>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollToTop />
      <Header
        darkMode={darkMode}
        onToggleTheme={() => {
          console.log('Toggling theme to:', !darkMode ? 'light' : 'dark');
          setDarkMode(!darkMode);
        }}
        activeSection={activeSection}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/cp-mastery" element={<CPBlogPage />} />
          <Route path="/blog/ai-ml-guide" element={<AIMLBlogPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
