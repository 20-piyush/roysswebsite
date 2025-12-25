
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 hero-glow pointer-events-none"></div>
        
        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Available for New Projects
          </div>
          
          <h1 className="reveal stagger-1 text-7xl md:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.85] gradient-text">
            DIGITAL <br />
            EXCELLENCE.
          </h1>
          
          <p className="reveal stagger-2 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Royss is a premium design-led engineering studio. We partner with ambitious brands to create digital products that define categories.
          </p>
          
          <div className="reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
                onClick={() => setPage('contact')}
                className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/5"
            >
              Start Your Project
            </button>
            <button 
                onClick={() => setPage('services')}
                className="w-full sm:w-auto glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border-white/5"
            >
              Our Capabilities
            </button>
          </div>
        </div>

        {/* Ambient Decorative Elements */}
        <div className="absolute top-[20%] -left-[10%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Featured Works - Grid Layout */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">FEATURED <span className="text-gray-600">WORKS</span></h2>
            <p className="text-gray-400 font-medium max-w-sm">Crafting bespoke solutions with obsessive attention to detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { id: 48, title: 'FINANCE OS', tag: 'Web Application', color: 'blue' },
              { id: 22, title: 'LUXE RETAIL', tag: 'E-Commerce', color: 'indigo' }
            ].map((work, idx) => (
              <div key={idx} className="group cursor-pointer reveal" style={{ animationDelay: `${0.2 * idx}s` }}>
                <div className="relative aspect-[16/11] rounded-[32px] overflow-hidden mb-8 glass border-white/5">
                  <img 
                    src={`https://picsum.photos/id/${work.id}/1200/800`} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{work.title}</h3>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{work.tag}</p>
                  </div>
                  <div className="h-px flex-grow mx-8 bg-white/5 hidden lg:block"></div>
                  <span className="text-gray-600 font-mono text-sm">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Founded', val: '2018' },
            { label: 'Projects', val: '140+' },
            { label: 'Clients', val: '50+' },
            { label: 'Awards', val: '12' }
          ].map((stat, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
