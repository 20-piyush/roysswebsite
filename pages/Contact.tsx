
import React, { useState } from 'react';
import { brainstormProject } from '../services/geminiService';
import { AIResponse } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleBrainstorm = async () => {
    if (!formData.message || formData.message.length < 20) {
      alert("Please provide a detailed description (at least 20 chars) for better AI strategy.");
      return;
    }
    setLoading(true);
    try {
      const result = await brainstormProject(formData.message);
      setAiResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column - Info */}
          <div className="lg:col-span-5 reveal">
            <h2 className="text-blue-500 text-xs font-bold uppercase tracking-[0.4em] mb-6">Contact</h2>
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              TELL US <br />
              YOUR <span className="text-gray-500 italic">IDEA.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-16 leading-relaxed">
              We're excited to learn about your vision. Our team typicaly responds within one business day.
            </p>

            <div className="space-y-12">
              <div className="group flex items-start gap-8">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500 transition-transform group-hover:scale-110">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-2">New Business</h4>
                  <p className="text-2xl font-bold tracking-tight">hello@royss.agency</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-8">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-500 transition-transform group-hover:scale-110">
                  <i className="fas fa-location-arrow"></i>
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-2">Global Studio</h4>
                  <p className="text-2xl font-bold tracking-tight">San Francisco / Remote</p>
                </div>
              </div>
            </div>

            {/* AI Callout */}
            <div className="mt-24 p-8 rounded-[32px] glass border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    AI Strategist v2.0
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  Stuck on the technical details? Use our Gemini-powered engine to brainstorm your project roadmap instantly.
                </p>
                <button 
                  onClick={handleBrainstorm}
                  disabled={loading}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all"
                >
                  {loading ? 'Consulting Intelligence...' : 'Generate Roadmap'} 
                  <i className="fas fa-arrow-right text-xs text-blue-500"></i>
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all"></div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 reveal stagger-2">
            <div className="relative">
              {showSuccess ? (
                <div className="glass p-16 rounded-[48px] border-white/5 text-center flex flex-col justify-center min-h-[600px] animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-10 shadow-2xl shadow-blue-500/40">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tighter">PROJECT RECEIVED</h3>
                  <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto">
                    Thanks for reaching out. We've added your project to our review queue.
                  </p>
                  <button onClick={() => setShowSuccess(false)} className="text-blue-500 font-bold hover:underline">Send another brief</button>
                </div>
              ) : (
                <div className="glass p-8 md:p-14 rounded-[48px] border-white/10">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative">
                        <input required type="text" placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors placeholder-transparent" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        <label className="absolute left-0 top-0 text-gray-500 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Full Name</label>
                      </div>
                      <div className="relative">
                        <input required type="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors placeholder-transparent" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        <label className="absolute left-0 top-0 text-gray-500 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Email Address</label>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <textarea required rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-colors resize-none placeholder-transparent" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                      <label className="absolute left-0 top-0 text-gray-500 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">Your Vision & Goals</label>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-white text-black py-6 rounded-2xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-[0.98] disabled:opacity-50 shadow-xl">
                      {loading ? 'SUBMITTING...' : 'SEND BRIEF'}
                    </button>
                  </form>
                </div>
              )}

              {/* AI Overlay Result Card */}
              {aiResult && (
                <div className="mt-12 glass p-10 rounded-[40px] border-blue-500/30 bg-blue-500/10 animate-in slide-in-from-top-10 duration-700">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-black tracking-tighter text-blue-400">STRATEGY DRAFT</h3>
                    <button onClick={() => setAiResult(null)} className="w-8 h-8 rounded-full hover:bg-white/10 transition-colors"><i className="fas fa-times"></i></button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">Core Tech</h5>
                      <div className="flex flex-wrap gap-2">
                        {aiResult.techStack.map((t, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">Milestones</h5>
                      <ul className="space-y-3">
                        {aiResult.features.map((f, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-blue-500"></span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">"{aiResult.summary}"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
