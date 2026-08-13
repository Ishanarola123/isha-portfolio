'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AiChatWidget from '../components/AiChatWidget';
import portfolioData from '../data/portfolio.json';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = ['home', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAiChat = () => {
    setIsAiChatOpen(!isAiChatOpen);
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#090d16] font-sans selection:bg-blue-500 selection:text-white">
      <ParticleBackground />
      
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        onSectionClick={scrollToSection}
        onToggleAiChat={toggleAiChat}
      />
      
      <main>
        <Hero
          personalInfo={portfolioData.personalInfo}
          isLoaded={isLoaded}
        />
        
        <Skills
          skills={portfolioData.skills}
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => {
            if (selectedSkill === skill) {
              setSelectedSkill(null);
            } else {
              setSelectedSkill(skill);
              scrollToSection('projects');
            }
          }}
        />
        
        <Experience
          experience={portfolioData.experience}
          internships={portfolioData.internships}
        />
        
        <Projects
          projects={portfolioData.projects}
          selectedSkill={selectedSkill}
          onClearFilter={() => setSelectedSkill(null)}
        />
        
        <Education
          education={portfolioData.education}
        />
        
        <Certifications
          certifications={portfolioData.certifications}
        />
        
        <Contact
          personalInfo={portfolioData.personalInfo}
        />
      </main>
      
      <Footer />

      <AiChatWidget
        isOpen={isAiChatOpen}
        onToggle={toggleAiChat}
      />
    </div>
  );
}