import { motion } from 'framer-motion';
import FeaturedExperience from '../components/FeaturedExperience';

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <FeaturedExperience isFullPage={true} />
    </div>
  );
}
