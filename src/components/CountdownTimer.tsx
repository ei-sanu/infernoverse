import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 11,
    minutes: 15,
    seconds: 54
  });

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

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-[#0d0d1a]/80 backdrop-blur-sm border border-[#00f0ff]/30 rounded-lg p-4 w-28
          flex items-center justify-center relative overflow-hidden group hover:border-[#00f0ff]/50
          transition-all duration-300">
          <span
            className="font-orbitron text-4xl font-bold text-[#00f0ff] relative z-10 tracking-wider"
            style={{ textShadow: '0 0 10px #00f0ff' }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>

        {/* Reflection effect */}
        <div className="h-1/2 w-full bg-gradient-to-b from-[#00f0ff]/10 to-transparent
          rounded-b-lg transform scale-y-[-1] mt-1 opacity-50"
        />
      </div>

      <span className="mt-2 font-orbitron text-sm uppercase tracking-widest text-[#00f0ff]/80">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center">
      <h2
        className="text-4xl font-orbitron font-bold text-[#00f0ff] mb-12 tracking-wider"
        style={{ textShadow: '0 0 30px #00f0ff' }}
      >
        HACKATHON STATUS
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <TimeUnit value={timeLeft.days} label="days" />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
