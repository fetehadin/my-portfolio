import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Folder, Mail } from "lucide-react";

export default function About() {
  const stats = [
    { value: "3+", label: "YEARS OF CODING" },
    { value: "10+", label: "PROJECTS DELIVERED" },
    { value: "5+", label: "INTERNSHIPS & PROGRAMS" },
    { value: "∞", label: "LINES OF CODE WRITTEN" },
  ];

  return (
    <section id="about" className="py-16 max-w-5xl mx-auto w-full px-4">
      {/* Top Layout: Profile Image + Bio */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        
        {/* Left: Rounded Image Card */}
        <div className="relative flex-shrink-0">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-3xl bg-card border border-border shadow-sm">
            <Image
              src="/fetehadin-image.jpg" 
              alt="Fetehadin Negash"
              fill
              className="object-cover"
            />
            {/* Small circular accent badge at bottom right */}
            <div className="absolute bottom-4 right-4 h-7 w-7 rounded-full bg-background border border-border flex items-center justify-center shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Right: Narrative Content */}
        <div className="flex flex-col items-start text-left gap-4">
          
          {/* Pill Badge */}
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            About Me
          </span>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The Journey from <span className="font-serif italic text-primary">Logic</span> to Impact
          </h2>

          {/* Narrative Paragraphs */}
          <p className="text-foreground/70 leading-relaxed text-base mb-4">
            Transitioning from civil engineering to software development gave me a unique blueprint for building software: I treat code the same way I treat physical infrastructure, designing for structural integrity, load management, and long-term scalability. 
          </p>
          <p className="text-foreground/70 leading-relaxed text-base">
            Today, I focus on transforming complex challenges into efficient backend logic, smart automation, and high-performing digital solutions that drive real-world impact.
          </p>

          

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1x4ufUJwkGJvEVSNyZelK7bewLmZdskcr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 border border-border bg-card hover:bg-card/80 shadow-sm gap-4 transition-transform hover:scale-105"
            >
              <Folder className="h-6 w-6 text-primary" fill="currentColor" />
              <div className="flex flex-col items-start text-left">
                <span className="font-semibold text-foreground leading-tight text-base">Download cv</span>
                <span className="text-xs text-foreground/60 leading-tight">Click anywhere to open</span>
              </div>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 py-6 border-border bg-card hover:bg-card/80 shadow-sm flex items-center gap-2 font-medium"
            >
              <Mail className="h-4 w-4 text-foreground/70" />
              <a href="#contact" className="hover:text-foreground transition-colors">Get in Touch</a>
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Grid: Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-border bg-card/60 divide-x divide-y md:divide-y-0 divide-border overflow-hidden shadow-sm">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {stat.value}
            </span>
            <span className="mt-2 text-[11px] font-semibold tracking-wider text-foreground/60 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}