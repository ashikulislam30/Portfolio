import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aimlImg from '../assets/AI-ML.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AIMLBlogPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/blogs" className="text-accent hover:opacity-80 mb-8 inline-block font-medium">
            ← Back to Blogs
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            The Complete Beginner’s Guide to Artificial Intelligence and Machine Learning
          </h1>
          <p className="text-xl text-accent font-medium mb-8">Learn AI/ML From Scratch With Roadmaps, Examples, and Code</p>
          
          <div className="flex items-center gap-4 text-text-secondary mb-8">
            <span className="px-3 py-1 rounded-full bg-bg-card border border-border-primary text-xs text-text-primary/80">AI</span>
            <span className="px-3 py-1 rounded-full bg-bg-card border border-border-primary text-xs text-text-primary/80">Machine Learning</span>
            <span>•</span>
            <span>May 12, 2026</span>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-border-primary shadow-2xl shadow-accent/10">
            <img 
              src={aimlImg} 
              alt="AI and Machine Learning Guide"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-teal max-w-none space-y-16"
        >
          <section className="space-y-6">
            <p className="text-xl text-text-primary/80 leading-relaxed">
              Artificial Intelligence (AI) and Machine Learning (ML) are among the most powerful technologies of the modern era. From self-driving cars and virtual assistants to medical diagnosis systems and recommendation engines, AI is transforming nearly every industry.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Today, companies like <strong>Google, Microsoft, OpenAI, Amazon, Meta, and NVIDIA</strong> are investing billions of dollars into AI research and development. This guide is designed as a complete beginner-friendly roadmap for learning AI and ML.
            </p>
          </section>

          <hr className="border-border-primary" />

          <section id="toc" className="bg-bg-card p-8 rounded-2xl border border-border-primary shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-y-2 gap-x-8 text-text-secondary">
              {[
                "What is Artificial Intelligence?", "What is Machine Learning?", "AI vs ML vs Deep Learning", 
                "Types of Machine Learning", "How Machine Learning Works", "Why Python is Best for AI/ML",
                "Important Python Libraries", "Mathematics for AI/ML", "Machine Learning Algorithms",
                "Deep Learning and Neural Networks", "Real-World Applications", "AI Project Ideas",
                "Beginner Roadmap", "Career Opportunities", "Challenges in AI", "Future of AI", "Final Thoughts"
              ].map((item, index) => (
                <li key={index} className="hover:text-accent transition-colors cursor-pointer list-decimal list-inside" onClick={() => scrollToSection(`section-${index + 1}`)}>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <hr className="border-border-primary" />

          <section id="section-1" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">1. What is Artificial Intelligence?</h2>
            <p className="text-text-secondary">
              Artificial Intelligence (AI) refers to machines that can simulate human intelligence. AI systems can learn from experience, analyze data, solve problems, understand language, recognize images, and make decisions automatically.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-text-primary/90 bg-bg-card py-6 rounded-r-2xl text-lg">
              The goal of AI is to create systems that can think and act intelligently.
            </blockquote>
          </section>

          <section id="section-2" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">2. What is Machine Learning?</h2>
            <p className="text-text-secondary">
              Machine Learning (ML) is a subset of AI that enables computers to learn from data without explicit programming. Instead of writing fixed rules, machines learn patterns from data.
            </p>
            <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
              <h4 className="text-accent font-bold mb-2">Example: Spam Detection</h4>
              <p className="text-text-secondary text-sm">
                Instead of manually writing thousands of rules, you train a machine learning model using spam and normal emails. The model learns patterns and predicts whether future emails are spam.
              </p>
            </div>
          </section>

          <section id="section-3" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">3. AI vs ML vs Deep Learning</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border-primary text-sm text-text-secondary">
                <thead className="bg-bg-card">
                  <tr>
                    <th className="p-4 border border-border-primary text-left">Technology</th>
                    <th className="p-4 border border-border-primary text-left">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Artificial Intelligence', 'Smart machines that mimic humans'],
                    ['Machine Learning', 'Systems that learn from data'],
                    ['Deep Learning', 'Advanced neural-network-based learning']
                  ].map(([tech, mean]) => (
                    <tr key={tech} className="hover:bg-bg-card transition-colors">
                      <td className="p-4 border border-border-primary font-bold text-accent">{tech}</td>
                      <td className="p-4 border border-border-primary">{mean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-4" className="space-y-12">
            <h2 className="text-3xl font-bold text-text-primary">4. Types of Machine Learning</h2>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">1. Supervised Learning</h3>
              <p className="text-text-secondary">The model learns using labeled data. For example, predicting exam marks based on study hours.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {['Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'SVM'].map(algo => (
                  <div key={algo} className="p-3 bg-bg-card rounded-lg border border-border-primary text-xs text-text-secondary">{algo}</div>
                ))}
              </div>
              <SyntaxHighlighter 
                language="python" 
                style={vscDarkPlus}
                customStyle={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-primary)' }}
              >
                {`from sklearn.linear_model import LinearRegression
import numpy as np

# Training data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create model
model = LinearRegression()

# Train model
model.fit(X, y)

# Prediction
prediction = model.predict([[6]])
print("Prediction:", prediction)`}
              </SyntaxHighlighter>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">2. Unsupervised Learning</h3>
              <p className="text-text-secondary">The machine learns patterns from unlabeled data. Used for customer segmentation and pattern detection.</p>
              <SyntaxHighlighter 
                language="python" 
                style={vscDarkPlus}
                customStyle={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-primary)' }}
              >
                {`from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])
kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

print(kmeans.labels_)`}
              </SyntaxHighlighter>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">3. Reinforcement Learning</h3>
              <p className="text-text-secondary">An agent learns by interacting with an environment through rewards and punishments. Examples include self-driving cars and Chess AI.</p>
            </div>
          </section>

          <section id="section-5" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">5. How Machine Learning Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['Step 1: Data Collection', 'Images, Videos, Text, Sensor Data.'],
                ['Step 2: Data Cleaning', 'Handling missing values and duplicates.'],
                ['Step 3: Feature Engineering', 'Extracting important information.'],
                ['Step 4: Model Training', 'Algorithm learns from the data.'],
                ['Step 5: Model Testing', 'Testing on unseen data.'],
                ['Step 6: Deployment', 'Real-world application use.']
              ].map(([step, desc]) => (
                <div key={step} className="p-6 rounded-xl bg-bg-card border border-border-primary shadow-sm">
                  <h4 className="text-accent font-bold mb-2">{step}</h4>
                  <p className="text-text-secondary/60 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="section-6" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">6. Why Python is Best for AI/ML</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-text-secondary">
              {['Simple Syntax', 'Huge Community', 'Powerful Libraries', 'Fast Development', 'Easy Visualization'].map(item => (
                <li key={item} className="p-3 bg-bg-card rounded-lg border border-border-primary text-center text-sm">{item}</li>
              ))}
            </ul>
          </section>

          <section id="section-7" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">7. Important Python Libraries</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border-primary text-sm text-text-secondary">
                <thead className="bg-bg-card">
                  <tr>
                    <th className="p-3 border border-border-primary text-left">Library</th>
                    <th className="p-3 border border-border-primary text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['NumPy', 'Numerical operations'], ['Pandas', 'Data analysis'], ['Matplotlib', 'Data visualization'],
                    ['Scikit-learn', 'Machine learning'], ['TensorFlow', 'Deep learning'], ['PyTorch', 'Neural networks']
                  ].map(([lib, purp]) => (
                    <tr key={lib}><td className="p-3 border border-border-primary text-accent font-mono font-bold">{lib}</td><td className="p-3 border border-border-primary">{purp}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-8" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">8. Mathematics for AI/ML</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Linear Algebra', 'Neural Networks, Image Processing'],
                ['Statistics', 'Predictions, Probability'],
                ['Calculus', 'Optimization, Gradient Descent']
              ].map(([topic, use]) => (
                <div key={topic} className="p-6 rounded-xl bg-bg-card border border-border-primary shadow-sm">
                  <h4 className="text-accent font-bold mb-2">{topic}</h4>
                  <p className="text-text-secondary/60 text-sm">{use}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="section-9" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">9. Machine Learning Algorithms</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li><strong>Linear Regression:</strong> Price prediction</li>
              <li><strong>Logistic Regression:</strong> Spam detection</li>
              <li><strong>Decision Trees:</strong> Flowchart decisions</li>
              <li><strong>Random Forest:</strong> Multiple decision trees</li>
              <li><strong>KNN:</strong> Proximity-based prediction</li>
            </ul>
          </section>

          <section id="section-10" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">10. Deep Learning and Neural Networks</h2>
            <p className="text-text-secondary">Deep Learning uses neural networks with multiple layers, inspired by the human brain. Applications include face recognition, self-driving cars, and LLMs like ChatGPT.</p>
            <SyntaxHighlighter 
              language="python" 
              style={vscDarkPlus}
              customStyle={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-primary)' }}
            >
              {`import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation='relu'),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mean_squared_error')
print("Neural Network Created")`}
            </SyntaxHighlighter>
          </section>

          <section id="section-11" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">11. Real-World Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Healthcare', 'Finance', 'Education', 'Cybersecurity'].map(item => (
                <div key={item} className="p-4 bg-bg-card rounded-xl border border-border-primary text-center font-bold text-accent">{item}</div>
              ))}
            </div>
          </section>

          <section id="section-12" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">12. AI Project Ideas</h2>
            <div className="space-y-4">
              <h4 className="text-text-primary font-bold">Beginner</h4>
              <p className="text-text-secondary text-sm">Spam Email Detector, Chatbot, Movie Recommendation System.</p>
              <h4 className="text-text-primary font-bold">Advanced</h4>
              <p className="text-text-secondary text-sm">Self-driving simulation, AI medical assistant, LLMs.</p>
            </div>
          </section>

          <section id="section-13" className="space-y-12">
            <h2 className="text-3xl font-bold text-text-primary">13. Beginner Roadmap</h2>
            <div className="relative pl-8 border-l border-accent/30 space-y-8">
              {[
                ['Phase 1: Programming', 'Python basics: Variables, Loops, OOP.'],
                ['Phase 2: Mathematics', 'Linear Algebra, Probability, Statistics.'],
                ['Phase 3: Data Analysis', 'NumPy, Pandas, Matplotlib.'],
                ['Phase 4: Machine Learning', 'Regression, Classification, Clustering.'],
                ['Phase 5: Deep Learning', 'Neural Networks, CNN, RNN, Transformers.']
              ].map(([phase, desc], i) => (
                <div key={phase} className="relative">
                  <div className="absolute left-[-37px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary" />
                  <h4 className="text-accent font-bold">{phase}</h4>
                  <p className="text-text-secondary/60 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="section-14" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">14. Career Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['Data Scientist', 'ML Engineer', 'AI Researcher', 'NLP Engineer'].map(role => (
                <div key={role} className="p-4 bg-bg-card rounded-xl border border-border-primary text-text-primary font-medium">{role}</div>
              ))}
            </div>
          </section>

          <section id="section-15" className="space-y-6 bg-red-500/5 p-8 rounded-2xl border border-red-500/10 shadow-sm">
            <h2 className="text-3xl font-bold text-text-primary">15. Challenges in AI</h2>
            <p className="text-text-secondary">Key challenges include <strong>Data Privacy</strong>, <strong>Bias in AI</strong>, <strong>Ethical Concerns</strong>, and the need for <strong>High Computing Power</strong>.</p>
          </section>

          <section id="section-16" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">16. Future of AI</h2>
            <p className="text-text-secondary text-lg italic">"The best way to learn AI is by building real projects and solving real problems."</p>
            <p className="text-text-secondary/60">Future innovations include smarter robots, autonomous vehicles, and AI-powered scientific discoveries.</p>
          </section>

          <section id="section-17" className="space-y-8 pt-12 border-t border-border-primary text-center">
            <h2 className="text-3xl font-bold text-text-primary">Final Thoughts</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Artificial Intelligence and Machine Learning are changing the world faster than ever before. Start small, learn consistently, and build projects. The future belongs to those who understand intelligent systems.
            </p>
            <div className="pt-12 border-t border-border-primary">
              <blockquote className="text-2xl text-accent italic font-bold">
                “AI is not magic — it is mathematics, logic, and creativity combined.”
              </blockquote>
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
