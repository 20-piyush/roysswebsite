
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 rounded-2xl flex items-center justify-between px-6 py-4">
      <div 
        className="text-2xl font-extrabold cursor-pointer flex items-center gap-2"
        onClick={() => setPage('home')}
      >
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">R</span>
        </div>
        <span className="tracking-tighter">ROYSS</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {(['home', 'services', 'contact'] as Page[]).map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`capitalize text-sm font-medium transition-colors hover:text-blue-500 ${
              currentPage === page ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button 
        onClick={() => setPage('contact')}
        className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all transform active:scale-95"
      >
        Get a Quote
      </button>
    </nav>
  );
};

export default Navbar;
