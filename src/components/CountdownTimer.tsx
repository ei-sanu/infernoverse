import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventCompleted, setIsEventCompleted] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-09-20T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsEventCompleted(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEventCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Event Concluded</h2>
        <p className="text-gray-300 text-lg mb-2">
          Inferno Verse 2025 has successfully concluded!
        </p>
        <p className="text-gray-400">
          Thank you to all participants, mentors, and sponsors for making this event a great success.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold text-cyan-400 text-center mb-6">
        HACKATHON STATUS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-400">{value}</div>
              <div className="text-gray-300 text-sm uppercase">{unit}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;