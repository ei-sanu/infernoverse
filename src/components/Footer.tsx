import { motion } from 'framer-motion';
import React from 'react';

interface FooterProps {
  setCurrentPage: (page: string) => void;  // Remove the '?' to make it required
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1 mb-8 md:mb-0">
            <motion.div
              className="text-2xl font-bold text-cyan-400 mb-4"
              style={{
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00FFFF',
              }}
            >
              INFERNO VERSE
            </motion.div>
            <p className="text-gray-300 mb-4">
              A premier 24-hour AI Hackathon bringing together 1,000+ brilliant innovators
              to solve real-world challenges using Artificial Intelligence.
            </p>
            <div className="text-cyan-400 mb-6">
              📅 September 20, 2025 | 📍 LPU, Punjab
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/company/infernoverse"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-[#00f0ff] transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-2xl" style={{ textShadow: '0 0 10px #00f0ff' }}></i>
              </motion.a>
              <motion.a
                href="https://instagram.com/infernoverse"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-[#00f0ff] transition-colors duration-300"
              >
                <i className="fab fa-instagram text-2xl" style={{ textShadow: '0 0 10px #00f0ff' }}></i>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-4">
            <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="/"
                className="block hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/event"
                className="block hover:text-cyan-400 transition-colors"
              >
                Event Details
              </a>
              <a
                href="/sponsors"
                className="block hover:text-cyan-400 transition-colors"
              >
                Sponsors
              </a>
              <a
                href="/contact"
                className="block hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-4">
            <h3 className="text-cyan-400 font-semibold mb-4">Legal</h3>
            <div className="space-y-3 text-gray-300">
              <a
                href="/terms"
                className="block w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="block w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/refund"
                className="block w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Refund Policy
              </a>
            </div>
          </div>

          {/* Contact Info - Update the links to be buttons if they should trigger page changes */}
          <div className="pt-4">
            <h3 className="text-cyan-400 font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:infernoofficial694@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  infernoofficial694@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a href="tel:+916287830296" className="hover:text-cyan-400 transition-colors">
                  +91 62878 30296
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a
                  href="https://www.somesh.social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  somesh.social
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-cyan-400/20 my-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="font-orbitron text-sm tracking-wider text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center transform hover:scale-105 transition-transform duration-300 font-extrabold" // Changed from font-bold to font-extrabold
              style={{
                textShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)',
                letterSpacing: '0.1em'
              }}
            >
              © 2025 INFERNO VERSE HACKATHON
            </span>
            <span className="text-cyan-400/50">|</span>
            <span
              className="inline-flex items-center transform hover:scale-105 transition-transform duration-300 font-extrabold" // Changed from font-bold to font-extrabold
              style={{
                textShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)',
                letterSpacing: '0.1em'
              }}
            >
              ORGANIZED BY INFERNO
            </span>
            <span className="text-cyan-400/50">|</span>
            <button
              onClick={() => setCurrentPage('terms')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
              style={{
                textShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)',
                letterSpacing: '0.1em'
              }}
            >
              ALL RIGHTS RESERVED
            </button>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
