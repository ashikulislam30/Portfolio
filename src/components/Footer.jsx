import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Work', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blogs' },
    
    { label: 'Setup', path: '/setup' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border-primary bg-bg-primary"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-8">
          {footerLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                to={link.path}
                className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="text-border-primary ml-4 text-xs">/</span>
              )}
            </div>
          ))}
        </nav>

        {/* Copyright Text */}
        <p className="text-text-secondary/50 text-sm">
          © {new Date().getFullYear()} Ashikul Islam. Built with React, Vite & Tailwind.
        </p>
      </div>
    </motion.footer>
  );
}
// footer 