import { motion } from 'framer-motion';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900"
    >
      <div className="relative">
        {/* Glowing background effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"
          style={{ width: '300px', height: '300px' }}
        />

        {/* Main content container */}
        <div className="relative text-center z-10">
          {/* Cyberpunk text effect */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            {/* Split text animation */}
            {'INFERNO VERSE'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
                className="inline-block text-6xl font-bold text-cyan-400"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF',
                  filter: 'brightness(1.2)',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Hexagon loader */}
          <div className="relative w-24 h-24 mx-auto">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 0 20px #00FFFF',
                }}
              />
            ))}

            {/* Center pulse */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 m-auto w-4 h-4 bg-cyan-400 rounded-full"
              style={{
                boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF',
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-8 text-cyan-400 text-lg tracking-widest"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 10px #00FFFF',
            }}
          >
            INITIALIZING...
          </motion.p>
        </div>

        {/* Background grid effect */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
    </motion.div>
  );
};

export default Loader;
