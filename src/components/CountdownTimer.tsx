import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 11,
    minutes: 15,
    seconds: 54
  });

  // Use ref instead of state for previous values to avoid re-renders
  const prevValues = useRef({ ...timeLeft });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = {
          days: prev.days,
          hours: prev.hours,
          minutes: prev.minutes,
          seconds: prev.seconds - 1
        };

        if (newTime.seconds < 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;
        }
        if (newTime.minutes < 0) {
          newTime.minutes = 59;
          newTime.hours -= 1;
        }
        if (newTime.hours < 0) {
          newTime.hours = 23;
          newTime.days -= 1;
        }

        // Only update prevValues when the respective unit changes
        if (newTime.seconds === 59) prevValues.current.minutes = prev.minutes;
        if (newTime.minutes === 59) prevValues.current.hours = prev.hours;
        if (newTime.hours === 23) prevValues.current.days = prev.days;

        // Always update seconds in prevValues
        prevValues.current.seconds = prev.seconds;

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hasChanged = (unit: keyof typeof timeLeft) => {
    return timeLeft[unit] !== prevValues.current[unit];
  };

  const TimeUnit = ({ value, label, hasChanged }: {
    value: number;
    label: string;
    hasChanged: boolean;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <motion.div
          className="bg-[#0d0d1a]/80 backdrop-blur-sm border border-[#00f0ff]/30 rounded-lg p-4 w-28
          flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={`${label}-${value}`}
              initial={hasChanged ? { scale: 1.2, opacity: 0.5 } : false}
              animate={{
                scale: 1,
                opacity: 1,
                textShadow: hasChanged ? ['0 0 20px #00f0ff', '0 0 10px #00f0ff'] : '0 0 10px #00f0ff'
              }}
              transition={{
                duration: hasChanged ? 0.3 : 0,
                ease: "easeOut"
              }}
              className="font-orbitron text-4xl font-bold text-[#00f0ff] relative z-10 tracking-wider"
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Reflection effect */}
        <div className="h-1/2 w-full bg-gradient-to-b from-[#00f0ff]/10 to-transparent
        rounded-b-lg transform scale-y-[-1] mt-1 opacity-50" />
      </div>

      <span className="mt-2 font-orbitron text-sm uppercase tracking-widest text-[#00f0ff]/80">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-orbitron font-bold text-[#00f0ff] mb-12 tracking-wider"
        style={{ textShadow: '0 0 30px #00f0ff' }}
      >
        HACKATHON STATUS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        <TimeUnit
          value={timeLeft.days}
          label="days"
          hasChanged={hasChanged('days')}
        />
        <TimeUnit
          value={timeLeft.hours}
          label="hours"
          hasChanged={hasChanged('hours')}
        />
        <TimeUnit
          value={timeLeft.minutes}
          label="minutes"
          hasChanged={hasChanged('minutes')}
        />
        <TimeUnit
          value={timeLeft.seconds}
          label="seconds"
          hasChanged={hasChanged('seconds')}
        />
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
