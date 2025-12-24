
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
            Award Winning Digital Agency
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            WE BUILD <span className="gradient-text">BOLD</span> <br />
            DIGITAL PRODUCTS.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Royss is a specialized design and development studio focused on creating fast, accessible, and high-performance web applications for the next generation of startups.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={() => setPage('contact')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              Start a Project
            </button>
            <button 
                onClick={() => setPage('services')}
                className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Our Services
            </button>
          </div>
        </div>

        {/* Abstract floating elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-12">Trusted by global innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
            <i className="fab fa-apple text-4xl"></i>
            <i className="fab fa-google text-4xl"></i>
            <i className="fab fa-microsoft text-4xl"></i>
            <i className="fab fa-amazon text-4xl"></i>
            <i className="fab fa-stripe text-4xl"></i>
            <i className="fab fa-airbnb text-4xl"></i>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">SELECTED WORKS</h2>
              <p className="text-gray-400 text-lg">
                We believe in quality over quantity. Every project we take on is a partnership aimed at pushing the boundaries of what's possible on the web.
              </p>
            </div>
            <button className="group flex items-center gap-2 text-blue-500 font-bold hover:gap-4 transition-all">
              View All Projects <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 glass">
                <img 
                    src="https://picsum.photos/id/48/1200/800" 
                    alt="Project 1" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">NEO-BANK INTERFACE</h3>
              <p className="text-gray-400">UI/UX Design • Web App • Fintech</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 glass">
                <img 
                    src="https://picsum.photos/id/2/1200/800" 
                    alt="Project 2" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">ECO-LOGISTICS PORTAL</h3>
              <p className="text-gray-400">Fullstack Dev • Dashboard • Logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Royss Section */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="glass p-10 rounded-[40px] border-none">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <i className="fas fa-bolt"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Blazing Fast</h4>
              <p className="text-gray-400 leading-relaxed">
                We optimize every line of code to ensure your site loads instantly, helping with SEO and user retention.
              </p>
            </div>
            <div className="glass p-10 rounded-[40px] border-none translate-y-0 md:translate-y-12">
              <div className="w-16 h-16 bg-purple-600/20 text-purple-500 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Unique Identity</h4>
              <p className="text-gray-400 leading-relaxed">
                No templates. Every design is custom-built from the ground up to reflect your brand's unique story.
              </p>
            </div>
            <div className="glass p-10 rounded-[40px] border-none">
              <div className="w-16 h-16 bg-emerald-600/20 text-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <i className="fas fa-brain"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">AI Powered</h4>
              <p className="text-gray-400 leading-relaxed">
                We leverage generative AI to accelerate development and create intelligent features for your users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
