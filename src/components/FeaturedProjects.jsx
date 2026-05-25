import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import TechTag from './TechTag';
import { projects } from '../data/projects';

export default function FeaturedProjects({ isFullPage = false }) {
  const [showAll, setShowAll] = useState(isFullPage);
  const navigate = useNavigate();

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-text-secondary/80 text-sm uppercase tracking-wider mb-1">Featured</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl overflow-hidden bg-bg-card border border-border-primary hover:border-accent/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                    <div className="flex gap-2 shrink-0">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="Live demo">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                  <p className="text-xs text-text-secondary/80 mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-green-400 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      {project.status}
                    </span>
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="text-accent text-sm font-medium hover:underline cursor-pointer"
                    >
                      View Details →
                    </button>
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
              to="/projects"
              className="inline-flex px-8 py-3 rounded-lg bg-text-primary text-bg-primary font-medium hover:opacity-90 transition-all border border-border-primary cursor-pointer"
            >
              Show all projects
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
              className="inline-flex px-8 py-3 rounded-lg bg-text-primary text-bg-primary font-medium hover:opacity-90 transition-all border border-border-primary cursor-pointer"
            >
              ← Back to Home
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
