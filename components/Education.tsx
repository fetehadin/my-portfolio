import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      school: "HiLCoE School of Computer Science and Technology",
      degree: "Bachelor of Science, Software Engineering",
      date: "2023 – Present",
      badges: [
        "System Design",
        "Data Structures",
        "Algorithms",
        "Software Architecture",
      ],
      description:
        "Pursuing a Bachelor's degree in Software Engineering with a focus on software architecture, system design, algorithms, databases, and full-stack application development. Applying theoretical concepts through hands-on projects to build scalable, maintainable, and user-centered software solutions.",
    },
    {
      school: "Addis Ababa University",
      degree: "Bachelor of Science, Civil & Environmental Engineering",
      date: "2021 – Present",
      badges: [
        "Structural Analysis",
        "Transportation",
        "Hydraulics",
        "Geotechnics",
      ],
      description:
        "Pursuing a Bachelor's degree in Civil & Environmental Engineering, developing expertise in structural engineering, transportation systems, geotechnical engineering, hydraulics, and sustainable infrastructure. Strengthened analytical thinking, engineering design, and quantitative problem-solving through rigorous coursework and practical projects.",
    },
    {
      school: "Hayrenzi Special Secondary School",
      degree: "High School Diploma",
      date: "2011 E.C. – 2014 E.C.",
      badges: [],
      description:
        "Graduated from one of Ethiopia's government boarding schools for high-achieving students, where a rigorous academic environment fostered discipline, leadership, independent learning, and a strong foundation in mathematics and science.",
    },
  ];

  const certificates = [
  {
    title: "ALX Backend Software Engineering",
    date: "August 2024 – January 2025",
    description:
      "Successfully completed ALX's intensive backend software engineering program, building production-ready applications and mastering industry-standard software engineering practices.",
  },
  {
    title: "ALX Career Essentials",
    date: "2024",
    description:
      "Completed career readiness training focused on professional communication, leadership, collaboration, networking, personal branding, and interview preparation.",
  },
  {
    title: "INSA Summer Tech Camp",
    date: "July 2025 – October 2025",
    description:
      "Completed the Information Network Security Administration (INSA) Summer Tech Camp, gaining hands-on experience in full-stack software development through an intensive industry-focused building challenge.",
  },
  {
    title: "Nexus Bootcamp – Data Structures & Algorithms",
    date: "June 2025 – September 2025",
    description:
      "Strengthened algorithmic thinking and problem-solving through intensive training in data structures, algorithms, complexity analysis, and coding interview patterns.",
  },
  {
    title: "Nexus Bootcamp – Frontend Development",
    date: "September 2025 – October 2025",
    description:
      "Built responsive web applications using modern frontend technologies while applying best practices for UI development and user experience.",
  },
  {
    title: "Udacity – Fundamentals of Programming",
    date: "January 2025",
    description:
      "Completed foundational training in programming concepts, problem-solving, and software development using Python and modern development practices.",
  },
  {
    title: "ALX Appreciation Letter",
    date: "2025",
    description:
      "Received an appreciation letter from ALX Africa in recognition of mentoring fellow learners and supporting frontend development activities within the community.",
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