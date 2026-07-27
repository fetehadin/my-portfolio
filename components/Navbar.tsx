"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  // This prevents the "hydration mismatch" error when loading the theme icon
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex w-[90%] max-w-4xl items-center justify-between rounded-full border border-border/40 bg-background/70 px-6 py-3.5 shadow-sm backdrop-blur-md transition-all">
      
      {/* Logo */}
      <a href="#" className="text-xl font-extrabold tracking-tight text-foreground">
        Fetehadin<span className="text-primary">.</span>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#blogs" className="hover:text-foreground transition-colors">Blogs</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground transition-all hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle theme"
      >
        {/* Only render the icons after the component has mounted on the client */}
        {mounted ? (
          theme === "dark" ? (
            <Moon className="h-[18px] w-[18px]" />
          ) : (
            <Sun className="h-[18px] w-[18px]" />
          )
        ) : (
          <div className="h-[18px] w-[18px]" /> // Empty placeholder to prevent layout shift
        )}
      </button>

    </nav>
  );
}