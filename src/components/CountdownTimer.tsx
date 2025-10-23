import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    // Set your target date here (Year, Month (0-12), Day, Hour, Minute, Second)
    const targetDate = new Date(2025, 10, 7, 0, 0, 0); // August 20, 2025, 10:00 AM
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // Return all zeros if we're past the target date
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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
