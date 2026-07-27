import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main constrained content */}
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 max-w-7xl mx-auto w-full space-y-16 md:space-y-24 overflow-hidden">
        
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
      {/* Footer naturally spans 100% of the screen width */}
      <Contact />
    </div>
  );
}