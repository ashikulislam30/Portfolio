import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiTypescript, SiReact, SiNextdotjs, SiNestjs, SiTailwindcss, SiPython,
  SiPrisma, SiPostgresql, SiRedis, SiDocker, SiAmazon, SiPostman,
  SiNodedotjs, SiFlutter, SiFirebase, SiPhp, SiMysql, SiJavascript,
  SiFlask, SiOpenai, SiGooglegemini, SiGoogle, SiC, SiCplusplus,
  SiExpress, SiMongodb, SiScikitlearn, SiPytorch, SiTensorflow, SiHuggingface,
  SiCss3, SiHtml5
} from 'react-icons/si';
import { FaCogs, FaSitemap, FaPuzzlePiece, FaUsers, FaBrain, FaNetworkWired } from 'react-icons/fa';

const techIcons = {
  TypeScript: {
    color: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500',
    hoverShadow: 'hover:shadow-blue-500/20',
    hoverBg: 'hover:bg-blue-500/10',
    icon: SiTypescript,
    url: 'https://www.typescriptlang.org/'
  },
  React: {
    color: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-400',
    hoverShadow: 'hover:shadow-cyan-400/20',
    hoverBg: 'hover:bg-cyan-400/10',
    icon: SiReact,
    url: 'https://react.dev/'
  },
  'Next.js': {
    color: 'text-white',
    hoverBorder: 'hover:border-white',
    hoverShadow: 'hover:shadow-white/20',
    hoverBg: 'hover:bg-white/10',
    icon: SiNextdotjs,
    url: 'https://nextjs.org/'
  },
  NestJS: {
    color: 'text-red-500',
    hoverBorder: 'hover:border-red-500',
    hoverShadow: 'hover:shadow-red-500/20',
    hoverBg: 'hover:bg-red-500/10',
    icon: SiNestjs,
    url: 'https://nestjs.com/'
  },
  'Tailwind CSS': {
    color: 'text-cyan-300',
    hoverBorder: 'hover:border-cyan-300',
    hoverShadow: 'hover:shadow-cyan-300/20',
    hoverBg: 'hover:bg-cyan-300/10',
    icon: SiTailwindcss,
    url: 'https://tailwindcss.com/'
  },
  Python: {
    color: 'text-yellow-400',
    hoverBorder: 'hover:border-yellow-400',
    hoverShadow: 'hover:shadow-yellow-400/20',
    hoverBg: 'hover:bg-yellow-400/10',
    icon: SiPython,
    url: 'https://www.python.org/'
  },
  Prisma: {
    color: 'text-teal-400',
    hoverBorder: 'hover:border-teal-400',
    hoverShadow: 'hover:shadow-teal-400/20',
    hoverBg: 'hover:bg-teal-400/10',
    icon: SiPrisma,
    url: 'https://www.prisma.io/'
  },
  PostgreSQL: {
    color: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-400/20',
    hoverBg: 'hover:bg-blue-400/10',
    icon: SiPostgresql,
    url: 'https://www.postgresql.org/'
  },
  Redis: {
    color: 'text-red-500',
    hoverBorder: 'hover:border-red-500',
    hoverShadow: 'hover:shadow-red-500/20',
    hoverBg: 'hover:bg-red-500/10',
    icon: SiRedis,
    url: 'https://redis.io/'
  },
  Docker: {
    color: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-400/20',
    hoverBg: 'hover:bg-blue-400/10',
    icon: SiDocker,
    url: 'https://www.docker.com/'
  },
  AWS: {
    color: 'text-orange-500',
    hoverBorder: 'hover:border-orange-500',
    hoverShadow: 'hover:shadow-orange-500/20',
    hoverBg: 'hover:bg-orange-500/10',
    icon: SiAmazon,
    url: 'https://aws.amazon.com/'
  },
  Postman: {
    color: 'text-orange-400',
    hoverBorder: 'hover:border-orange-400',
    hoverShadow: 'hover:shadow-orange-400/20',
    hoverBg: 'hover:bg-orange-400/10',
    icon: SiPostman,
    url: 'https://www.postman.com/'
  },
  Node: {
    color: 'text-green-500',
    hoverBorder: 'hover:border-green-500',
    hoverShadow: 'hover:shadow-green-500/20',
    hoverBg: 'hover:bg-green-500/10',
    icon: SiNodedotjs,
    url: 'https://nodejs.org/'
  },
  'Node.js': {
    color: 'text-green-500',
    hoverBorder: 'hover:border-green-500',
    hoverShadow: 'hover:shadow-green-500/20',
    hoverBg: 'hover:bg-green-500/10',
    icon: SiNodedotjs,
    url: 'https://nodejs.org/'
  },
  Flutter: {
    color: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-400/20',
    hoverBg: 'hover:bg-blue-400/10',
    icon: SiFlutter,
    url: 'https://flutter.dev/'
  },
  Firebase: {
    color: 'text-amber-400',
    hoverBorder: 'hover:border-amber-400',
    hoverShadow: 'hover:shadow-amber-400/20',
    hoverBg: 'hover:bg-amber-400/10',
    icon: SiFirebase,
    url: 'https://firebase.google.com/'
  },
  PHP: {
    color: 'text-purple-400',
    hoverBorder: 'hover:border-purple-400',
    hoverShadow: 'hover:shadow-purple-400/20',
    hoverBg: 'hover:bg-purple-400/10',
    icon: SiPhp,
    url: 'https://www.php.net/'
  },
  'Express.js': {
    color: 'text-white',
    hoverBorder: 'hover:border-white',
    hoverShadow: 'hover:shadow-white/20',
    hoverBg: 'hover:bg-white/10',
    icon: SiExpress,
    url: 'https://expressjs.com/'
  },
  MongoDB: {
    color: 'text-green-500',
    hoverBorder: 'hover:border-green-500',
    hoverShadow: 'hover:shadow-green-500/20',
    hoverBg: 'hover:bg-green-500/10',
    icon: SiMongodb,
    url: 'https://www.mongodb.com/'
  },
  MySQL: {
    color: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500',
    hoverShadow: 'hover:shadow-blue-500/20',
    hoverBg: 'hover:bg-blue-500/10',
    icon: SiMysql,
    url: 'https://www.mysql.com/'
  },
  JavaScript: {
    color: 'text-yellow-400',
    hoverBorder: 'hover:border-yellow-400',
    hoverShadow: 'hover:shadow-yellow-400/20',
    hoverBg: 'hover:bg-yellow-400/10',
    icon: SiJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  Flask: {
    color: 'text-gray-400',
    hoverBorder: 'hover:border-gray-400',
    hoverShadow: 'hover:shadow-gray-400/20',
    hoverBg: 'hover:bg-gray-400/10',
    icon: SiFlask,
    url: 'https://flask.palletsprojects.com/'
  },
  OpenAI: {
    color: 'text-green-400',
    hoverBorder: 'hover:border-green-400',
    hoverShadow: 'hover:shadow-green-400/20',
    hoverBg: 'hover:bg-green-400/10',
    icon: SiOpenai,
    url: 'https://openai.com/'
  },
  Gemini: {
    color: 'text-purple-400',
    hoverBorder: 'hover:border-purple-400',
    hoverShadow: 'hover:shadow-purple-400/20',
    hoverBg: 'hover:bg-purple-400/10',
    icon: SiGooglegemini || SiGoogle,
    url: 'https://deepmind.google/technologies/gemini/'
  },
  C: {
    color: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500',
    hoverShadow: 'hover:shadow-blue-500/20',
    hoverBg: 'hover:bg-blue-500/10',
    icon: SiC,
    url: 'https://en.cppreference.com/w/c'
  },
  'C++': {
    color: 'text-blue-600',
    hoverBorder: 'hover:border-blue-600',
    hoverShadow: 'hover:shadow-blue-600/20',
    hoverBg: 'hover:bg-blue-600/10',
    icon: SiCplusplus,
    url: 'https://cplusplus.com/'
  },
  Algorithms: {
    color: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-400',
    hoverShadow: 'hover:shadow-cyan-400/20',
    hoverBg: 'hover:bg-cyan-400/10',
    icon: FaCogs,
    url: null
  },
  'Data Structures': {
    color: 'text-indigo-400',
    hoverBorder: 'hover:border-indigo-400',
    hoverShadow: 'hover:shadow-indigo-400/20',
    hoverBg: 'hover:bg-indigo-400/10',
    icon: FaSitemap,
    url: null
  },
  'Problem Solving': {
    color: 'text-green-400',
    hoverBorder: 'hover:border-green-400',
    hoverShadow: 'hover:shadow-green-400/20',
    hoverBg: 'hover:bg-green-400/10',
    icon: FaPuzzlePiece,
    url: null
  },
  Mentoring: {
    color: 'text-rose-400',
    hoverBorder: 'hover:border-rose-400',
    hoverShadow: 'hover:shadow-rose-400/20',
    icon: FaUsers,
    url: null
  },
  'Machine Learning': {
    color: 'text-orange-400',
    hoverBorder: 'hover:border-orange-400',
    hoverShadow: 'hover:shadow-orange-400/20',
    hoverBg: 'hover:bg-orange-400/10',
    icon: SiScikitlearn || FaBrain,
    url: 'https://scikit-learn.org/'
  },
  'Deep Learning': {
    color: 'text-red-400',
    hoverBorder: 'hover:border-red-400',
    hoverShadow: 'hover:shadow-red-400/20',
    hoverBg: 'hover:bg-red-400/10',
    icon: SiPytorch || SiTensorflow,
    url: 'https://pytorch.org/'
  },
  'Natural Language Processing': {
    color: 'text-yellow-500',
    hoverBorder: 'hover:border-yellow-500',
    hoverShadow: 'hover:shadow-yellow-500/20',
    hoverBg: 'hover:bg-yellow-500/10',
    icon: SiHuggingface || FaNetworkWired,
    url: 'https://huggingface.co/'
  },
  'Hugging Face': {
    color: 'text-yellow-500',
    hoverBorder: 'hover:border-yellow-500',
    hoverShadow: 'hover:shadow-yellow-500/20',
    hoverBg: 'hover:bg-yellow-500/10',
    icon: SiHuggingface,
    url: 'https://huggingface.co/'
  },
  'LLMs': {
    color: 'text-purple-400',
    hoverBorder: 'hover:border-purple-400',
    hoverShadow: 'hover:shadow-purple-400/20',
    hoverBg: 'hover:bg-purple-400/10',
    icon: FaBrain,
    url: null
  },
  'NLP': {
    color: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-400/20',
    hoverBg: 'hover:bg-blue-400/10',
    icon: FaNetworkWired,
    url: null
  },
  'AI Model Training': {
    color: 'text-orange-400',
    hoverBorder: 'hover:border-orange-400',
    hoverShadow: 'hover:shadow-orange-400/20',
    hoverBg: 'hover:bg-orange-400/10',
    icon: FaCogs,
    url: null
  },
  'AI Fine-tuning': {
    color: 'text-teal-400',
    hoverBorder: 'hover:border-teal-400',
    hoverShadow: 'hover:shadow-teal-400/20',
    hoverBg: 'hover:bg-teal-400/10',
    icon: FaPuzzlePiece,
    url: null
  },
  'CSS': {
    color: 'text-blue-400',
    hoverBorder: 'hover:border-blue-400',
    hoverShadow: 'hover:shadow-blue-400/20',
    hoverBg: 'hover:bg-blue-400/10',
    icon: SiCss3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  'HTML': {
    color: 'text-orange-500',
    hoverBorder: 'hover:border-orange-500',
    hoverShadow: 'hover:shadow-orange-500/20',
    hoverBg: 'hover:bg-orange-500/10',
    icon: SiHtml5,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
};

export default function TechTag({ name, iconOnly = false, size = 'normal' }) {
  const [isHovered, setIsHovered] = useState(false);
  const config = techIcons[name] || {
    color: 'text-text-primary/80',
    hoverBorder: 'hover:border-border-primary/50',
    hoverShadow: 'hover:shadow-text-primary/10',
    hoverBg: 'hover:bg-bg-card',
    icon: null,
    url: null
  };

  const Icon = config.icon;

  const sizeClasses = {
    small: iconOnly ? 'p-1' : 'px-2 py-1 text-xs',
    normal: iconOnly ? 'p-2' : 'px-4 py-2 text-sm',
  };

  const linkClass = `
    relative inline-flex items-center gap-1.5 
    ${sizeClasses[size]} 
    rounded-lg bg-bg-card border border-border-primary 
    backdrop-blur-sm transition-colors duration-300
    ${config.color} ${config.hoverBorder || ''} ${config.hoverShadow || ''} ${config.hoverBg || ''}
    hover:shadow-lg cursor-pointer
  `;

  return (
    <motion.a
      href={config.url || '#'}
      target={config.url ? "_blank" : undefined}
      rel={config.url ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={linkClass}
    >
      <AnimatePresence>
        {isHovered && iconOnly && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: -40, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            className="absolute left-1/2 bottom-full mb-2 px-2 py-1 rounded bg-text-primary text-bg-primary text-[10px] font-bold whitespace-nowrap shadow-xl pointer-events-none z-50"
          >
            {name}
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      {Icon ? (
        <Icon className={size === 'small' ? "text-base" : "text-xl"} />
      ) : (
        <span className={`${size === 'small' ? 'text-xs' : 'text-base'} font-bold`}>{name.slice(0, 2)}</span>
      )}
      
      {!iconOnly && (
        <span className={`font-medium ${size === 'small' ? 'text-text-primary/80' : 'text-text-primary/90'}`}>{name}</span>
      )}
    </motion.a>
  );
}
