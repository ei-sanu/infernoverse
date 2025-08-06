import { signOut } from 'firebase/auth';
import { motion } from 'framer-motion';
import { Clock, LogOut, Menu, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showProfile && !target.closest('.profile-dropdown')) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfile]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowProfile(false);
      setCurrentPage('home');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNavigation = (page: string, isProtected?: boolean) => {
    if (isProtected && !user) {
      setCurrentPage('auth');
    } else {
      setCurrentPage(page);
    }
    setMobileMenuOpen(false); // Ensure mobile menu closes
    setShowProfile(false); // Close profile dropdown
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
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.05 }}
          >
            INFERNO VERSE
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavigation(item.key, item.protected)}
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
            {/* Real-time clock */}
            <div className="hidden md:flex items-center text-cyan-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              {formatTime(currentTime)}
            </div>

            {/* Profile/Auth */}
            <div className="relative profile-dropdown">
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
                      className="absolute right-0 mt-2 w-64 bg-slate-800 border border-cyan-400/20 rounded-lg p-4 shadow-xl"
                    >
                      <div className="text-cyan-400 font-medium">{user.displayName}</div>
                      <div className="text-gray-300 text-sm">{user.email}</div>
                      <button
                        onClick={() => handleNavigation('registration')}
                        className="w-full mt-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded hover:bg-cyan-400/30 transition-colors"
                      >
                        Register Now
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="w-full mt-2 flex items-center justify-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={() => handleNavigation('auth')}
                  className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign In
                </motion.button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-cyan-400/20"
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key, item.protected)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${currentPage === item.key
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
