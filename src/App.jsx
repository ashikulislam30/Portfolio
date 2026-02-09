import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedExperience from './components/FeaturedExperience';
import Technologies from './components/Technologies';
import FeaturedProjects from './components/FeaturedProjects';
import FeaturedBlogs from './components/FeaturedBlogs';
import AboutMe from './components/AboutMe';
import GitHubActivity from './components/GitHubActivity';
import DevelopmentSetup from './components/DevelopmentSetup';
import QuoteSection from './components/QuoteSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'blogs', 'projects', 'about'];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 150 <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      <Header
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <FeaturedExperience />
        <Technologies />
        <FeaturedProjects />
        <FeaturedBlogs />
        <AboutMe />
        {/* <GitHubActivity /> */}
        <DevelopmentSetup />
        <QuoteSection />
        <CTASection />
        <Footer />
      </main>
      <FloatingActionButton />
    </div>
  );
}

export default App;
