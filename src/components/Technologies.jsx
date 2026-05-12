import { motion } from 'framer-motion';
import TechTag from './TechTag';

const technologies = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'C',
  'C++',
  'Python',
  'MongoDB',
  'MySQL',
  'Docker',
  'AWS',
  'Postman',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
];

export default function Technologies() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-text-primary mb-12"
        >
          Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <TechTag name={tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
