import { motion } from 'framer-motion';
import React from 'react';

interface SponsorsProps {
  setCurrentPage: (page: string) => void;
}

const Sponsors: React.FC<SponsorsProps> = ({ setCurrentPage }) => {
  const titleSponsors = [
    // {
    //   name: 'GeeksforGeeks',
    //   logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
    //   description: 'Leading platform for computer science education and competitive programming',
    //   website: 'https://geeksforgeeks.org',
    //   category: 'Innovation Partner'
    // }
  ];

  const supportingSponsors = [
    {
      name: 'Hi Devs',
      logo: '/hidevesedit.png',

      description: 'Community platform connecting developers worldwide',
      website: 'https://app.hidevs.xyz/',
      category: 'Community Partner'
    }
  ];

  const benefits = [
    // {
    //   title: 'GeeksforGeeks Certifications',
    //   description: 'Winners and top 10 participants receive official GeeksforGeeks certificates',
    //   icon: '🏆'
    // },
    {
      title: 'Exclusive Goodies',
      description: 'Premium swag kits, t-shirts, and tech accessories for winners',
      icon: '🎁'
    },
    {
      title: 'Career Opportunities',
      description: 'Direct internship and placement opportunities with sponsor companies',
      icon: '💼'
    },
    {
      title: 'Mentorship Programs',
      description: 'Access to exclusive mentorship programs and learning resources',
      icon: '🎓'
    }
  ];

  const sponsorshipTiers = [
    {
      tier: 'Title Sponsor',
      benefits: [
        'Logo placement in all marketing materials',
        'Stage branding and speaking opportunity',
        'Access to participant resumes',
        'Dedicated booth space',
        'Social media mentions',
      ],
      investment: 'Contact for custom package'
    },
    {
      tier: 'Innovation Partner',
      benefits: [
        'Logo on event website and materials',
        'Mentorship opportunity',
        'Access to final presentations',
        'Social media coverage',
      ],
      investment: '₹5,00,000'
    },
    {
      tier: 'Community Partner',
      benefits: [
        'Logo placement',
        'Networking opportunities',
        'Certificate co-branding',
        'Event updates',
      ],
      investment: '₹2,00,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">OUR SPONSORS</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud to partner with industry leaders who share our vision of fostering innovation
            and supporting the next generation of tech talent.
          </p>
        </motion.div>

        {/* Title Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">INNOVATION PARTNER</h2>
          <div className="flex justify-center">
            {titleSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-12 text-center max-w-md"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-white mb-4">{sponsor.name}</h3>
                <p className="text-gray-300 mb-6">{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supporting Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">SUPPORTED BY</h2>

          <div className="flex justify-center items-center"> {/* Changed from grid to flex with center alignment */}
            {supportingSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center max-w-md w-full" // Added max-w-md and w-full
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{sponsor.category}</p>
                <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-lg
    hover:bg-cyan-400/30 transition-colors w-full text-center mx-auto max-w-[200px]"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsor Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">PARTICIPANT BENEFITS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 flex items-start space-x-4"
              >
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact for Sponsorship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Interested in Sponsoring?</h3>
          <p className="text-gray-300 mb-6">
            Get in touch with our sponsorship team to discuss custom packages and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setCurrentPage('contact')}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgb(0, 240, 255)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#00f0ff] text-black font-orbitron font-bold rounded-lg
              hover:bg-[#00d8e6] transition-all duration-300 tracking-wider relative overflow-hidden
              before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%]
              hover:before:translate-x-[100%] before:transition-transform before:duration-500"
            >
              Contact Sponsorship Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
