import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <a href="#about" className="text-white/60 hover:text-teal-400 transition-colors text-sm">
          About
        </a>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Shishir Ahmed. Built with React, Vite & Tailwind.
        </p>
      </div>
    </motion.footer>
  );
}
