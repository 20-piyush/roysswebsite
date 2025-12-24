
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'services':
        return <Services setPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
      
      {/* Background decoration elements */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-purple-600/5 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;
