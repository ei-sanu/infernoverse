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
      role: 'Event Director and Chief Executive Officer',
      image: 'shivansh.jpeg',
      bio: 'Leads the vision and execution of the hackathon, ensuring every detail aligns with the event’s goals. Coordinates teams, schedules, and resources to deliver an engaging and impactful experience for all participants.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shivansh-singh-08july2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

      }
    },
    {
      name: 'Somesh Ranjan Biswal',
      role: 'Platform Developer and Chief Technical Officer',
      image: '/sanunew.jpeg',
      bio: 'Developer with expertise in building scalable hackathon platforms, specializing in real-time collaboration tools',
      social: {
        linkedin: 'www.linkedin.com/in/somesh-biswal-b73576320',
        github: 'https://github.com/ei-sanu',
        email: 'someshranjanbiswal13678@gmail.com'

      }
    },
    {
      name: 'Vinay Kothari',
      role: 'CO-CEO',
      image: 'vinayf.jpeg',
      bio: 'Event management expert with focus on tech conferences and hackathons',
      social: {
        linkedin: 'https://www.linkedin.com/in/vinay-k-929b71347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    }
  ];

  // const technicalTeam = [
  //   {
  //     name: 'Somesh Ranjan Biswal',
  //     role: 'Platform Developer and Chief Technical Officer',
  //     image: '/sanunew.jpeg',
  //     bio: 'Developer with expertise in building scalable hackathon platforms, specializing in real-time collaboration tools',
  //     social: {
  //       linkedin: 'www.linkedin.com/in/somesh-biswal-b73576320',
  //       github: 'https://github.com/ei-sanu',
  //       email: 'someshranjanbiswal13678@gmail.com'

  //     }
  //   },
  //   {
  //     name: 'Vishwajeet survase',
  //     role: 'Tech Member',
  //     image: 'vishwajeet.jpeg',
  //     bio: 'AI ML enthusiast with a passion for building innovative solutions',
  //     social: {
  //       linkedin: 'https://www.linkedin.com/in/shivansh-singh-08july2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',

  //     }
  //   },
  // ];
  const coordinator = [
    {
      name: 'Anshit Kumar',
      role: 'Event Coordinator',
      image: '/Anshit.jpg',
      bio: 'I provide creative and practical suggestions to ensure the event is seamlessly planned and executed with excellence',
      social: {
        linkedin: 'https://www.linkedin.com/in/anshit-kumar-841690313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    },
    {
      name: 'Paras Patil',
      role: 'Event Coordinator',
      image: '/paras.jpeg',
      bio: 'I provide creative and practical suggestions to ensure the event is seamlessly planned and executed with excellence',
      social: {
        linkedin: 'https://www.linkedin.com/in/anshit-kumar-841690313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
  ];

  const judges = [
    {
      name: 'Raghu Raja Sharma',
      role: 'Technical Expert, CSE Department',
      image: '/raghurajguest.jpeg', // Add image path when available

      social: {
        linkedin: 'linkedin.com/in/raghu-sharma-437571146'
      }
    },
    {
      name: 'Himanshu Sharma',
      role: 'Ex-SDE @Amazon | Founder @CodeDevh',
      image: '/himanshusir.jpeg', // Add image path when available

      social: {
        linkedin: 'linkedin.com/in/himanshu-sharma-8b4766251'
      }
    },
    {
      name: 'Praful Yadav',
      role: 'Full Stack Developer @CodeBooks Solutions',
      image: '/prafulyadavguest.jpeg', // Add image path when available

      social: {
        linkedin: 'linkedin.com/in/praful-yadav-b46100215'
      }
    }
  ];

  const guests = [
    {
      name: 'Dr. Nitin Bhardwaj',
      role: 'Deputy Dean, Division of Youth Affairs',
      organization: 'Lovely Professional University',
      image: '/nitinsir.jpeg', // Add the image to your public folder
      speciality: 'Youth Development & Student Affairs Expert',
      bio: 'Leading academic administrator with expertise in student development and university affairs',
      social: {
        linkedin: '#' // Add LinkedIn if available
      }
    },
    {
      name: 'Mr. Deepak Chawla',
      role: 'Founder & CEO @HiDevs',
      organization: 'hidevs.xyz',
      image: '/deepakchawla.jpeg',
      speciality: 'Generative AI Expert',
      bio: 'Workshop on Generative AI – Building Smarter Futures with AI',
      social: {
        linkedin: 'linkedin.com/in/deepakchawla1307'
      }
    }
  ];

  const volunteers = [
    {
      name: 'Student Coordinator Team',
      role: 'Campus Ambassadors',
      count: '30+ Students',
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
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl"> {/* Changed to 3 columns and increased max width */}
              {organizers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center" // Reduced padding slightly
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400/20" // Adjusted image size
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  {renderSocialLinks(member.social)}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Team
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">TECHNICAL TEAM</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
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
          </div>

        </motion.div> */}

        {/* Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">EVENT COORDINATORS</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
              {coordinator.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400/20"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  {renderSocialLinks(member.social)}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Judges Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">👩⚖️ JUDGES PANEL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
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
                  src={judge.image || '/default-avatar.png'} // Add a default avatar image
                  alt={judge.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400/20"
                />
                <h3 className="text-lg font-bold text-white mb-1">{judge.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{judge.uid}</p>
                <p className="text-cyan-400 font-medium mb-3">{judge.role}</p>
                {renderSocialLinks(judge.social)}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Guests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">✨ SPECIAL GUESTS</h2>
          <div className="flex justify-center"> {/* Added flex container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"> {/* Changed to 2 columns and max-width */}
              {guests.map((guest, index) => (
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
                    src={guest.image || '/default-avatar.png'}
                    alt={guest.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400/20"
                  />
                  <h3 className="text-lg font-bold text-white mb-1">{guest.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{guest.role}</p>
                  <p className="text-gray-300 text-sm mb-2">{guest.organization}</p>
                  <p className="text-gray-400 text-sm mb-2">{guest.speciality}</p>
                  <p className="text-gray-300 text-sm mb-3">{guest.bio}</p>
                  {renderSocialLinks(guest.social)}
                </motion.div>
              ))}
            </div>
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
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeH3w7n7pbhhrO75_HeJ3GtrAug0HBB6HXn2b4Q5xow6hrPyA/viewform', '_blank')}
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
