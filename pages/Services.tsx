
import React from 'react';
import { Page } from '../types';

interface ServicesProps {
    setPage: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ setPage }) => {
  const servicesList = [
    {
      title: "UI/UX DESIGN",
      desc: "Creating intuitive, aesthetic, and functional interfaces that convert visitors into loyal customers.",
      icon: "fa-palette",
      tags: ["Figma", "Design Systems", "Prototyping"]
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "High-performance React and Next.js applications built with scalability and speed in mind.",
      icon: "fa-code",
      tags: ["React", "TypeScript", "Next.js", "Node"]
    },
    {
      title: "AI INTEGRATION",
      desc: "Infusing your products with LLMs and generative capabilities to automate and personalize experiences.",
      icon: "fa-microchip",
      tags: ["Gemini API", "Custom Agents", "NLP"]
    },
    {
      title: "MOBILE SOLUTIONS",
      desc: "Cross-platform mobile apps that provide a native feel and performance on both iOS and Android.",
      icon: "fa-mobile-screen",
      tags: ["React Native", "Expo", "Mobile UI"]
    },
    {
      title: "CLOUD & DEVOPS",
      desc: "Reliable infrastructure setup and continuous deployment pipelines to keep your app running 24/7.",
      icon: "fa-cloud",
      tags: ["AWS", "Vercel", "Docker", "CI/CD"]
    },
    {
      title: "BRAND STRATEGY",
      desc: "Helping startups define their voice, mission, and visual language in a crowded digital marketplace.",
      icon: "fa-chess-king",
      tags: ["Positioning", "Identity", "Launch Plan"]
    }
  ];

  return (
    <div className="pt-40 pb-32 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-10 max-w-4xl">
            SERVICES THAT <br />
            SCALE WITH <span className="gradient-text">YOU</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            From initial discovery to post-launch optimization, our comprehensive suite of services covers every stage of the digital product lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass p-10 rounded-[40px] hover:bg-blue-600/5 transition-all border-none hover:translate-y-[-8px] duration-300"
            >
              <div className="w-14 h-14 bg-white/5 group-hover:bg-blue-600/20 text-gray-400 group-hover:text-blue-500 rounded-2xl flex items-center justify-center text-xl mb-8 transition-colors">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">READY TO SHIP?</h2>
              <p className="text-white/80 text-lg max-w-xl">
                We're currently accepting new projects for Q3 2024. Let's discuss how we can bring your vision to life.
              </p>
            </div>
            <button 
                onClick={() => setPage('contact')}
                className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-2xl"
            >
              Contact Us Today
            </button>
          </div>
          {/* Abstract background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
