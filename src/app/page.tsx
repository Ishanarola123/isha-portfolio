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
import portfolioDataJson from '../data/portfolio.json';
import {IPortfolioData } from "../types/portfolio"

const portfolioData = portfolioDataJson as IPortfolioData;


export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    const sections = ['home', 'about', 'experience', 'projects', 'education', 'certifications', 'contact'];
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        onSectionClick={scrollToSection}
      />
      
      <main>
        <Hero
          personalInfo={portfolioData.personalInfo}
          isLoaded={isLoaded}
        />
        
        <Skills
          skills={portfolioData.skills}
        />
        
        <Experience
          experience={portfolioData.experience}
        />
        
        <Projects
          projects={portfolioData.projects}
        />
        
        <Education
          education={portfolioData.education}
        />

        {portfolioData?.certifications?.length  && <Certifications
          certifications={portfolioData?.certifications}
        />}
        
        <Contact
          personalInfo={portfolioData.personalInfo}
        />
      </main>
      
      <Footer />
    </div>
  );
}