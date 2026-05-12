import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import cpBlogImg from '../assets/cpblog.png';
import aimlImg from '../assets/AI-ML.png';

const blogs = [
  {
    id: 0,
    title: 'C and C++ for Competitive Programming',
    description: 'Master the fundamentals of C and C++ and learn why they are the preferred languages for top competitive programmers worldwide.',
    image: cpBlogImg,
    tags: ['C++', 'Competitive Programming', 'Algorithms', 'STL'],
    date: 'May 11, 2026',
    url: '/blog/cp-mastery',
  },
  {
    id: 1,
    title: 'Beginner’s Guide to AI and Machine Learning',
    description: 'A complete beginner-friendly roadmap for learning Artificial Intelligence and Machine Learning from scratch.',
    image: aimlImg,
    tags: ['AI', 'Machine Learning', 'Python', 'Roadmap'],
    date: 'May 12, 2026',
    url: '/blog/ai-ml-guide',
  },
];

export default function FeaturedBlogs({ isFullPage = false }) {
  const [showAll, setShowAll] = useState(isFullPage);
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
          <p className="text-text-secondary/80 text-sm uppercase tracking-wider mb-1">Featured</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Blogs</h2>
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
              className="group rounded-xl overflow-hidden bg-bg-card border border-border-primary hover:border-accent/50 transition-all"
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
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">{blog.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-bg-card border border-border-primary text-text-secondary text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md bg-bg-card text-text-secondary/50 text-xs">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-text-secondary text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blog.date}
                  </span>
                  <Link to={blog.url} className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                    Read More →
                  </Link>
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
              to="/blogs"
              className="inline-flex px-8 py-3 rounded-lg bg-text-primary text-bg-primary font-medium hover:opacity-90 transition-all border border-border-primary cursor-pointer"
            >
              Show all blogs
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
