"use client";

import { useState, useEffect } from "react";
import { ArrowDownCircle, Folder } from "lucide-react";

// The 4 phrases rotating seamlessly (including AI-driven thinking and smart automation)
const PHRASES = [
  "Scalable Systems",
  "Smart Automation",
  "AI-Driven Logic",
  "Digital Solutions"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up the timer to change the phrase every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
    }, 2000); // 3000 milliseconds = .5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-16 text-center max-w-4xl mx-auto">
      
      {/* 1. Availability Status Badge */}
      <div className="mb-8 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        Available for new projects
      </div>

      {/* 2. Main Headline */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl leading-tight">
        Building Tomorrow's <br className="hidden sm:block" />
        
        {/* Rotating Text Container with fixed height to prevent layout shift */}
        <div className="h-[70px] sm:h-[90px] flex items-center justify-center">
          <span 
            key={PHRASES[currentIndex]}
            className="inline-block rounded-2xl bg-primary px-6 py-2 text-primary-foreground shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
          >
            {PHRASES[currentIndex]}
          </span>
        </div>
        
        Today
      </h1>

      {/* 3. Biography / Narrative */}
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-xl">
        I'm <strong className="font-semibold text-foreground">Fetehadin Negash</strong>, a full-stack Software Engineer who bridges the gap between structural design and digital innovation. Drawing on my background in civil engineering, I architect complex, scalable logic and bring it to life through robust, end-to-end software solutions. I specialize in transforming intricate technical challenges into elegant, high-performing digital experiences.
      </p>

      {/* 4. Custom Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
        
        {/* Primary View Work Button */}
        <a 
          href="#projects"
          className="inline-flex h-14 items-center justify-center rounded-full px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md gap-2 transition-transform hover:scale-105"
        >
          View My Work
          <ArrowDownCircle className="h-5 w-5" />
        </a>
        
        {/* Secondary Resume Button */}
        <a 
          href="https://drive.google.com/file/d/1x4ufUJwkGJvEVSNyZelK7bewLmZdskcr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center rounded-full px-8 border border-border bg-card hover:bg-card/80 shadow-sm gap-4 transition-transform hover:scale-105"
        >
          <Folder className="h-6 w-6 text-primary" fill="currentColor" />
          <div className="flex flex-col items-start text-left">
            <span className="font-semibold text-foreground leading-tight text-base">My Resumes</span>
            <span className="text-xs text-foreground/60 leading-tight">Click anywhere to open</span>
          </div>
        </a>
        
      </div>
    </section>
  );
}