import { Send } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="w-full bg-[#F2EFE9] dark:bg-[#161211] py-12 px-6 md:px-12 border-t border-border/40">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Top Grid: Connect text and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 mb-24 items-start">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-start text-left min-w-0">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Let's Connect
            </h5>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Ready to bring your <br className="hidden sm:block" />
              next <span className="font-serif italic text-primary">vision</span> to life?
            </h2>
            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a specific project or just want to chat, feel free to reach out.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col items-start md:items-end justify-center gap-10 text-left md:text-right min-w-0 w-full pt-2">
            
            <div className="flex flex-col items-start md:items-between w-full">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-2">
                Email
              </h5>
              <a 
                href="mailto:fetehadinnegash@gmail.com" 
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all"
              >
                fetehadinnegash@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-start md:items-between w-full">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-2">
                Phone
              </h5>
              <a 
                href="tel:+251986955964" 
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                +251 986 955 964
              </a>
            </div>

          </div>
        </div>

        {/* Subtle Divider Line */}
        <div className="w-full h-[1px] bg-border/80 mb-12"></div>

        {/* Footer Top: Logo and Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Logo */}
          <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
            Fetehadin<span className="text-primary">.</span>
          </h3>

          {/* Social Icons matching the exact colored circle style */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <SocialLink href="https://github.com/fetehadin" icon={<GithubIcon />} />
            <SocialLink href="https://www.linkedin.com/in/fetehadin/" icon={<LinkedinIcon />} />
            <SocialLink href="https://t.me/Fete64" icon={<TelegramIcon />} />
            <SocialLink href="mailto:fetehadinnegash@gmail.com" icon={<Send className="h-5 w-5" />} />
          </div>
        </div>

        {/* Footer Bottom: Links and Copyright */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/50">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
          <p className="text-center w-full">© 2026 FETEHADIN NEGASH — CRAFTED WITH PASSION</p>
        </div>

      </div>
    </footer>
  );
}

// Sub-component for the circular social buttons
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition-all duration-300 hover:bg-primary hover:scale-110 shadow-sm"
    >
      {icon}
    </a>
  );
}

// Custom SVGs for brand icons
function GithubIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[22px] w-[22px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Telegram"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm5.55 8.531-1.97 9.294c-.148.658-.533.82-1.08.51l-2.986-2.203-1.44 1.387c-.159.159-.293.293-.6.293l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.12l-6.872 4.326-2.96-.924c-.64-.203-.654-.64.135-.947l11.57-4.46c.538-.196 1.006.128.803.92z" />
    </svg>
  );
}