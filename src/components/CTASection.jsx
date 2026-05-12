import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-serif italic text-text-primary/80 tracking-wide leading-relaxed"
          >
            "Exploring yourself in this <span className="text-accent">beautiful film</span> called <span className="text-text-primary">Life</span>"
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            className="h-px bg-accent/50 mx-auto mt-8"
          />
        </div>
      </div>
    </motion.section>
  );
}
