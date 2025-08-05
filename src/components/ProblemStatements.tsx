import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Leaf, Shield, Car, Home, ArrowLeft } from 'lucide-react';

interface ProblemStatementsProps {
  onBack: () => void;
}

const ProblemStatements: React.FC<ProblemStatementsProps> = ({ onBack }) => {
  const problems = [
    {
      id: 1,
      icon: Brain,
      title: 'AI-Powered Mental Health Assistant',
      category: 'Healthcare',
      difficulty: 'Advanced',
      description: 'Develop an AI assistant that can provide real-time mental health support, mood tracking, and personalized recommendations for stress management and emotional well-being.',
      requirements: [
        'Natural language processing for conversation',
        'Sentiment analysis and mood detection',
        'Personalized recommendation engine',
        'Crisis detection and intervention protocols',
        'Privacy-first approach with data encryption'
      ],
      techStack: ['Python', 'TensorFlow/PyTorch', 'NLP Libraries', 'React/Flutter', 'Node.js'],
      prizes: '₹25,000 + Internship Opportunities'
    },
    {
      id: 2,
      icon: Leaf,
      title: 'Smart Agricultural Monitoring System',
      category: 'Agriculture',
      difficulty: 'Intermediate',
      description: 'Create an IoT-based AI solution that monitors crop health, soil conditions, and weather patterns to optimize farming practices and increase yield.',
      requirements: [
        'Computer vision for crop health analysis',
        'IoT sensor integration for soil/weather data',
        'Predictive analytics for crop yield',
        'Mobile app for farmers',
        'Real-time alerts and recommendations'
      ],
      techStack: ['Python', 'OpenCV', 'IoT Sensors', 'Machine Learning', 'Mobile Development'],
      prizes: '₹20,000 + Mentorship Program'
    },
    {
      id: 3,
      icon: Car,
      title: 'Autonomous Traffic Management',
      category: 'Smart Cities',
      difficulty: 'Advanced',
      description: 'Design an AI system that can optimize traffic flow in real-time, reduce congestion, and improve road safety through intelligent traffic signal control.',
      requirements: [
        'Computer vision for traffic analysis',
        'Real-time traffic optimization algorithms',
        'Integration with existing traffic infrastructure',
        'Emergency vehicle prioritization',
        'Environmental impact reduction'
      ],
      techStack: ['Python', 'Computer Vision', 'Reinforcement Learning', 'Edge Computing', 'APIs'],
      prizes: '₹25,000 + Industry Partnership'
    },
    {
      id: 4,
      icon: Shield,
      title: 'AI Cybersecurity Threat Detector',
      category: 'Cybersecurity',
      difficulty: 'Advanced',
      description: 'Build an AI-powered system that can detect, analyze, and respond to cybersecurity threats in real-time, protecting digital infrastructure.',
      requirements: [
        'Anomaly detection algorithms',
        'Real-time threat analysis',
        'Automated response mechanisms',
        'Network traffic monitoring',
        'Threat intelligence integration'
      ],
      techStack: ['Python', 'Machine Learning', 'Network Security', 'Big Data', 'APIs'],
      prizes: '₹30,000 + Job Opportunities'
    },
    {
      id: 5,
      icon: Heart,
      title: 'Medical Diagnosis Assistant',
      category: 'Healthcare',
      difficulty: 'Advanced',
      description: 'Develop an AI assistant that can help healthcare professionals with preliminary diagnosis based on symptoms, medical history, and diagnostic images.',
      requirements: [
        'Medical image analysis (X-rays, MRIs)',
        'Symptom analysis and pattern recognition',
        'Integration with medical databases',
        'Explainable AI for medical decisions',
        'HIPAA-compliant data handling'
      ],
      techStack: ['Python', 'Deep Learning', 'Medical Imaging', 'NLP', 'Secure APIs'],
      prizes: '₹25,000 + Research Collaboration'
    },
    {
      id: 6,
      icon: Home,
      title: 'Smart Energy Management System',
      category: 'Sustainability',
      difficulty: 'Intermediate',
      description: 'Create an AI solution that optimizes energy consumption in smart homes and buildings, reducing costs and environmental impact.',
      requirements: [
        'Energy consumption prediction',
        'Smart device integration',
        'User behavior analysis',
        'Renewable energy optimization',
        'Cost-benefit analysis dashboard'
      ],
      techStack: ['Python', 'IoT', 'Time Series Analysis', 'Web Development', 'Mobile Apps'],
      prizes: '₹20,000 + Startup Incubation'
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from these exciting AI challenges designed to solve real-world problems. 
              Each problem statement offers unique opportunities to showcase your skills and make an impact.
            </p>
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
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <problem.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{problem.title}</h3>
                      <span className="text-cyan-400 text-sm">{problem.category}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{problem.description}</p>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {problem.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-3">Suggested Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {problem.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  <div className="text-green-400 font-semibold">
                    🏆 {problem.prizes}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                  >
                    Choose This Problem
                  </motion.button>
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
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Additional Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-white font-semibold mb-2">Submission Requirements</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Working prototype/demo</li>
                  <li>• Source code repository</li>
                  <li>• Documentation & README</li>
                  <li>• 3-minute demo video</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Judging Criteria</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Innovation & Creativity (30%)</li>
                  <li>• Technical Implementation (30%)</li>
                  <li>• Problem Solving (25%)</li>
                  <li>• Presentation & Demo (15%)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Resources Available</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Cloud credits (AWS/Azure/GCP)</li>
                  <li>• API access keys</li>
                  <li>• Datasets and libraries</li>
                  <li>• 24/7 mentor support</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemStatements;