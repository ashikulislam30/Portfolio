import { motion } from 'framer-motion';
import { useMemo } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['', 'M', '', 'W', '', 'F', ''];

function generateContributions() {
  const grid = [];
  const totalDays = 53 * 7;
  for (let i = 0; i < totalDays; i++) {
    const rand = Math.random();
    if (rand > 0.7) grid.push(0);
    else if (rand > 0.5) grid.push(1);
    else if (rand > 0.3) grid.push(2);
    else if (rand > 0.15) grid.push(3);
    else grid.push(4);
  }
  return grid;
}

export default function GitHubActivity() {
  const contributions = useMemo(() => generateContributions(), []);
  const total = contributions.reduce((a, b) => a + b, 0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4"
        >
          GitHub Activity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/60 mb-2"
        >
          shishirahm3d's coding journey over the past year
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/80 font-medium mb-8"
        >
          Total: {total.toLocaleString()} contributions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-lg bg-white/5 border border-white/10 p-6"
        >
          <div className="flex gap-1 mb-4 min-w-max">
            {MONTHS.map((m, i) => (
              <div key={m} className="w-12 text-center text-white/50 text-xs">
                {i % 2 === 0 ? m : ''}
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            <div className="flex flex-col gap-1 text-white/40 text-xs">
              {DAYS.map((d, i) => (
                <div key={i} className="h-3 flex items-center">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid gap-[2px]" style={{ gridTemplateColumns: 'repeat(53, 1fr)' }}>
              {contributions.map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 53) * 0.002 }}
                  className={`w-3 h-3 rounded-sm ${
                    level === 0 ? 'bg-white/5' :
                    level === 1 ? 'bg-green-900/60' :
                    level === 2 ? 'bg-green-700/70' :
                    level === 3 ? 'bg-green-500/80' :
                    'bg-green-400'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-white/50 text-sm">{total.toLocaleString()} contributions in the last year</p>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <span>Less</span>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((l) => (
                  <div
                    key={l}
                    className={`w-3 h-3 rounded-sm ${
                      l === 0 ? 'bg-white/5' :
                      l === 1 ? 'bg-green-900/60' :
                      l === 2 ? 'bg-green-700/70' :
                      l === 3 ? 'bg-green-500/80' :
                      'bg-green-400'
                    }`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
