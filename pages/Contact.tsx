
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
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleBrainstorm = async () => {
    if (!formData.message || formData.message.length < 10) {
      alert("Please provide a more detailed project description first!");
      return;
    }
    setLoading(true);
    try {
      const result = await brainstormProject(formData.message);
      setAiResult(result);
    } catch (err) {
      console.error(err);
      alert("Failed to get AI suggestions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-32 px-4 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Work with us</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-10">
              LET'S START <br />
              SOMETHING <span className="gradient-text">BIG</span>.
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Whether you have a fully-fledged RFP or just a rough idea scribbled on a napkin, we want to hear from you.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Email us</p>
                  <p className="text-xl font-bold">hello@royss.agency</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Office</p>
                  <p className="text-xl font-bold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 rounded-3xl glass border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  <i className="fas fa-robot"></i>
                </div>
                <h4 className="font-bold text-blue-400">Royss AI Strategist</h4>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Fill out the message box and click "Get AI Brainstorm" to get instant tech suggestions and feature ideas for your project.
              </p>
              <button 
                onClick={handleBrainstorm}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-50"
              >
                {loading ? 'Thinking...' : 'Get AI Brainstorm'}
              </button>
            </div>
          </div>

          <div className="relative">
            {showSuccess ? (
              <div className="glass p-12 rounded-[40px] border-none text-center h-full flex flex-col justify-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-3xl font-black mb-4">MESSAGE RECEIVED!</h3>
                <p className="text-gray-400 mb-8">
                  One of our strategists will review your project and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[40px] border-none">
                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">Project Details</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}

            {/* AI Results Overlay */}
            {aiResult && (
              <div className="mt-8 glass p-8 rounded-[40px] border-blue-500/30 bg-blue-500/10 animate-in slide-in-from-top-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-blue-400 uppercase tracking-tight">AI Strategy Recommendations</h3>
                    <button onClick={() => setAiResult(null)} className="text-gray-500 hover:text-white"><i className="fas fa-times"></i></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {aiResult.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Key Features</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      {aiResult.features.map(f => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-sm text-gray-300 italic leading-relaxed">"{aiResult.summary}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
