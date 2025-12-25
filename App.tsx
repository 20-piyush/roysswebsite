
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Ensure scroll is at top when navigating
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'services': return <Services setPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/5 rounded-full blur-[180px]"></div>
      </div>
    </div>
  );
};

export default App;
