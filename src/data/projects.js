import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';

export const projects = [
  {
    id: 'ai-lawyer',
    title: 'AI Law Chatbot for Bangladeshi Law',
    description: 'An AI-powered chatbot that provides legal information and assistance based on Bangladeshi law, utilizing natural language processing to understand user queries and deliver accurate responses.',
    image: project1,
    liveUrl: '#',
    githubUrl: 'https://github.com/ashikulislam30/ai-lawyer',
    tech: ['Next.js', 'PostgreSQL', 'Hugging Face', 'LLMs', 'NLP', 'AI Model Training', 'AI Fine-tuning', 'Tailwind CSS'],
    status: 'Completed',
    timeline: '4 Weeks',
    role: 'Full Stack Developer',
    team: 'Solo',
  },
  {
    id: 'blood-hero',
    title: 'Blood Hero - Blood Donation Platform',
    description: 'A platform that connects blood donors with recipients, facilitating easy and efficient blood donation processes through user-friendly interfaces and real-time notifications.',
    image: project2,
    liveUrl: '#',
    githubUrl: 'https://github.com/ashikulislam30/blood-heroes',
    tech: ['PHP', 'CSS', 'MySQL'],
    status: 'Completed',
    timeline: '3 Weeks',
    role: 'Backend Developer',
    team: 'Team of 3',
  },
  {
    id: 'personal-messenger',
    title: 'Nexus - Secure Personal Messenger',
    description: 'A real-time messaging platform designed for secure communication, featuring instant message delivery, user presence tracking, and a modern chat interface.',
    image: project3,
    liveUrl: 'https://messenger.ashikulislam.me/',
    githubUrl: 'https://github.com/ashikulislam30/Personal_Messenger',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    status: 'In Progress',
    timeline: 'Ongoing',
    role: 'Full Stack Developer',
    team: 'Solo',
  },
];
