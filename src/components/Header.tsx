import { signOut } from 'firebase/auth';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, LogOut, Settings, User, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { auth } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu immediately when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowProfile(false);
  }, [currentPage]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    };

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Clock timer
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowProfile(false);
      setCurrentPage('home');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: 'HOME', key: 'home' },
    { name: 'EVENT', key: 'event' },
    { name: 'SPONSORS', key: 'sponsors' },
    { name: 'PROBLEM STATEMENTS', key: 'problem-statements', protected: true },
    { name: 'CONTACT', key: 'contact' },
    { name: 'TEAM', key: 'team' },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const handleNavigation = (item: { key: string; protected: boolean }) => {
    if (item.protected && !user) {
      setCurrentPage('auth');
    } else {
      setCurrentPage(item.key);
    }
    // Immediately close mobile menu
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-cyan-400/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-cyan-400 cursor-pointer"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 10px #00FFFF',
            }}
            onClick={() => setCurrentPage('home')}
            whileHover={{ scale: 1.05 }}
          >
            INFERNO VERSE
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium transition-colors ${currentPage === item.key
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Clock */}
            <div className="hidden md:flex items-center text-cyan-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              {formatTime(currentTime)}
            </div>

            {/* Profile/Auth */}
            <div className="relative" ref={profileRef}>
              {user ? (
                <div>
                  <motion.button
                    onClick={() => setShowProfile(!showProfile)}
                    className="flex items-center space-x-2 text-cyan-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border-2 border-cyan-400"
                      />
                    ) : (
                      <User className="w-8 h-8 p-1 border-2 border-cyan-400 rounded-full" />
                    )}
                  </motion.button>

                  {showProfile && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-80 bg-slate-800 border border-cyan-400/20 rounded-lg p-6 shadow-xl z-50"
                    >
                      <div className="text-cyan-400 font-medium text-lg mb-1">{user.displayName}</div>
                      <div className="text-gray-300 text-sm mb-4">{user.email}</div>

                      <div className="space-y-3">
                        <button
                          onClick={() => {
                            setCurrentPage('registration');
                            setShowProfile(false);
                          }}
                          className="w-full px-4 py-2.5 bg-cyan-400/20 text-cyan-400 rounded hover:bg-cyan-400/30 transition-colors font-medium"
                        >
                          Register Now
                        </button>

                        <div className="text-sm text-gray-400 text-center py-2">
                          By continuing, you agree to our{' '}
                          <button
                            onClick={() => {
                              setCurrentPage('terms');
                              setShowProfile(false);
                            }}
                            className="text-cyan-400 hover:underline"
                          >
                            Terms & Conditions
                          </button>
                          {' '}and{' '}
                          <button
                            onClick={() => {
                              setCurrentPage('privacy');
                              setShowProfile(false);
                            }}
                            className="text-cyan-400 hover:underline"
                          >
                            Privacy Policy
                          </button>
                        </div>

                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors font-medium"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={() => setCurrentPage('auth')}
                  className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign In
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div ref={mobileMenuRef} className="lg:hidden relative">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cyan-400 p-2 hover:bg-cyan-400/10 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Settings className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md
                             border border-cyan-400/20 rounded-lg shadow-xl z-50"
                  >
                    {navItems.map((item) => (
                      <motion.button
                        key={item.key}
                        onClick={() => handleNavigation(item)}
                        className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors
                          ${currentPage === item.key
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                          }`}
                        whileHover={{ x: 4 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
