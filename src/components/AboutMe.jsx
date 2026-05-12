import { motion } from 'framer-motion';
import TechTag from './TechTag';
import ashikImg from '../assets/ashikportfolio.png';

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Python',
  'Flask',
  'MySQL',
  'Docker',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-text-primary mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <img
            src={ashikImg}
            alt="Ashikul Islam"
            className="w-52 h-52 md:w-64 md:h-64 rounded-2xl ring-2 ring-border-primary shrink-0 object-cover"
          />

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Ashikul Islam</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I am a Web/AI Developer & Researcher who enjoys building scalable products that solve real-world problems. 
              My work focuses on bridging the gap between advanced AI research and practical web applications. 
              I specialize in turning complex ideas into functional MVPs using modern technologies and data-driven solutions.
            </p>
            <p className="text-lg font-semibold text-text-primary mb-3">Skills</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <TechTag key={skill} name={skill} iconOnly={true} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
