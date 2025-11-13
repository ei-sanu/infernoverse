import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Star, Trophy, Users } from 'lucide-react';
import React from 'react';

const Event: React.FC = () => {
  const schedule = [
    { time: '05:00 PM (14 Nov, 2025)', activity: 'Registration & Check-in', description: 'Participants Check-In, Verifcation and seating arrangements.' },
    { time: '05:30 PM', activity: 'Opening Ceremony', description: 'Welcome speech by organizers and introduction of judges and guests.' },
    { time: '06:00 PM', activity: 'Round 1: Decrypt the code ', description: 'Pen & Paper mode challenge – logic & cryptographic problems' },
    { time: '08:00 PM', activity: 'Dinner Break', description: 'Participants escorted to hostels/food courts (1 hour 15 mins).' },
    { time: '09:30 PM', activity: 'Round 2: Control Panel Ceration', description: 'Teams develop a system based on the given problem statements' },
    { time: '12:30 AM (15 Nov, 2025)', activity: 'Midnight Process Checks', description: 'Evaluation and mentoring by technical experts & judges.' },
    { time: '03:00 AM', activity: 'Snacks Break', description: 'Light refreshments and mentor networking.' },
    { time: '06:30 AM', activity: 'Final Touches', description: 'Teams finalize their projects before evaluation.' },
    { time: '08:45 AM', activity: 'Breakfast Break ', description: 'End of Round 2 and preparation for evaluation.' },
    { time: '10:00 AM', activity: 'Evaluation Round 2', description: 'Judges review submissions and shortlist Top 8 teams.' },
    { time: '11:00 AM', activity: 'Online Gen AI ', description: 'Conducted by Mr. Deepak Chawla, Founder & CEO of HiDevs – Introduction to Generative AI & Future Opportunities.' },
    { time: '12:00 PM', activity: 'Result Declarations', description: 'Announcement of finalists moving to Round 3.' },
    { time: '12:30 PM', activity: 'Presentation and Viva', description: 'Top 8 teams present their projects to the panel.' },
    { time: '02:00 PM', activity: 'Judges’ Deliberation', description: 'Final scoring and result preparation.' },
    { time: '02:30 PM', activity: 'Felicitation Ceremony', description: 'Final scoring and result preparation.' },
    { time: '04:00 PM', activity: 'Photo Sessions and Ceremony', description: 'Group photo and mentor-mentee networking session.' },
  ];

  const prizes = [
    {
      position: '🥇 First Place',
      amount: 'Trophy + Premium Benefits',
      description: 'Trophy + Certificates from INFERNO Club and partners, GeeksforGeeks Goodies, Paid Internships (HiDevs, GeeksforGeeks, Sheriyan Coding School), ₹2000 LIVN Hampers per member, ₹4000 HiDevs Voucher, 3+ Certificates'
    },
    {
      position: '🥈 Second Place',
      amount: 'Trophy + Premium Benefits',
      description: 'Trophy + Certificates from INFERNO Club and partners, GeeksforGeeks Goodies, Paid Internships (HiDevs, GeeksforGeeks, Sheriyan Coding School), ₹2000 LIVN Hampers per member, ₹4000 HiDevs Voucher, 3+ Certificates'
    },
    {
      position: '🥉 Third Place',
      amount: 'Trophy + Premium Benefits',
      description: 'Trophy + Certificates from INFERNO Club and partners, GeeksforGeeks Goodies, Paid Internships (HiDevs, GeeksforGeeks, Sheriyan Coding School), ₹2000 LIVN Hampers per member, ₹4000 HiDevs Voucher, 3+ Certificates'
    }
  ];

  const additionalPrizes = [
    {
      position: '🎯 All Participants',
      amount: 'Benefits Package',
      description: '₹4000 HiDevs Voucher, 3+ Certificates (INFERNO Club, GeeksforGeeks, HiDevs), 10% LIVN Discount Coupon, E-Certificate of Participation'
    },
    {
      position: '🚀 Top 20 Teams',
      amount: 'Special Access',
      description: 'Exclusive access to the HiDevs Startup Fundraising Scheme to help kickstart your entrepreneurial journey'
    }
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
              <p className="text-gray-300">November 14-15, 2025</p>
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
              <p className="text-gray-300">500+ Innovators</p>
            </div>
          </div>
        </motion.div>

        {/* Schedule */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">PRIZES & REWARDS</h2>

          {/* Top 3 Winners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center h-full flex flex-col justify-between"
              >
                <div>
                  <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{prize.position}</h3>
                  <p className="text-xl font-bold text-white mb-3">{prize.amount}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{prize.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalPrizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center h-full flex flex-col justify-between"
              >
                <div>
                  <Star className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{prize.position}</h3>
                  <p className="text-xl font-bold text-white mb-3">{prize.amount}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{prize.description}</p>
                </div>
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
                <h3 className="text-xl font-semibold text-white mb-3">Essential Items</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>💻 Laptop with charger</li>
                  <li>🔌 Power strips & adapters</li>
                  <li>🖱️ Mouse & other peripherals</li>
                  <li>📱 Mobile phone</li>
                  <li>📝 Notebook & pen</li>
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
