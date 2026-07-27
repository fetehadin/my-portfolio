import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "EduConnect Educational Platform",
      description:
        "A comprehensive, student-centered learning hub designed to empower students across Ethiopia. It features a scalable backend architecture, robust relational database modeling, and secure API integrations to create a vibrant community where users can learn, connect, and achieve.",
      image: "/educonnect.png", // Save image_c02199.png as educonnect.png in public folder
      stack: ["Python", "Django", "PostgreSQL", "Next.js", "TailwindCSS"],
      demoLink: "https://educonnect-frontend-opal.vercel.app",
    },
    {
      title: "Alif School Management System",
      description:
        "A multi-role digital portal empowering education and streamlining administrative workflows. Designed to inspire excellence, this platform features complex multi-user architectures, secure enrollment pipelines, and a robust backend to handle comprehensive school management operations.",
      image: "/alif.png", // Save 1.png as alif.png in public folder
      stack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
    },
    {
      title: "Jejan Digital Marketplace",
      description:
        "A powerful e-commerce engine connecting trusted suppliers with customers. Designed for business growth, the platform facilitates seamless supplier-customer connections, and secure transactions.",
      image: "/jejan.jpg", // Save 2.jpg as jejan.jpg in public folder
      stack: ["React", "Django REST Framework", "SQL", "Redux", "TailwindCSS"],
    },
  ];

  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto w-full px-4">
      
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Projects
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Some of my best projects and technical achievements.
            </p>
          </div>
          
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
            View All Projects <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Project Cards List */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="rounded-[2rem] border border-border/80 bg-card p-6 md:p-10 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            {/* Featured Tag */}
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Featured
            </h4>

            {/* Project Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-border bg-muted mb-10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Left Column: Title & Description */}
              <div className="md:col-span-2 flex flex-col items-start text-left">
                <h3 className="text-3xl font-bold text-foreground tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Right Column: Stack & Action */}
              <div className="md:col-span-1 flex flex-col items-start text-left">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3">
                  Stack
                </h5>
                
                <p className="text-[15px] font-medium text-foreground/80 leading-relaxed mb-8">
                  {project.stack.join(" · ")}
                </p>

                {/* Conditional Demo Button */}
                {/* Conditional Demo Button */}
                {project.demoLink && (
                <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm gap-2 transition-transform hover:scale-105 w-max mt-4"
                >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                </a>
                )}
              </div>
              
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}