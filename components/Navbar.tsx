
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        scrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto glass rounded-[24px] flex items-center justify-between transition-all duration-500 px-8 ${
        scrolled ? 'py-4 shadow-2xl bg-black/40' : 'py-6'
      }`}>
        <div 
          className="text-2xl font-black cursor-pointer flex items-center gap-3 group"
          onClick={() => setPage('home')}
        >
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white text-base">R</span>
          </div>
          <span className="tracking-tighter hidden sm:block">ROYSS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {(['home', 'services', 'contact'] as Page[]).map((page) => (
            <button
              key={page}
              onClick={() => setPage(page)}
              className={`capitalize text-[11px] font-black tracking-[0.2em] transition-all hover:text-white ${
                currentPage === page ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setPage('contact')}
          className="bg-white text-black px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
        >
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
