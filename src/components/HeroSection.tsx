import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-950 dark:via-purple-950/30 dark:to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Left Content - Takes 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl tracking-tight text-slate-900 dark:text-slate-100">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Shipra Singh</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
                CSE Student | Coding Enthusiast | Problem Solver
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl">
                Third-year CSE student at VJTI, GPA 9.37. I love transforming ideas into real projects, 
                exploring tech trends, and pushing the boundaries of software development. 
                Always ready for the next hackathon or coding challenge!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/S-Shipra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shipra-singh-b06074298/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
              <a 
                href="https://www.instagram.com/shipraaaa._?igsh=a3lhb2U2dXZhcXlu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
              <a 
                href="mailto:singh.shipra4005@gmail.com"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image - Takes 2 columns */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="intro_pic.jpg"
                alt="Professional portrait"
                className="relative rounded-2xl w-full max-w-sm shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8 text-slate-400" />
      </button>
    </section>
  );
}
