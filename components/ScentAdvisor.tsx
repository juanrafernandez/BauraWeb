import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';
import { getScentRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const ScentAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I am the Baura AI. Tell me how you want to feel, or a memory you cherish, and I will recommend a scent family for you." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getScentRecommendation(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-baura-sand text-baura-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    <Sparkles size={14} />
                    <span>Powered by Gemini AI</span>
                </div>
                <h2 className="text-4xl font-serif text-baura-dark">Ask the Perfumer AI</h2>
                <p className="mt-4 text-gray-600">
                    Not sure what you like? Describe a mood, a season, or a texture.
                </p>
            </div>

            <div className="bg-baura-sand/50 rounded-2xl shadow-xl overflow-hidden border border-baura-dark/5">
                {/* Chat Window */}
                <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-baura-dark text-white' : 'bg-baura-gold text-white'}`}>
                                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                                    msg.role === 'user' 
                                    ? 'bg-baura-dark text-white rounded-tr-none' 
                                    : 'bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                             <div className="flex gap-3 max-w-[80%]">
                                <div className="w-8 h-8 rounded-full bg-baura-gold text-white flex items-center justify-center">
                                    <Bot size={16} />
                                </div>
                                <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                </div>
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="e.g., 'I love the smell of rain on hot asphalt...'"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-baura-gold focus:border-baura-gold transition-all"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="bg-baura-dark text-white p-3 rounded-full hover:bg-baura-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ScentAdvisor;