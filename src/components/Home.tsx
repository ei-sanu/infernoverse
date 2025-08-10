import { motion } from 'framer-motion';
import { Calendar, Clock, Code, Lightbulb, MapPin, Trophy, Users } from 'lucide-react';
import React from 'react';
import CountdownTimer from './CountdownTimer';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  user: any;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage, user }) => {
  const eventHighlights = [
    {
      icon: Code,
      title: 'INTENSE CODING',
      description: 'High-intensity coding marathon bringing together the brightest minds to build groundbreaking solutions.',
    },
    {
      icon: Lightbulb,
      title: 'REAL CHALLENGES',
      description: 'Diverse problem statements tackling real-world issues that need innovative technological solutions.',
    },
    {
      icon: Users,
      title: 'EXPERT MENTORSHIP',
      description: 'Guidance from industry professionals to help refine ideas and overcome technical obstacles.',
    },
    {
      icon: Trophy,
      title: 'SHOWCASE TALENTS',
      description: 'Opportunity to demonstrate your skills in front of top recruiters and potential investors.',
    },
  ];

  const faqs = [
    {
      question: 'Who can participate in Inferno Verse?',
      answer: 'Inferno Verse is open to students, professionals, and tech enthusiasts from across North India. Whether you\'re a student, a budding entrepreneur, or a coding prodigy, you\'re welcome to join!',
    },
    {
      question: 'What\'s the team size requirement?',
      answer: 'Teams can consist of 2-4 members. Individual participants can also register, and we\'ll help match you with a team based on skills and interests.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, any specific hardware you might need for your project, and your enthusiasm!',
    },
    {
      question: 'Are there any prizes?',
      answer: 'Yes! Inferno Verse offers substantial cash prizes for winners, opportunities for internships and job placements, and special recognition from our sponsors. Detailed prize information will be announced soon.',
    },
    {
      question: 'Can I start working on my project before the hackathon?',
      answer: 'No, all projects must be started from scratch at the beginning of the hackathon. However, you can brainstorm ideas beforehand. All code must be written during the event duration.',
    },
  ];

  const sponsors = [
    // {
    //   category: 'INNOVATION PARTNER',
    //   name: 'GeeksforGeeks',
    //   logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
    // },
    {
      category: 'SUPPORTED BY',
      name: 'Hi Devs',
      logo: '/api/placeholder/150/150',
    },
  ];

  const NeonLine: React.FC = () => (
    <motion.div
      className="h-[1px] bg-[#00f0ff]/20"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        boxShadow: '0 0 10px #00f0ff',
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0d0d1a] to-[#000000]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="cyberpunk-title text-6xl md:text-8xl mb-6 neon-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              textShadow: '0 0 30px #00f0ff, 0 0 60px #00f0ff, 0 0 90px #00f0ff'
            }}
          >
            INFERNO VERSE
          </motion.h1>

          <motion.p
            className="cyberpunk-subtitle text-2xl md:text-3xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            CODE | CREATE | CONQUER
          </motion.p>

          <motion.p
            className="font-exo text-lg md:text-xl mb-8 max-w-4xl mx-auto text-[#e6e6e6]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A premier 24-hour AI Hackathon bringing together 1,000+ brilliant innovators
          </motion.p>

          <div className="flex items-center justify-center space-x-4 mb-8 text-cyan-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>September 20, 2025</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>LPU, Punjab</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>24 Hours</span>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              onClick={() => user ? setCurrentPage('registration') : setCurrentPage('auth')}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(0,240,255)",
                boxShadow: "0 0 15px rgb(0,240,255)"
              }}
              whileTap={{ scale: 0.95 }}
              className="button-glow px-8 py-4 bg-[#00f0ff] text-black font-orbitron font-black text-lg rounded-lg
              hover:bg-[#00d8e6] transition-all duration-300 tracking-wider relative overflow-hidden
              before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%]
              before:transition-transform before:duration-500"
            >
              REGISTER NOW
            </motion.button>

            <motion.button
              onClick={() => user ? setCurrentPage('problem-statements') : setCurrentPage('auth')}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(0,240,255)",
                boxShadow: "0 0 15px rgb(0,240,255)"
              }}
              whileTap={{ scale: 0.95 }}
              className="text-glow px-8 py-4 border-2 border-[#00f0ff] text-[#00f0ff] font-orbitron font-bold
              text-lg rounded-lg hover:bg-[#00f0ff]/10 transition-all duration-300 tracking-wider relative
              overflow-hidden before:absolute before:inset-0 before:bg-[#00f0ff]/10 before:translate-x-[-100%]
              hover:before:translate-x-[100%] before:transition-transform before:duration-500"
            >
              PROBLEM STATEMENTS
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#00f0ff] mb-6 neon-text">
                About Inferno Verse
              </h2>
              <p className="font-exo text-lg leading-relaxed mb-6 text-[#e6e6e6]">
                We're thrilled to announce Inferno Verse — our flagship 24-hour AI Hackathon happening
                end of September 2025 at LPU. This high-energy event will bring together 1,000+ brilliant
                innovators (and growing) from across the country to solve real-world challenges using
                Artificial Intelligence.
              </p>
              <p className="text-[#bfbfbf] text-lg leading-relaxed">
                Join us for an unforgettable journey of innovation, collaboration, and technological
                breakthrough. Whether you're a seasoned developer or just starting your tech journey,
                Inferno Verse offers the perfect platform to showcase your skills and learn from the best.
              </p>
            </div>

            <div className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8">
              <img
                src="/infernoedit.png"
                alt="Hackathon Event"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <NeonLine />

      {/* Hosted By Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* LPU Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8
              hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-shadow duration-300"
            >
              <img
                src="/lpuposter.png" // Make sure to add this image to your public folder
                alt="LPU Campus"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* LPU Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold text-[#00f0ff] mb-4 neon-text">HOSTED BY LPU</h2>
              <h3 className="text-2xl font-semibold text-white mb-6">Lovely Professional University</h3>
              <p className="font-exo text-lg leading-relaxed text-[#e6e6e6]">
                Lovely Professional University (LPU) stands as a beacon of modern education, blending
                innovation, ambition, and opportunity on its sprawling 600-acre campus in Punjab, India.
                A global melting pot of talent, LPU hosts students from across India and beyond 30
                countries, creating an ecosystem that thrives on diversity and creativity.
              </p>
              <p className="font-exo text-lg leading-relaxed text-[#e6e6e6] mt-4">
                Renowned for its advanced infrastructure, industry-aligned programs, and a stellar track
                record in placements, LPU is more than a university—it's a launchpad for trailblazers.
                From cutting-edge labs to a passion for problem-solving, LPU sets the stage for events
                like this hackathon, where tomorrow's innovators turn bold ideas into reality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <NeonLine />

      {/* Event Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#00f0ff] mb-4">EVENT HIGHLIGHTS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                }}
                className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-6 text-center transition-all duration-300"
              >
                <highlight.icon className="w-12 h-12 text-[#00f0ff] mx-auto mb-4 neon-text" />
                <h3 className="text-xl font-bold text-[#00f0ff] mb-3 neon-text">{highlight.title}</h3>
                <p className="font-exo text-[#e6e6e6]">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NeonLine />

      {/* Countdown Timer */}
      <section className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00f0ff]/5 blur-3xl opacity-30" />
        <div className="container mx-auto relative z-10">
          <CountdownTimer />
        </div>
      </section>

      <NeonLine />

      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#00f0ff] mb-4">OUR TEAM</h2>
            <h3 className="text-2xl font-semibold text-white mb-6">MEET THE TEAM</h3>
            <p className="font-exo text-lg mb-8 max-w-2xl mx-auto text-[#e6e6e6]">
              Get to know the passionate individuals behind Inferno Verse who make it all happen.
            </p>
            <motion.button
              onClick={() => setCurrentPage('team')}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(0,240,255)",
                boxShadow: "0 0 15px rgb(0,240,255)"
              }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-4 bg-[#00f0ff]/20 text-[#00f0ff] font-orbitron font-black
              text-lg rounded-lg border border-[#00f0ff] hover:bg-[#00f0ff]/30 transition-all duration-300"
            >
              VIEW TEAM
            </motion.button>
          </motion.div>
        </div>
      </section>

      <NeonLine />

      {/* Registration Status */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#00f0ff] mb-4 neon-text">REGISTRATION STATUS</h2>
            <div className="text-2xl font-orbitron font-bold text-green-400 mb-6 animate-pulse">
              EVENT OPEN
            </div>
            <motion.button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(0,240,255)",
                boxShadow: "0 0 15px rgb(0,240,255)"
              }}
              whileTap={{ scale: 0.95 }}
              className="neon-button px-8 py-4 bg-[#00f0ff] text-black font-orbitron font-black
              text-lg rounded-lg hover:bg-[#00d8e6] transition-all duration-300"
            >
              REGISTER HERE
            </motion.button>
          </motion.div>
        </div>
      </section>

      <NeonLine />

      {/* Sponsors */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#00f0ff] mb-8">OUR SPONSORS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[#00f0ff] mb-4">{sponsor.category}</h3>
                <div className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                  />
                  <div className="text-white font-semibold text-lg">{sponsor.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-8"
          >
            {/* <p className="font-exo text-lg text-[#e6e6e6]">
              🎁 <strong className="text-[#00f0ff]">Co-powered by GeeksforGeeks</strong> -
              Exciting goodies and certifications for winners and top 10 participants that will boost your CV!
            </p> */}
          </motion.div>
        </div>
      </section>

      <NeonLine />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#00f0ff] mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0d0d1a]/50 backdrop-blur-sm border border-[#00f0ff]/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-[#00f0ff] mb-3">{faq.question}</h3>
                <p className="font-exo leading-relaxed text-[#e6e6e6]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
