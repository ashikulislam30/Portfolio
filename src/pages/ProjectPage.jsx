import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import TechTag from '../components/TechTag';
import { useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button onClick={() => navigate('/projects')} className="text-accent hover:underline">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-16 px-6 bg-bg-primary"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-text-secondary hover:text-text-primary mb-8 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="space-y-12">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-video w-full rounded-3xl overflow-hidden ring-1 ring-border-primary bg-bg-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-bg-card text-text-primary/80 text-sm font-medium border border-border-primary">
                  {project.role}
                </span>
              </div>
              <div className="flex gap-4">
                {project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-card border border-border-primary text-text-secondary hover:text-text-primary transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                )}
                {project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-all">
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-bg-card border border-border-primary">
              <div>
                <p className="text-sm text-text-secondary/60 mb-1 font-medium">Timeline</p>
                <p className="text-text-primary font-semibold">{project.timeline}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary/60 mb-1 font-medium">Role</p>
                <p className="text-text-primary font-semibold">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary/60 mb-1 font-medium">Team</p>
                <p className="text-text-primary font-semibold">{project.team}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary/60 mb-1 font-medium">Status</p>
                <p className="text-accent font-semibold">{project.status}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <TechTag key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
