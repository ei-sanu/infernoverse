import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import AttendanceMark from './components/AttendanceMark';
import AttendanceWait from './components/AttendanceWait';
import Auth from './components/Auth';
import Contact from './components/Contact';
import DiscloseProblems from './components/DiscloseProblems';
import Event from './components/Event';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader';
import PrivacyPolicy from './components/PrivacyPolicy';
import ProblemStatements from './components/ProblemStatements';
import RefundPolicy from './components/RefundPolicy';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import TermsConditions from './components/TermsConditions';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    // Get initial page from URL path or default to home
    const path = window.location.pathname.substring(1) || 'home';
    return path;
  });
  const [showLoader, setShowLoader] = useState(true);
  const attendanceStarted = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update URL when page changes
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    window.history.pushState(null, '', path);
  }, [currentPage]);

  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePageChange = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', path);
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu when page changes
  };

  if (loading || showLoader) {
    return <Loader />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} user={user} />;
      case 'about':
        return <Home setCurrentPage={handlePageChange} user={user} />;
      case 'auth':
        return <Auth
          onBack={() => handlePageChange('home')}
          setCurrentPage={handlePageChange}
        />;
      case 'registration':
        return user ? (
          <Registration onBack={() => handlePageChange('home')} />
        ) : (
          <Auth onBack={() => handlePageChange('home')} />
        );
      case 'event':
        return <Event />;
      case 'problem-statements':
        const hackathonStarted = true;
        return hackathonStarted ? (
          <ProblemStatements onBack={() => handlePageChange('home')} />
        ) : (
          <DiscloseProblems onBack={() => handlePageChange('home')} />
        );
      case 'sponsors':
        return <Sponsors setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact setCurrentPage={handlePageChange} />;
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => handlePageChange('home')} />;
      case 'terms':
        return <TermsConditions onBack={() => handlePageChange('home')} />;
      case 'refund':
        return <RefundPolicy />;
      case 'attendance':
        const attendanceStarted = true;
        return attendanceStarted ? (
          <AttendanceMark onBack={() => handlePageChange('home')} />
        ) : (
          <AttendanceWait onBack={() => handlePageChange('home')} />
        );
      default:
        return <Home setCurrentPage={handlePageChange} user={user} />;
    }
  };

  const shouldShowHeaderFooter = !['auth', 'registration'].includes(currentPage);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <AnimatePresence mode="wait">
        {shouldShowHeaderFooter && (
          <Header
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}

        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {renderPage()}
        </motion.main>

        {shouldShowHeaderFooter && <Footer />}
      </AnimatePresence>
    </div>
  );
}

export default App;
