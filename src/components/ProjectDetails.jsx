import { motion } from 'framer-motion';
import TechTag from './TechTag';

export default function ProjectDetails({ project, onBack }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="max-w-4xl mx-auto"
        >
            <button
                onClick={onBack}
                className="group flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
                <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Projects
            </button>

            <div className="space-y-8">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="aspect-video w-full rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/10">
                            {project.status || 'Completed'}
                        </span>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((t) => (
                            <TechTag key={t} name={t} />
                        ))}
                    </div>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div>
                            <p className="text-sm text-white/40 mb-1">Timeline</p>
                            <p className="text-white font-medium">{project.timeline || 'TBD'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-white/40 mb-1">Role</p>
                            <p className="text-white font-medium">{project.role || 'Full Stack'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-white/40 mb-1">Team</p>
                            <p className="text-white font-medium">{project.team || 'Solo'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-white/40 mb-1">Status</p>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                                {project.status === 'Completed' ? 'Completed' : 'Active'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
