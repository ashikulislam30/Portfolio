import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <blockquote className="relative rounded-xl bg-bg-card border border-border-primary p-8 md:p-12">
          <span className="absolute top-6 left-6 text-6xl text-text-primary/10 font-serif">"</span>
          <p className="text-xl md:text-2xl text-text-primary/80 italic pl-8 relative z-10">
            The best error message is the one that never shows up.
          </p>
          <footer className="text-right text-text-secondary/50 mt-4 pr-8">— Thomas Fuchs</footer>
        </blockquote>
      </div>
    </motion.section>
  );
}
