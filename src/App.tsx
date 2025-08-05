import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Auth from './components/Auth';
import Contact from './components/Contact';
import Event from './components/Event';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader';
import ProblemStatements from './components/ProblemStatements';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
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
        return <Auth onBack={() => handlePageChange('home')} />;
      case 'registration':
        return user ? (
          <Registration onBack={() => handlePageChange('home')} />
        ) : (
          <Auth onBack={() => handlePageChange('home')} />
        );
      case 'event':
        return <Event />;
      case 'problem-statements':
        return user ? (
          <ProblemStatements onBack={() => handlePageChange('home')} />
        ) : (
          <Auth onBack={() => handlePageChange('home')} />
        );
      case 'sponsors':
        return <Sponsors setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact setCurrentPage={handlePageChange} />;
      case 'team':
        return <Team />;
      default:
        return <Home setCurrentPage={handlePageChange} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <AnimatePresence mode="wait">
        {currentPage !== 'auth' && currentPage !== 'registration' && (
          <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        )}

        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>

        {currentPage !== 'auth' && currentPage !== 'registration' && <Footer />}
      </AnimatePresence>
    </div>
  );
}

export default App;
