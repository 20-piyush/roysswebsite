
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-extrabold flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">R</span>
            </div>
            <span>ROYSS</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            Elevating digital experiences through cutting-edge design and world-class engineering. We build the future of the web.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('home')} className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Home</button></li>
            <li><button onClick={() => setPage('services')} className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Services</button></li>
            <li><button onClick={() => setPage('contact')} className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Work with us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>hello@royss.agency</li>
            <li>+1 (555) 000-1234</li>
            <li>123 Digital Ave, Tech City, CA 90210</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">© 2024 Royss Agency. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
