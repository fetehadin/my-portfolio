import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Ethiopian Artificial Intelligence Institute",
      role: "Data Encoder",
      date: "August 2025 – December 2025",
      location: "Addis Ababa, Ethiopia",
      type: "On-site · Full-time",
      description:
        "Participated in a national AI project, where meticulous attention to detail and rigorous data validation were essential to building reliable datasets for machine learning models.",
      skills: ["Data Quality", "Machine Learning", "Artificial Intelligence", "Analytical Thinking"],
    },
    {
      company: "INSA | Information Network Security Administration",
      role: "Team Lead & Full-Stack Developer",
      date: "July 2025 – October 2025",
      location: "Addis Ababa, Ethiopia",
      type: "On-site · Summer Tech Camp",
      description:
        "Led a multidisciplinary team during the 4-month INSA Summer Tech Camp building challenge to develop EduConnect, a full-stack educational platform. Designed the backend architecture while collaborating on frontend development to deliver a scalable solution.",
      skills: [
        "Python",
        "Django",
        "JavaScript",
        "PostgreSQL",
        "REST APIs",
        "Team Leadership"
      ],
    },
    {
      company: "ALX Africa",
      role: "Backend Developer Trainee",
      date: "August 2024 – January 2025",
      location: "Remote",
      type: "Remote · Intensive Program",
      description:
        "Completed ALX's intensive, project-based backend engineering program, gaining hands-on experience building production-ready applications while solving real-world software engineering challenges. Collaborated with peers, received mentorship from experienced engineers, and strengthened technical, problem-solving, and professional skills in an industry-focused environment.",
      skills: [
        "Python",
        "Django",
        "Node.js",
        "Express.js",
        "REST APIs",
        "SQL",
        "MongoDB",
        "Git"
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 max-w-4xl mx-auto w-full px-4">
      
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-4">
          <Briefcase className="h-5 w-5 text-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Experience
          </span>
        </div>

        <div className="flex w-full items-end justify-between">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              A timeline of my professional growth and key achievements across programs and roles.
            </p>
          </div>
          
          {/* Optional: View All link mimicking the screenshot */}
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            View All Experience <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-primary/20 ml-3 md:ml-4 space-y-12 pb-8">
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-150 duration-300"></span>

            {/* Experience Card */}
            <div className="rounded-[2rem] border border-border/80 bg-card p-6 md:p-8 shadow-sm hover:border-primary/40 transition-colors duration-300">
              
              {/* Header: Company & Role */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-medium text-primary mt-1">
                  {exp.role}
                </h4>
              </div>

              {/* Meta Data: Date, Location, Type */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/60 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {exp.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs tracking-wide">
                  {exp.type}
                </div>
              </div>

              {/* Narrative Description */}
              <p className="text-base text-foreground/80 leading-relaxed mb-8">
                {exp.description}
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-border/50 px-4 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:bg-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}