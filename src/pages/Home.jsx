import Hero from '../components/Hero';
import FeaturedExperience from '../components/FeaturedExperience';
import Technologies from './../components/Technologies';
import FeaturedProjects from './../components/FeaturedProjects';
import FeaturedBlogs from './../components/FeaturedBlogs';
import AboutMe from './../components/AboutMe';
import DevelopmentSetup from './../components/DevelopmentSetup';
import QuoteSection from './../components/QuoteSection';
import CTASection from './../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedExperience />
      <Technologies />
      <FeaturedProjects />
      <FeaturedBlogs />
      <AboutMe />
      <DevelopmentSetup />
      <QuoteSection />
      <CTASection />
    </>
  );
}
