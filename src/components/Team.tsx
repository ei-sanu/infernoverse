import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

// First, update the component props to include setCurrentPage
interface TeamProps {
  setCurrentPage: (page: string) => void;
}

const Team: React.FC<TeamProps> = ({ setCurrentPage }) => {
  const organizers = [
    {
      name: 'Shivansh Singh',
      role: 'Event Director',
      image: 'shivansh.jpeg',
      bio: 'Leads the vision and execution of the hackathon, ensuring every detail aligns with the event’s goals. Coordinates teams, schedules, and resources to deliver an engaging and impactful experience for all participants.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shivansh-singh-08july2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

      }
    },
    // {
    //   name: 'Sarah Wilson',
    //   role: 'Technical Lead',
    //   image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   bio: 'Full-stack developer and AI researcher passionate about education',
    //   social: {
    //     linkedin: '#',
    //     twitter: '#',
    //     github: '#',
    //     email: 'sarah@infernoverse.com'
    //   }
    // },
    {
      name: 'Vinay Kothari',
      role: 'Operations Manager',
      image: 'vinayf.jpeg',
      bio: 'Event management expert with focus on tech conferences and hackathons',
      social: {
        linkedin: 'https://www.linkedin.com/in/vinay-k-929b71347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    }
  ];

  const technicalTeam = [
    {
      name: 'Somesh Ranjan Biswal',
      role: 'Platform Developer and Technical Head',
      image: '/sanu.png',
      bio: 'Developer with expertise in building scalable hackathon platforms, specializing in real-time collaboration tools',
      social: {
        linkedin: 'www.linkedin.com/in/somesh-biswal-b73576320',
        github: 'https://github.com/ei-sanu',
        email: 'someshranjanbiswal13678@gmail.com'

      }
    },
    {
      name: 'Vishwajeet survase',
      role: 'Tech Member',
      image: 'vishwajeet.jpeg',
      bio: 'AI ML enthusiast with a passion for building innovative solutions',
      social: {
        linkedin: 'https://www.linkedin.com/in/shivansh-singh-08july2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

      }
    },
    {
      name: 'Kushagra Bajpei',
      role: 'Tech Member',
      image: 'kushu.png',
      bio: 'Passionate tech enthusiast driven by innovation, problem-solving, and building impactful digital solutions.',
      social: {
        linkedin: 'https://www.linkedin.com/in/kushagra-bajpei-248583316',

      }
    }
  ];

  const mentors = [
    {
      name: 'Dr. Lisa Thompson',
      role: 'AI Research Mentor',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Professor of Computer Science specializing in Machine Learning',
      company: 'Stanford University',
      social: {
        linkedin: '#',
        email: 'lisa@stanford.edu'
      }
    },
    {
      name: 'Raj Patel',
      role: 'Industry Mentor',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Senior Engineering Manager at leading tech company',
      company: 'Google',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'raj@google.com'
      }
    },
    {
      name: 'Maria Garcia',
      role: 'Startup Mentor',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Serial entrepreneur and venture capitalist',
      company: 'TechVentures',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@techventures.com'
      }
    }
  ];

  const volunteers = [
    {
      name: 'Student Coordinator Team',
      role: 'Campus Ambassadors',
      count: '15+ Students',
      description: 'Dedicated students from various universities helping with event coordination'
    },
    {
      name: 'Technical Support Team',
      role: 'IT Support',
      count: '10+ Volunteers',
      description: 'Technical volunteers ensuring smooth operation of all systems'
    },
    {
      name: 'Registration Team',
      role: 'Participant Support',
      count: '8+ Volunteers',
      description: 'Friendly volunteers helping with registration and participant queries'
    }
  ];

  const renderSocialLinks = (social: any) => (
    <div className="flex space-x-3 mt-4">
      {social.linkedin && (
        <a href={social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {social.twitter && (
        <a href={social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {social.github && (
        <a href={social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
      )}
      {social.email && (
        <a href={`mailto:${social.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">OUR TEAM</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals behind Inferno Verse who are dedicated to creating
            an unforgettable hackathon experience for all participants.
          </p>
        </motion.div>

        {/* Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">CORE ORGANIZERS</h2>
          <div className="flex justify-center"> {/* Added flex container for centering */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl"> {/* Changed to 2 columns and added max width */}
              {organizers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400/20"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed flex justify-center">{member.bio}</p>
                  {renderSocialLinks(member.social)}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">TECHNICAL TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400/20"
                />
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                {renderSocialLinks(member.social)}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">EXPERT MENTORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400/20"
                />
                <h3 className="text-lg font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-cyan-400 font-medium mb-1">{mentor.role}</p>
                <p className="text-gray-400 text-sm mb-3">{mentor.company}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{mentor.bio}</p>
                {renderSocialLinks(mentor.social)}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">VOLUNTEER TEAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteers.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{team.count.split('+')[0]}+</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{team.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{team.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to contribute to the hackathon community.
            Whether you're interested in organizing, mentoring, or volunteering, we'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setCurrentPage('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              Volunteer with Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
