import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-950 dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-white mb-4">Shipra Singh</h3>
            <p className="text-slate-400 mb-4">
              CSE Student at VJTI Mumbai. Coding enthusiast and problem solver 
              passionate about transforming ideas into real projects.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/S-Shipra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shipra-singh-b06074298/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/shipraaaa._?igsh=a3lhb2U2dXZhcXlu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:singh.shipra4005@gmail.com"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Mumbai, Maharashtra, India</li>
              <li>
                <a 
                  href="mailto:singh.shipra4005@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  singh.shipra4005@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919937277003"
                  className="hover:text-purple-400 transition-colors"
                >
                  +91 99372 77003
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shipra Singh
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
