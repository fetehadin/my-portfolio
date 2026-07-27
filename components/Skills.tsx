export default function Skills() {
  // Row 1
  const row1 = [
    { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Django", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Go", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  ];

  // Row 2
  const row2 = [
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Bootstrap 5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  ];

  // Row 3
  const row3 = [
    { name: "Ubuntu", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "GitLab", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
    { name: "Vercel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto w-full px-4 overflow-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION HEADER (Exactly as requested from the image) */}
      {/* ---------------------------------------------------- */}
      <div className="mb-12 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-primary/40"></span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Technical Skills
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Tools & Technologies
        </h2>

        <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
          A curated set of technologies I use to build reliable, scalable, and modern digital products.
        </p>
      </div>
      {/* ---------------------------------------------------- */}

      {/* Marquee Wrapper with Edge Fade Gradient */}
      <div className="relative flex flex-col gap-6 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 pr-6">
            {[...row1, ...row1, ...row1, ...row1].map((tech, idx) => (
              <TechCard key={`r1-${idx}`} name={tech.name} iconUrl={tech.iconUrl} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-6 pr-6">
            {[...row2, ...row2, ...row2, ...row2].map((tech, idx) => (
              <TechCard key={`r2-${idx}`} name={tech.name} iconUrl={tech.iconUrl} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 pr-6">
            {[...row3, ...row3, ...row3, ...row3].map((tech, idx) => (
              <TechCard key={`r3-${idx}`} name={tech.name} iconUrl={tech.iconUrl} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// TechCard Sub-component (Centered, Spacious, Rounded)
function TechCard({ name, iconUrl }: { name: string; iconUrl: string }) {
  return (
    <div className="flex items-center justify-center gap-3.5 rounded-[2rem] border border-border/80 bg-card px-7 py-3.5 shadow-sm hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
      <img src={iconUrl} alt={`${name} icon`} className="h-7 w-7 object-contain" />
      <span className="text-[15px] font-bold text-foreground tracking-tight">{name}</span>
    </div>
  );
}