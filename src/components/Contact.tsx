'use client';

import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import toast from "react-hot-toast";
import { PersonalInfo } from "../types";

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-purple-400 uppercase mb-3">
            <Mail className="w-4 h-4" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project idea, consulting opportunity, or technical collaboration? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Direct Cards */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Email Direct</span>
                <h4 className="text-sm sm:text-base font-bold text-white">{personalInfo.email}</h4>
              </div>
            </a>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-purple-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Location</span>
                <h4 className="text-sm sm:text-base font-bold text-white">Surat, Gujarat, India (Open to Remote)</h4>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:scale-110 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl relative">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry / Consultation Opportunity"
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project or requirement..."
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-0 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
