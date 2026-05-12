import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cpBlogImg from '../assets/cpblog.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CPBlogPage() {
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
          C and C++ for Competitive Programming
          </h1>
          <p className="text-xl text-accent font-medium mb-8">From Beginner Syntax to Advanced Problem Solving</p>
          
          <div className="flex items-center gap-4 text-text-secondary/50 mb-8">
            <span className="px-3 py-1 rounded-full bg-bg-card border border-border-primary text-xs text-text-primary/80">C++</span>
            <span className="px-3 py-1 rounded-full bg-bg-card border border-border-primary text-xs text-text-primary/80">CP</span>
            <span>•</span>
            <span>May 11, 2026</span>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-border-primary shadow-2xl shadow-accent/10">
            <img 
              src={cpBlogImg} 
              alt="C++ for Competitive Programming"
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
              Competitive programming is more than solving coding problems — it is a way of thinking. It trains your brain to analyze problems, optimize solutions, and write efficient code under pressure. Among all programming languages, <strong>C and C++</strong> remain some of the most powerful and widely used languages in the competitive programming world.
            </p>
            <p className="text-text-secondary leading-relaxed">
              From platforms like <strong>Codeforces</strong>, <strong>CodeChef</strong>, <strong>LeetCode</strong>, and <strong>AtCoder</strong> to international contests like the <strong>ICPC</strong> and <strong>Google Code Jam</strong>, C++ dominates because of its:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-primary/80">
              <li className="flex items-center gap-2 bg-bg-card p-3 rounded-lg border border-border-primary">
                <span className="text-accent">✔</span> Fast execution speed
              </li>
              <li className="flex items-center gap-2 bg-bg-card p-3 rounded-lg border border-border-primary">
                <span className="text-accent">✔</span> Powerful Standard Template Library (STL)
              </li>
              <li className="flex items-center gap-2 bg-bg-card p-3 rounded-lg border border-border-primary">
                <span className="text-accent">✔</span> Flexibility
              </li>
              <li className="flex items-center gap-2 bg-bg-card p-3 rounded-lg border border-border-primary">
                <span className="text-accent">✔</span> Efficient memory handling
              </li>
            </ul>
          </section>

          <hr className="border-border-primary" />

          <section id="toc" className="bg-bg-card p-8 rounded-2xl border border-border-primary">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-y-2 gap-x-8 text-text-secondary/60">
              {[
                "What is C Programming?", "Why Learn C?", "What is C++?", 
                "Why Competitive Programmers Prefer C++", "Understanding Competitive Programming",
                "Important Concepts Every Programmer Must Learn", "Competitive Programming Roadmap",
                "Tips to Become a Better Competitive Programmer", "Common Beginner Mistakes",
                "Why Competitive Programming Matters", "Final Thoughts"
              ].map((item, index) => (
                <li key={index} className="hover:text-accent transition-colors cursor-pointer list-decimal list-inside" onClick={() => scrollToSection(`section-${index + 1}`)}>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <hr className="border-border-primary" />

          <section id="section-1" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">1. What is C Programming?</h2>
            <p className="text-text-secondary">
              C was developed by <strong>Dennis Ritchie</strong> in the early 1970s. It is considered one of the most influential programming languages in computer science.
            </p>
            <p className="text-text-secondary">Many modern languages such as:</p>
            <ul className="list-disc pl-6 text-accent space-y-1">
              <li><span className="text-text-secondary">C++</span></li>
              <li><span className="text-text-secondary">Java</span></li>
              <li><span className="text-text-secondary">Python</span></li>
              <li><span className="text-text-secondary">C#</span></li>
            </ul>
            <p className="text-text-secondary">were influenced by C. Because of its impact, C is often called:</p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-text-primary/90 bg-bg-card py-6 rounded-r-2xl text-lg">
              “The Mother Language of Programming.”
            </blockquote>
          </section>

          <section id="section-2" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">2. Why Learn C?</h2>
            <p className="text-text-secondary">Learning C helps programmers understand:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>Memory management</li>
              <li>Pointers</li>
              <li>Low-level programming</li>
              <li>Efficient coding</li>
              <li>Core programming fundamentals</li>
            </ul>
            <p className="text-text-secondary">A strong understanding of C makes it easier to learn advanced programming concepts later.</p>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-text-primary">Simple C Program</h3>
              <SyntaxHighlighter 
                language="c" 
                style={vscDarkPlus}
                customStyle={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-primary)' }}
              >
                {`#include <stdio.h>

int main() {
    printf("Hello, Competitive Programming!\\n");
    return 0;
}`}
              </SyntaxHighlighter>
              <h4 className="text-lg font-semibold text-text-primary">Concepts Used</h4>
              <ul className="list-disc pl-6 text-text-secondary/60 text-sm">
                <li>Header files</li>
                <li>main() function</li>
                <li>Output statements</li>
                <li>Program execution flow</li>
              </ul>
            </div>
          </section>

          <section id="section-3" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">3. What is C++?</h2>
            <p className="text-text-secondary">
              C++ was created by <strong>Bjarne Stroustrup</strong> as an extension of the C programming language.
            </p>
            <p className="text-text-secondary">C++ combines:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-1">
              <li>Procedural Programming</li>
              <li>Object-Oriented Programming</li>
              <li>Generic Programming</li>
              <li>Functional Features</li>
            </ul>
            <p className="text-text-secondary">Today, C++ is widely used in:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Competitive Programming', 'Game Development', 'System Software', 'Financial Systems', 'High-Performance Apps'].map(item => (
                <div key={item} className="p-3 bg-bg-card rounded-lg border border-border-primary text-xs text-text-secondary text-center">{item}</div>
              ))}
            </div>
          </section>

          <section id="section-4" className="space-y-12">
            <h2 className="text-3xl font-bold text-text-primary">4. Why Competitive Programmers Prefer C++</h2>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">1. Fast Execution Speed</h3>
              <p className="text-text-secondary">C++ is extremely fast compared to many interpreted languages. In programming contests where time limits matter, execution speed becomes critical.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">2. Standard Template Library (STL)</h3>
              <p className="text-text-secondary">The STL is one of the biggest reasons why C++ dominates competitive programming. It provides powerful built-in data structures and algorithms.</p>
              
              <h4 className="text-lg font-semibold text-text-primary">Popular STL Components</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border-primary text-sm text-text-secondary">
                  <thead className="bg-bg-card">
                    <tr>
                      <th className="p-4 border border-border-primary text-left">Component</th>
                      <th className="p-4 border border-border-primary text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['vector', 'Dynamic array'], ['stack', 'LIFO structure'], ['queue', 'FIFO structure'],
                      ['set', 'Unique sorted values'], ['map', 'Key-value storage'], ['priority_queue', 'Heap implementation'],
                      ['sort()', 'Fast sorting'], ['binary_search()', 'Efficient searching']
                    ].map(([comp, purp]) => (
                      <tr key={comp} className="hover:bg-bg-card transition-colors">
                        <td className="p-4 border border-border-primary font-mono text-accent">`{comp}`</td>
                        <td className="p-4 border border-border-primary">{purp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">STL Example</h4>
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-primary)' }}
                >
                  {`#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {5, 2, 9, 1};
    sort(v.begin(), v.end());
    for (int x : v)
        cout << x << " ";
    return 0;
}`}
                </SyntaxHighlighter>
                <p className="text-text-secondary/50 text-xs italic font-mono">Output: 1 2 5 9</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">3. Huge Community Support</h3>
              <p className="text-text-secondary">Millions of programmers use C++ worldwide. You can learn from editorials, tutorials, open-source solutions, discussion forums, and YouTube coding channels.</p>
            </div>
          </section>

          <section id="section-5" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">5. Understanding Competitive Programming</h2>
            <p className="text-text-secondary">Competitive programming is a sport where programmers solve algorithmic problems within limited time and memory constraints.</p>
            <p className="text-text-secondary font-semibold underline">A problem usually includes:</p>
            <ul className="list-disc pl-6 text-text-secondary/60 space-y-1">
              <li>Problem statement</li>
              <li>Input format</li>
              <li>Output format</li>
              <li>Constraints</li>
              <li>Sample test cases</li>
            </ul>
            <p className="text-text-secondary">The goal is to write correct solutions, optimized algorithms, clean code, and fast execution.</p>
          </section>

          <section id="section-6" className="space-y-12">
            <h2 className="text-3xl font-bold text-text-primary">6. Important Concepts Every Programmer Must Learn</h2>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">1. Time Complexity</h3>
              <p className="text-text-secondary">Time complexity measures how fast an algorithm runs.</p>
              <div className="overflow-x-auto max-w-md">
                <table className="w-full border-collapse border border-border-primary text-sm text-text-secondary">
                  <thead className="bg-bg-card">
                    <tr><th className="p-3 border border-border-primary text-left">Complexity</th><th className="p-3 border border-border-primary text-left">Performance</th></tr>
                  </thead>
                  <tbody>
                    {[['O(1)', 'Constant'], ['O(log n)', 'Very Fast'], ['O(n)', 'Linear'], ['O(n log n)', 'Efficient'], ['O(n²)', 'Slow for large inputs']].map(([c, p]) => (
                      <tr key={c}><td className="p-3 border border-border-primary font-mono text-accent">{c}</td><td className="p-3 border border-border-primary">{p}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary mt-4">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                >
                  {`for(int i = 0; i < n; i++) {
    cout << i;
}`}
                </SyntaxHighlighter>
                <p className="text-text-secondary/50 text-xs mt-2 italic">Complexity: O(n)</p>
              </div>
              <p className="text-text-secondary italic">Understanding complexity is one of the most important skills in competitive programming.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">2. Arrays and Vectors</h3>
              <p className="text-text-secondary">Arrays store multiple values. Vectors are dynamic arrays in C++.</p>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                >
                  {`int arr[5] = {1, 2, 3, 4, 5};
vector<int> v;
v.push_back(10);`}
                </SyntaxHighlighter>
              </div>
              <p className="text-text-secondary italic">Vectors are safer and more flexible than arrays.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">3. Sorting Algorithms</h3>
              <p className="text-text-secondary font-semibold italic">O(n log n)</p>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                >
                  {`sort(arr, arr + n);`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">4. Binary Search</h3>
              <p className="text-text-secondary">Binary search is one of the most important algorithms. It works only on sorted data.</p>
              <p className="text-text-secondary font-semibold italic">Complexity: O(log n)</p>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                >
                  {`int low = 0, high = n - 1;
while(low <= high) {
    int mid = (low + high) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}`}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">5. Recursion</h3>
              <p className="text-text-secondary">Recursion means a function calling itself.</p>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', padding: 0 }}
                >
                  {`int factorial(int n) {
    if(n == 0) return 1;
    return n * factorial(n - 1);
}`}
                </SyntaxHighlighter>
              </div>
              <p className="text-text-secondary">Recursion is widely used in DFS, Backtracking, DP, and Tree algorithms.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">6. Data Structures</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border-primary text-sm text-text-secondary text-left">
                  <thead className="bg-bg-card">
                    <tr><th className="p-3 border border-border-primary">Data Structure</th><th className="p-3 border border-border-primary">Use</th></tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stack', 'Undo operations'], ['Queue', 'BFS traversal'], ['Linked List', 'Dynamic memory'],
                      ['Tree', 'Hierarchical data'], ['Graph', 'Network problems'], ['Heap', 'Priority problems'],
                      ['Trie', 'String searching']
                    ].map(([ds, use]) => (
                      <tr key={ds}><td className="p-3 border border-border-primary text-accent font-semibold">{ds}</td><td className="p-3 border border-border-primary">{use}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-accent">7. Algorithms Every Programmer Should Know</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-bg-card border border-border-primary shadow-sm">
                  <h4 className="text-text-primary font-bold mb-4 border-b border-border-primary pb-2">Basic</h4>
                  <ul className="text-sm text-text-secondary space-y-2"><li>Sorting & Searching</li><li>Prefix Sum</li><li>Two Pointers</li><li>Sliding Window</li></ul>
                </div>
                <div className="p-6 rounded-xl bg-bg-card border border-border-primary shadow-sm">
                  <h4 className="text-text-primary font-bold mb-4 border-b border-border-primary pb-2">Intermediate</h4>
                  <ul className="text-sm text-text-secondary space-y-2"><li>Binary Search on Answer</li><li>Greedy Algorithms</li><li>BFS & DFS</li><li>Dynamic Programming</li></ul>
                </div>
                <div className="p-6 rounded-xl bg-bg-card border border-border-primary shadow-sm">
                  <h4 className="text-text-primary font-bold mb-4 border-b border-border-primary pb-2">Advanced</h4>
                  <ul className="text-sm text-text-secondary space-y-2"><li>Segment Tree</li><li>DSU</li><li>Dijkstra / Floyd Warshall</li><li>KMP Algorithm</li></ul>
                </div>
              </div>
            </div>
          </section>

          <section id="section-7" className="space-y-12">
            <h2 className="text-3xl font-bold text-text-primary">7. Competitive Programming Roadmap</h2>
            
            <div className="relative pl-8 border-l border-accent/30 space-y-12">
              <div className="space-y-4">
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                <h3 className="text-2xl font-bold text-accent">Beginner Level</h3>
                <p className="text-text-primary font-semibold underline">Start With:</p>
                <ul className="list-disc pl-6 text-text-secondary/60 text-sm"><li>Variables, Loops, Conditions</li><li>Functions, Arrays, Strings</li></ul>
                <p className="text-text-secondary text-xs mt-2 italic">Recommended: <a href="https://www.hackerrank.com/" target="_blank" className="text-accent hover:underline">HackerRank</a>, <a href="https://www.beecrowd.com.br/" target="_blank" className="text-accent hover:underline">Beecrowd</a></p>
              </div>

              <div className="space-y-4">
                <div className="absolute left-[-5px] top-[180px] w-[10px] h-[10px] rounded-full bg-accent" />
                <h3 className="text-2xl font-bold text-accent">Intermediate Level</h3>
                <p className="text-text-primary font-semibold underline">Learn:</p>
                <ul className="list-disc pl-6 text-text-secondary/60 text-sm"><li>STL, Sorting, Binary Search</li><li>Recursion, Greedy Algorithms</li></ul>
                <p className="text-text-secondary text-xs mt-2 italic">Recommended: <a href="https://codeforces.com/" target="_blank" className="text-accent hover:underline">Codeforces</a>, <a href="https://atcoder.jp/" target="_blank" className="text-accent hover:underline">AtCoder</a></p>
              </div>

              <div className="space-y-4">
                <div className="absolute left-[-5px] top-[340px] w-[10px] h-[10px] rounded-full bg-accent" />
                <h3 className="text-2xl font-bold text-accent">Advanced Level</h3>
                <p className="text-text-primary font-semibold underline">Focus On:</p>
                <ul className="list-disc pl-6 text-text-secondary/60 text-sm"><li>Graph Algorithms, DP</li><li>Advanced Data Structures</li><li>Optimization Techniques</li></ul>
                <p className="text-text-secondary text-xs mt-2 italic">Recommended: <a href="https://leetcode.com/" target="_blank" className="text-accent hover:underline">LeetCode</a>, <a href="https://www.topcoder.com/" target="_blank" className="text-accent hover:underline">TopCoder</a></p>
              </div>
            </div>
          </section>

          <section id="section-8" className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary">8. Tips to Become a Better Competitive Programmer</h2>
            <div className="space-y-6">
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <h3 className="text-xl font-bold text-accent mb-2">Practice Consistently</h3>
                <p className="text-text-secondary mb-4 text-sm italic font-medium">Programming is a skill developed through practice.</p>
                <p className="text-text-secondary/60 text-sm">Try solving 2–3 problems daily, mixed difficulty problems, and contest problems regularly. <strong>Consistency matters more than intensity.</strong></p>
              </div>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <h3 className="text-xl font-bold text-accent mb-2">Read Editorials</h3>
                <p className="text-text-secondary/60 text-sm">After contests, always study editorials. You will learn new techniques, better optimizations, alternative approaches, and problem-solving strategies.</p>
              </div>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <h3 className="text-xl font-bold text-accent mb-2">Learn From Others</h3>
                <p className="text-text-secondary/60 text-sm">Study solutions written by top programmers. Observe coding style, optimization methods, STL tricks, and efficient logic building.</p>
              </div>
              <div className="bg-bg-card p-6 rounded-xl border border-border-primary shadow-sm">
                <h3 className="text-xl font-bold text-accent mb-2">Participate in Contests</h3>
                <p className="text-text-secondary/60 text-sm">Contests improve speed, accuracy, pressure handling, and analytical thinking.</p>
              </div>
            </div>
          </section>

          <section id="section-9" className="space-y-8 bg-red-500/5 p-8 rounded-2xl border border-red-500/10 shadow-sm">
            <h2 className="text-3xl font-bold text-text-primary">9. Common Beginner Mistakes</h2>
            <div className="space-y-4">
              {[
                ['1. Ignoring Time Complexity', 'A correct solution can still fail if it is too slow.'],
                ['2. Memorizing Without Understanding', 'Always understand logic instead of memorizing code.'],
                ['3. Avoiding Difficult Problems', 'Difficult problems build problem-solving ability.'],
                ['4. Giving Up Too Early', 'Competitive programming requires patience and consistency.']
              ].map(([t, d]) => (
                <div key={t}>
                  <h4 className="text-red-400 font-bold">{t}</h4>
                  <p className="text-text-secondary/60 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="section-10" className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">10. Why Competitive Programming Matters</h2>
            <p className="text-text-secondary">Competitive programming improves logical thinking, problem-solving skills, coding efficiency, interview preparation, and career opportunities.</p>
            <p className="text-text-secondary">Many top tech companies value CP experience, including:</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {['Google', 'Microsoft', 'Meta', 'Amazon'].map(brand => (
                <span key={brand} className="px-4 py-2 bg-bg-card border border-border-primary rounded-lg text-text-primary font-medium">{brand}</span>
              ))}
            </div>
            
            <div className="mt-12 bg-accent/5 p-8 rounded-2xl border border-accent/10 shadow-sm">
              <h3 className="text-xl font-bold text-accent mb-4">Useful Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="https://cplusplus.com/" target="_blank" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">🔗 C++ Reference</a></li>
                <li><a href="https://cp-algorithms.com/" target="_blank" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">🔗 CP Algorithms</a></li>
                <li><a href="https://www.geeksforgeeks.org/" target="_blank" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">🔗 GeeksforGeeks</a></li>
                <li><a href="https://usaco.guide/" target="_blank" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">🔗 USACO Guide</a></li>
              </ul>
            </div>
          </section>

          <section id="section-11" className="space-y-8 pt-12 border-t border-border-primary">
            <h2 className="text-3xl font-bold text-text-primary">Final Thoughts</h2>
            <p className="text-text-secondary leading-relaxed">C and C++ are more than programming languages — they are tools that develop logical thinking and deep problem-solving ability.</p>
            <div className="space-y-4">
              <p className="text-accent font-bold italic">If you truly want to become a strong competitive programmer:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-text-secondary">
                <li>• Learn fundamentals deeply</li>
                <li>• Practice consistently</li>
                <li>• Analyze problems carefully</li>
                <li>• Study algorithms regularly</li>
                <li>• Never stop solving problems</li>
              </ul>
            </div>
            <p className="text-text-secondary">Competitive programming is not only about winning contests. It is about developing the mindset to solve complex problems efficiently.</p>
            <p className="text-text-secondary">Whether you are preparing for coding interviews, university contests, ICPC, or online coding competitions, mastering C and C++ will give you a strong foundation in computer science and software development.</p>
            
            <div className="pt-8 text-center">
              <blockquote className="text-2xl text-accent italic font-bold">
                “Every problem you solve makes you a better programmer.”
              </blockquote>
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
