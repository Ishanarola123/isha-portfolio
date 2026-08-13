'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

interface AiChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AiChatWidget: React.FC<AiChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am Isha's AI Assistant. How can I help you explore her skills, project experience, or connect with her?`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let reply = `Isha is a skilled Senior Consultant and Software Engineer specializing in ReactJS, NextJS, and project execution. Let me know if you would like details on her skills or projects!`;

      const normalizedText = text.toLowerCase();
      if (normalizedText.includes('skill') || normalizedText.includes('tech') || normalizedText.includes('expert')) {
        const topSkills = portfolioData.skills.frontend.slice(0, 5).join(', ');
        reply = `Isha's core frontend skills include ${topSkills}, and TypeScript. She also works with state management (${portfolioData.skills.stateManagement.join(', ')}), and backend integration (${portfolioData.skills.backendIntegration.slice(0, 3).join(', ')}).`;
      } else if (normalizedText.includes('project') || normalizedText.includes('work') || normalizedText.includes('esai') || normalizedText.includes('recouple')) {
        const projectTitles = portfolioData.projects.map((p) => p.title).join(', ');
        reply = `Isha has delivered multiple high-impact projects, including: ${projectTitles}. She focuses on clean architecture, performance optimization, and server-driven layouts.`;
      } else if (normalizedText.includes('contact') || normalizedText.includes('email') || normalizedText.includes('hire') || normalizedText.includes('linkedin')) {
        reply = `You can reach out to Isha directly via email at ${portfolioData.personalInfo.email} or connect with her on LinkedIn at ${portfolioData.personalInfo.linkedin}.`;
      } else if (normalizedText.includes('estimate') || normalizedText.includes('estimation') || normalizedText.includes('consult')) {
        reply = `As a Senior Consultant, Isha takes charge of project estimation, scoping, architectural design, client communication, and mentoring junior developers to ensure robust project delivery.`;
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const quickPrompts = [
    { label: '⚡ Main Skills', text: 'What are Isha\'s main skills?' },
    { label: '📊 Estimation & Consulting', text: 'What does she do as a Senior Consultant?' },
    { label: '📱 Highlight Projects', text: 'Tell me about some of her projects' },
    { label: '✉️ Contact Info', text: 'How can I contact Isha?' },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 text-white shadow-2xl flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all duration-300 group badge-glow"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] rounded-3xl glass-panel border border-blue-500/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Online
                </span>
              </div>
            </div>
            <button onClick={onToggle} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-950/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-800/80 border border-slate-700/80 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-2xl rounded-tl-none flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
            {quickPrompts.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.text)}
                className="text-[10px] font-medium px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 whitespace-nowrap transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about Isha..."
              className="flex-1 bg-slate-800 border border-slate-700/60 rounded-full px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiChatWidget;
