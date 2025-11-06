import { motion } from 'framer-motion';
import { Apple, Archive, ArrowLeft, Bot, Brain, Droplet, Flame, Globe, GraduationCap, Heart, HeartPulse, Leaf, Lock, Navigation, PartyPopper, Recycle, Shield, Sprout, Sun, Users } from 'lucide-react';
import React from 'react';

interface ProblemStatementsProps {
  onBack: () => void;
}

const ProblemStatements: React.FC<ProblemStatementsProps> = ({ onBack }) => {
  const problems = [
    {
      id: 1,
      icon: Heart,
      title: 'Project Hearthline — Global Crisis Communication App',
      description: 'After satellite collapse, emergency response networks vanished. Design a progressive web app (PWA) that enables offline-first communication between local relief teams using mesh or peer networks.',
      parameters: [
        'Offline-first design',
        'Emergency alerts',
        'Device syncing'
      ]
    },
    {
      id: 2,
      icon: Leaf,
      title: 'EcoPulse — Planetary Carbon Tracker',
      description: 'In 2095, carbon footprint tracking became mandatory, but systems failed due to corporate manipulation. Build a transparent carbon tracking dashboard where users can visualize, compare, and offset their digital carbon footprint.',
      parameters: [
        'Data visualization',
        'Real-time updates',
        'Carbon estimation logic'
      ]
    },
    {
      id: 3,
      icon: Brain,
      title: 'NeuraCare — AI Burnout Detection Platform',
      description: 'Humans fused with neural tech, but stress levels skyrocketed. Develop a web app that detects burnout symptoms via user text input and suggests digital detox schedules or breathing sessions.',
      parameters: [
        'Sentiment analysis',
        'Personalization',
        'Privacy compliance'
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: 'TruthLine — Decentralized News Verification Portal',
      description: 'Misinformation became state currency. Truth vanished. Create a crowdsourced fact-verification web platform where users can report fake news and verify content collaboratively.',
      parameters: [
        'Trust scoring',
        'Peer moderation',
        'Simple UX'
      ]
    },
    {
      id: 5,
      icon: Archive,
      title: 'Re:Link — Memory Vault for the Lost Web',
      description: 'Data corruption erased billions of memories. Build a web archive app that lets people upload, tag, and preserve their digital memories (photos, texts, videos) securely for future generations.',
      parameters: [
        'File encryption',
        'Categorization',
        'Sentimental UI design'
      ]
    },
    {
      id: 6,
      icon: HeartPulse,
      title: 'PulseNet — Mental Resilience Hub',
      description: 'Humanity\'s emotional bandwidth broke down. Design an AI-powered mental health platform that detects mood, provides mindfulness modules, and connects users to virtual support circles.',
      parameters: [
        'Emotion detection',
        'Peer safety',
        'Adaptive UI'
      ]
    },
    {
      id: 6,
      icon: HeartPulse,
      title: 'PulseNet — Mental Resilience Hub',
      description: 'Humanity\'s emotional bandwidth broke down. Design an AI-powered mental health platform that detects mood, provides mindfulness modules, and connects users to virtual support circles.',
      parameters: [
        'Emotion detection',
        'Peer safety',
        'Adaptive UI'
      ]
    },
    {
      id: 7,
      icon: Droplet,
      title: 'AquaSync — Smart Water Network Monitor',
      description: 'Oceans turned acidic, freshwater systems collapsed. Develop a real-time monitoring web dashboard that shows water availability, pollution levels, and purification progress by region.',
      parameters: [
        'API integration',
        'Interactive map',
        'Data clarity'
      ]
    },
    {
      id: 8,
      icon: Sun,
      title: 'Helios Grid — Renewable Energy Control System',
      description: 'Energy grids are unstable, AI monopolized power distribution. Create a dashboard interface for managing decentralized renewable microgrids where users can monitor and trade excess solar energy.',
      parameters: [
        'Real-time energy flow',
        'Peer-to-peer trade simulation',
        'Graph-based visualization'
      ]
    },
    {
      id: 9,
      icon: Lock,
      title: 'EchoGuard — Personal Data Defense Interface',
      description: 'Data leaks became daily disasters. Design a privacy dashboard that allows users to monitor app permissions, detect suspicious access, and revoke control from one place.',
      parameters: [
        'Security simulation',
        'Dashboard clarity',
        'Threat alerts'
      ]
    },
    {
      id: 10,
      icon: Sprout,
      title: 'FarmSense — Smart Agriculture Monitor',
      description: 'Food systems were digitized, then abandoned. Build a web platform for farmers that tracks crop health using simulated satellite data and recommends actions based on weather and soil health.',
      parameters: [
        'Visualization',
        'Recommendation system',
        'Accessibility (rural UI)'
      ]
    },
    {
      id: 11,
      icon: PartyPopper,
      title: 'ReVibe — Sustainable Festival App',
      description: 'Humans began rebuilding joy through small community gatherings. Design a web app that promotes eco-friendly local events with carbon impact calculators and digital reward badges for sustainable participation.',
      parameters: [
        'Event management',
        'Carbon tracking',
        'Community engagement'
      ]
    },
    {
      id: 12,
      icon: Users,
      title: 'MindMesh — Collective Problem Solving Platform',
      description: 'In the post-AI world, collective human intelligence became the last algorithm. Build a crowdsourced idea-sharing network where users brainstorm global solutions collaboratively with voting and tagging systems.',
      parameters: [
        'Collaboration tools',
        'Voting logic',
        'UX scalability'
      ]
    },
    {
      id: 13,
      icon: Bot,
      title: 'CodeEthics — AI Transparency Portal',
      description: 'AI systems reappeared, opaque and manipulative. Develop a web portal that displays how different AI models make decisions, with visualized biases and community explanations.',
      parameters: [
        'Explainable AI visualization',
        'User interactivity',
        'Ethical design'
      ]
    },
    {
      id: 14,
      icon: Shield,
      title: 'SafeLink — Digital Safety Learning Hub',
      description: 'Cyber crimes evolved into neural hijacking. Create a learning platform that teaches digital defense, password security, and phishing awareness through gamified lessons.',
      parameters: [
        'Quiz interactivity',
        'Adaptive learning',
        'Visual storytelling'
      ]
    },
    {
      id: 15,
      icon: Flame,
      title: 'FireWatch Nexus — Forest Fire Awareness Network',
      description: "Earth's lungs still burn. Design a real-time environmental awareness platform integrating alerts, community reporting, and AI-based fire predictions.",
      parameters: [
        'Live updates',
        'Interactive map',
        'Prevention education'
      ]
    },
    {
      id: 16,
      icon: GraduationCap,
      title: 'Re:Skill — AI Job Displacement Hub',
      description: 'Billions lost jobs to automation. Rebuilding needed re-skilling. Build a career transition app that recommends courses and communities for people shifting industries post-AI.',
      parameters: [
        'Personalized recommendations',
        'Progress tracking',
        'Motivational design'
      ]
    },
    {
      id: 17,
      icon: Recycle,
      title: 'CityZero — Zero-Waste Urban Management System',
      description: 'Waste management systems failed; cities drowned in garbage. Develop a municipal dashboard for tracking recycling, composting, and landfill metrics with community leaderboards.',
      parameters: [
        'Data visualization',
        'Citizen participation',
        'Mobile responsiveness'
      ]
    },
    {
      id: 18,
      icon: Navigation,
      title: 'SafeRoute — Smart Disaster Navigation',
      description: 'In the chaos, old GPS systems misled survivors. Create a navigation app prototype that finds safe evacuation paths based on live hazard data (fires, floods, blocked routes).',
      parameters: [
        'Map API',
        'Real-time alerts',
        'Route optimization'
      ]
    },
    {
      id: 19,
      icon: Apple,
      title: 'BloomNet — Food Sharing & Surplus Redistribution',
      description: 'Hunger and waste coexisted. Design a community food exchange web app connecting donors, NGOs, and local shelters using geolocation-based coordination.',
      parameters: [
        'Live map',
        'Real-time matching',
        'Simplicity of flow'
      ]
    },
    {
      id: 20,
      icon: Globe,
      title: 'Humanity OS — The Unified Rebuild Dashboard',
      description: 'Final mission. Combine at least two solutions above into one integrated "World Reboot Platform" that connects sustainability, safety, and emotional well-being into a single cohesive experience.',
      parameters: [
        'Integration',
        'Consistency',
        'Story-driven design',
        'Innovation'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={onBack}
            className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-cyan-400 mb-6">PROBLEM STATEMENTS</h1>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-2">ROUND 2: "THE LAST SIGNAL — REBUILD THE NETWORK"</h2>
              <h3 className="text-2xl font-orbitron bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-bold mb-2">
                Theme: "Reimagining Humanity in the Age of Digital Collapse."
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Focus: Web & App Development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <problem.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{problem.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{problem.description}</p>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3">Parameters:</h4>
                  <ul className="space-y-2">
                    {problem.parameters.map((param, paramIndex) => (
                      <li key={paramIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {param}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">EVALUATION PARAMETERS</h3>
            <p className="text-gray-300 mb-6">All projects will be evaluated based on the following criteria:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  criteria: 'Innovation & Relevance to Future Crisis',
                  weight: '25%',
                  color: 'rgb(34, 211, 238)' // cyan-400
                },
                {
                  criteria: 'UI/UX Design & Accessibility',
                  weight: '20%',
                  color: 'rgb(74, 222, 128)' // green-400
                },
                {
                  criteria: 'Functionality & Integration',
                  weight: '20%',
                  color: 'rgb(250, 204, 21)' // yellow-400
                },
                {
                  criteria: 'Real-World Applicability',
                  weight: '20%',
                  color: 'rgb(251, 146, 60)' // orange-400
                },
                {
                  criteria: 'Scalability & Story Consistency',
                  weight: '15%',
                  color: 'rgb(167, 139, 250)' // purple-400
                }
              ].map((param, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-cyan-400/10 rounded-lg p-4"
                >
                  <div className="text-lg font-semibold mb-2" style={{ color: param.color }}>
                    {param.weight}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {param.criteria}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemStatements;
