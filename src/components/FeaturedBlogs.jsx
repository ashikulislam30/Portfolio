import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Next.js 15/16 Data Fetching: Mistakes & Security Issues',
    description: 'Common pitfalls and security vulnerabilities when fetching data in Next.js 15/16, including server components and API routes.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=320&fit=crop',
    tags: ['frontend', 'development', 'nextjs', 'security'],
    date: 'January 30, 2026',
    url: '#',
  },
  {
    id: 2,
    title: 'Next.js 15/16 Routing Guide 2026',
    description: 'A comprehensive guide to the App Router, dynamic routes, and best practices for routing in Next.js 15 and 16.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=320&fit=crop',
    tags: ['frontend', 'development', 'nextjs'],
    date: 'December 12, 2025',
    url: '#',
  },
  {
    id: 3,
    title: 'Building Scalable APIs with NestJS',
    description: 'Best practices for designing and implementing scalable REST and GraphQL APIs using NestJS framework.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=320&fit=crop',
    tags: ['backend', 'nestjs', 'api'],
    date: 'November 20, 2025',
    url: '#',
  },
  {
    id: 4,
    title: 'TypeScript Tips for React Developers',
    description: 'Essential TypeScript patterns and tips to write cleaner, type-safe React components and hooks.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=320&fit=crop',
    tags: ['typescript', 'react', 'frontend'],
    date: 'October 15, 2025',
    url: '#',
  },
];

export default function FeaturedBlogs() {
  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 2);
  return (
    <section id="blogs" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Featured</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Blogs</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
          {displayedBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/90 text-sm font-medium">{blog.title}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{blog.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-xs">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white/50 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blog.date}
                  </span>
                  <a href={blog.url} className="text-teal-400 text-sm font-medium hover:underline flex items-center gap-1">
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex px-8 py-3 rounded-lg bg-black text-white font-medium hover:bg-white/10 transition-all border border-white/10 cursor-pointer"
          >
            {showAll ? 'Show less' : 'Show all blogs'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
