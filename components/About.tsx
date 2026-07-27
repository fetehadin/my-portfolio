import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Folder, Mail } from "lucide-react";

export default function About() {
  const stats = [
    { value: "2+", label: "YEARS OF CODING" },
    { value: "15+", label: "PROJECTS DELIVERED" },
    { value: "100+", label: "DSA PROBLEMS SOLVED" },
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
              src="/portfolio-image.jpg" 
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
          <p className="text-foreground/70 leading-relaxed text-base">
            A dedicated Software Engineering student with a background in Civil Engineering. I bring structured, multi-dimensional problem-solving into software development, focusing on crafting scalable backend systems and robust web applications.
          </p>

          <p className="text-foreground/70 leading-relaxed text-base">
            Currently specializing in full-stack architecture using <strong className="text-foreground font-semibold">Python, Django, PostgreSQL, and Next.js</strong>, while maintaining a strong focus on Data Structures, Algorithms, and clean code.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 py-6 border-border bg-card hover:bg-card/80 shadow-sm flex items-center gap-3"
            >
              <Folder className="h-5 w-5 text-primary" fill="currentColor" />
              <div className="flex flex-col items-start text-left">
                <span className="font-semibold text-foreground text-sm leading-none">Download CV</span>
                <span className="text-[10px] text-foreground/60 leading-tight">Click anywhere to open</span>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 py-6 border-border bg-card hover:bg-card/80 shadow-sm flex items-center gap-2 font-medium"
            >
              <Mail className="h-4 w-4 text-foreground/70" />
              Get in Touch
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