import { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

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
