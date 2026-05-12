import { useState } from 'react';
import { motion } from 'framer-motion';
import DevelopmentSetupModal from './DevelopmentSetupModal';

const setupCards = [
  {
    id: 1,
    type: 'gears',
    title: 'Gears Used',
    description: 'Productivity Tools, Gears i use to get my work done.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    type: 'vscode',
    title: 'VS Code',
    description: 'VS Code Setup i use daily.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function DevelopmentSetup() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <DevelopmentSetupModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        type={activeModal}
      />
      <section id="setup" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-text-secondary/80 text-sm uppercase tracking-wider mb-1">Development</p>
            <h2 className="text-4xl font-bold text-text-primary">Setup</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {setupCards.map((card, index) => (
              <motion.div
                key={card.id}
                onClick={() => card.type && setActiveModal(card.type)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex gap-4 p-6 rounded-xl bg-bg-card border border-border-primary hover:border-accent/50 hover:bg-bg-secondary transition-all cursor-pointer"
              >
                <div className="text-accent shrink-0">{card.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{card.title}</h3>
                  <p className="text-text-secondary text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
