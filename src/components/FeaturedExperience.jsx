import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import TechTag from './TechTag';

const experiences = [
  {
    id: 1,
    company: 'FAWZ BIZ Enterprise - Working with NSI',
    logo: 'NSI',
    role: 'Junior Full-Stack Developer & AI Engineer Intern (NSI Project)',
    status: null,
    type: 'Internship',
    dates: 'July 2025 - January 2026',
    location: 'Mirpur 11.5, Dhaka - Hybrid',
    tech: ['TypeScript', 'React', 'MySQL', 'Python', 'OpenAI', 'Gemini'],
    bullets: [
      'Developed advanced Python scrapers to extract and process data from YouTube and web platforms, converting video and audio content into searchable text using Speech-to-Text (STT) AI models.',
      'Integrated LLMs and NLP to summarize and analyze extracted text, enabling rapid intelligence gathering from large-scale multimedia sources.',
      'Engineered functional browser extensions to enhance investigator efficiency, allowing for real-time data capturing and workflow automation.',
      'Designed and implemented responsive, secure user interfaces for internal dashboards, ensuring data visualization was intuitive for non-technical users.',
      'Built and maintained robust backend pipelines to handle high-concurrency scraping tasks while ensuring system stability and data integrity.',
    ],
  },
  {
    id: 2,
    company: 'Daffodil International University',
    logo: 'DIU',
    role: 'Programming & Problem Solving Lab Prefect ',
    supervisor: 'Under Professor Dr. Sheak Rashed Haider Noori, Head of CSE',
    status: null,
    type: 'Part-time',
    dates: 'September 2022 - April 2025',
    location: ' Birulia, Savar, Dhaka - 1216, Bangladesh',
    tech: ['C', 'C++', 'Algorithms', 'Data Structures', 'Problem Solving', 'Mentoring'],
    bullets: [
      'Guided students in understanding core programming concepts and problem-solving techniques.',
      'Assisted in designing and evaluating lab tasks, assignments, and practice problems.',
      'Helped students prepare for programming contests and improve their coding skills.',
    ],
  },
];


export default function FeaturedExperience({ isFullPage = false }) {
  const [showAll, setShowAll] = useState(isFullPage);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-text-secondary/80 text-sm uppercase tracking-wider mb-1">Featured</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {displayedExperiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {exp.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-text-primary">{exp.company}</h3>
                        <p className="text-text-secondary">{exp.role}</p>
                        {exp.supervisor && (
                          <p className="text-teal-400/80 text-sm mt-1 font-medium">{exp.supervisor}</p>
                        )}
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {exp.status && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                            {exp.status}
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-bg-card text-text-primary/80 border border-border-primary">
                          {exp.type}
                        </span>
                      </div>
                      <div className="hidden md:block text-right shrink-0">
                        <p className="text-text-secondary/80 text-sm">{exp.dates}</p>
                        <p className="text-text-secondary/80 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <div className="md:pl-16">
                      <div className="md:hidden text-text-secondary/80 text-sm mb-4">
                        <p>{exp.dates}</p>
                        <p>{exp.location}</p>
                      </div>
                      <p className="text-sm font-medium text-text-primary/70 mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((t) => (
                          <TechTag key={t} name={t} />
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-text-primary/70 text-sm flex gap-2">
                            <span className="text-teal-400 mt-1">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {!isFullPage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/experience"
              className="inline-flex px-8 py-3 rounded-lg bg-bg-card border border-border-primary text-text-primary font-medium hover:bg-bg-secondary transition-all cursor-pointer"
            >
              Show all work experiences
            </Link>
          </motion.div>
        )}

        {isFullPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Link
              to="/home"
              className="inline-flex px-8 py-3 rounded-lg bg-bg-card border border-border-primary text-text-primary font-medium hover:bg-bg-secondary transition-all cursor-pointer"
            >
              ← Back to Home
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
