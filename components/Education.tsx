import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      school: "Hilcoe School of Computer Science and Technology",
      degree: "Bachelor of Science, Software Engineering",
      date: "2020 – 2025",
      badges: [
        "System Design",
        "Data Structures",
        "Algorithms",
        "Software Architecture",
      ],
      description:
        "Studied software engineering principles, algorithms, data structures, database systems, software architecture, operating systems, and system design. Developed strong analytical, problem-solving, and software development skills through academic projects and practical implementations.",
    },
    {
      school: "Hayrenzi Special Secondary School",
      degree: "High School Diploma",
      date: "2011 E.C. – 2014 E.C.",
      badges: [],
      description: "",
    },
  ];

  const certificates = [
    {
      title: "INSA Cyber Talent Program",
      date: "August 2025 – October 2025",
      description:
        "Completed advanced training in software development, cybersecurity fundamentals, and technology-driven problem solving.",
    },
    {
      title: "Nexus Bootcamp – Data Structures & Algorithms",
      date: "June 2025 – September 2025",
      description:
        "Developed advanced problem-solving skills through intensive study of algorithms, complexity analysis, linked lists, stacks, queues, sorting algorithms, and two-pointer approaches.",
    },
    {
      title: "Nexus Bootcamp – Frontend Development",
      date: "September 2025 – October 2025",
      description:
        "Acquired practical experience with JavaScript, HTML, CSS, and modern frontend development workflows.",
    },
  ];

  return (
    <section id="education" className="py-16 max-w-4xl mx-auto w-full px-4 space-y-20">
      
      {/* --------------------------- */}
      {/* EDUCATION SECTION           */}
      {/* --------------------------- */}
      <div>
        <div className="mb-8 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Education
            </span>
          </div>
        </div>

        <div className="space-y-6 ml-3 md:ml-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-border/80 bg-card p-6 md:p-8 shadow-sm transition-colors duration-300 hover:border-primary/40"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                {edu.school}
              </h3>
              <h4 className="text-base font-medium text-primary mt-1.5">
                {edu.degree}
              </h4>
              <p className="text-sm font-medium text-foreground/50 mt-2 mb-4">
                {edu.date}
              </p>

              {edu.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-border/40 px-3.5 py-1 text-xs font-semibold text-foreground/70"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {edu.description && (
                <p className="text-base text-foreground/80 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------- */}
      {/* CERTIFICATES & AWARDS       */}
      {/* --------------------------- */}
      <div>
        <div className="mb-8 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Certificates & Awards
            </span>
          </div>
        </div>

        <div className="relative border-l border-border/80 ml-3 md:ml-4 space-y-10 pb-4">
          {certificates.map((cert, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Timeline marker */}
              <span className="absolute -left-[4px] top-2 h-2 w-2 rounded-full bg-border ring-4 ring-background transition-colors group-hover:bg-primary duration-300"></span>
              
              <div className="flex flex-col gap-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                  {cert.date}
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl mt-1">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}