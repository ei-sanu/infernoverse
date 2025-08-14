import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Star } from 'lucide-react';

const Event: React.FC = () => {
  const schedule = [
    { time: '09:00 AM', activity: 'Registration & Check-in', description: 'Participant registration and welcome kit distribution' },
    { time: '10:00 AM', activity: 'Opening Ceremony', description: 'Welcome address and event guidelines' },
    { time: '11:00 AM', activity: 'Problem Statement Release', description: 'Detailed problem statements shared with teams' },
    { time: '12:00 PM', activity: 'Hacking Begins!', description: '24-hour coding marathon starts' },
    { time: '02:00 PM', activity: 'Lunch Break', description: 'Networking lunch for all participants' },
    { time: '06:00 PM', activity: 'Mentor Sessions', description: 'One-on-one guidance from industry experts' },
    { time: '08:00 PM', activity: 'Dinner & Networking', description: 'Evening meal and team interactions' },
    { time: '12:00 AM', activity: 'Midnight Snacks', description: 'Late night fuel for coding warriors' },
    { time: '06:00 AM', activity: 'Breakfast', description: 'Morning refreshments' },
    { time: '11:00 AM', activity: 'Final Submissions', description: 'Last chance for project submissions' },
    { time: '12:00 PM', activity: 'Presentations Begin', description: 'Teams present their solutions' },
    { time: '04:00 PM', activity: 'Judging & Awards', description: 'Final evaluation and prize distribution' },
    { time: '05:00 PM', activity: 'Closing Ceremony', description: 'Event wrap-up and networking' },
  ];

  const prizes = [
    { position: '1st Place', amount: '₹1,00,000', description: 'Winner takes all + internship opportunities' },
    { position: '2nd Place', amount: '₹75,000', description: 'Runner-up prize + mentorship program' },
    { position: '3rd Place', amount: '₹50,000', description: 'Third place prize + GeeksforGeeks goodies' },
    { position: 'Top 10', amount: 'Certificates', description: 'GeeksforGeeks certification + swag kit' },
  ];

  const rules = [
    'Teams must consist of 1 - 4 members',
    'All projects must be started from scratch during the event',
    'Use of external libraries and APIs is allowed',
    'Projects must address at least one of the given problem statements',
    'Final submission must include source code, documentation, and demo video',
    'Judging will be based on innovation, technical complexity, and presentation',
    'All team members must be present during final presentations',
    'Decisions of the judging panel will be final',
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
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">EVENT DETAILS</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Inferno Verse 2025 - the ultimate AI hackathon experience
          </p>
        </motion.div>

        {/* Event Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Event Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Date</h3>
              <p className="text-gray-300">September 20, 2025</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-300">24 Hours Non-stop</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Venue</h3>
              <p className="text-gray-300">LPU Campus, Punjab</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Participants</h3>
              <p className="text-gray-300">1000+ Innovators</p>
            </div>
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Event Schedule</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center p-4 bg-slate-700/30 rounded-lg border border-cyan-400/10"
                >
                  <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0">
                    <span className="text-cyan-400 font-bold text-lg">{item.time}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.activity}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Prizes & Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center"
              >
                <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{prize.position}</h3>
                <p className="text-2xl font-bold text-white mb-3">{prize.amount}</p>
                <p className="text-gray-300 text-sm">{prize.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rules & Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Rules & Guidelines</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Star className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{rule}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What to Bring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">What to Bring</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Essential Tech</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>💻 Laptop with charger</li>
                  <li>🔌 Power strips & adapters</li>
                  <li>🖱️ Mouse & other peripherals</li>
                  <li>📱 Mobile phone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Personal Items</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>🆔 Valid ID card</li>
                  <li>🧴 Personal hygiene items</li>
                  <li>👕 Comfortable clothes</li>
                  <li>🧥 Light jacket/hoodie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Optional</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>🎧 Headphones</li>
                  <li>☕ Energy drinks/snacks</li>
                  <li>📝 Notebook & pen</li>
                  {/* <li>🛌 Sleeping bag/pillow</li> */}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Event;
