import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Financial Summarizer(BART+RAG NLP)",
      description:"An intelligent NLP-powered web app that analyzes long financial reports to generate AI-driven summaries and extract key financial metrics. Built using LangChain, Hugging Face (BART), and ChromaDB for contextual retrieval, with interactive data visualization via Streamlit and Matplotlib.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1080&q=80",
      tags: ["Python", "LangChain", "Hugging Face (BART)", "ChromaDB", "Streamlit", "OpenAI API", "NumPy", "Pandas", "Matplotlib", "NLP", "RAG"],
      liveUrl: "https://www.pdfgpt.io/blog/ai-financial-report-summarizer-tool",
      githubUrl: "https://github.com/S-Shipra/AI-Powered-Financial-Summarizer",
      featured: true
    },
    {
  title: "Meal Match – AI-Powered Recipe Recommendation App",
  description: "An intelligent recipe recommendation system that suggests top-5 meals based on user-input ingredients using KNN and TF-IDF models. Includes features like real-time meal scheduling, custom recipe creation, and starred recipes — built as part of a Flutter-Firebase mobile app collaboration.",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1080&q=80",
  tags: ["Python", "Machine Learning", "KNN", "TF-IDF", "Firebase", "Flutter"],
  liveUrl: "https://drive.google.com/file/d/1174WFwKib_53Vzlf92rBVuSC1e9_LrAe/view?usp=sharing",
  liveLabel: "Demo Coming Soon 🚧",
  githubUrl: "https://github.com/dikshat25/THE-HEIRS-INHERITANCE",
  featured: true
},
    {
  title: "The Daily Pulse – Voice-Enabled News Reader Website",
  description: "A real-time voice-assisted news platform that fetches top stories from The Guardian API, supports keyword-based search, and provides category-wise filtering. Integrated with an offline TTS engine (pyttsx3) to deliver seamless voice narration of news articles via Flask backend.",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1080&q=80",
  tags: ["Python", "Flask", "pyttsx3", "News API", "TTS", "Backend"],
  liveUrl: "https://drive.google.com/file/d/1MlYo5YqT42pgDTM2zaKu6KQRswRLY5wA/view?usp=sharing",
  liveLabel: "Demo Coming Soon 🚧",
  githubUrl: "https://github.com/S-Shipra/News-App",
  featured: true
},
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:bg-gradient-to-b dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            UX design, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-shadow border-slate-200 dark:border-slate-800 group"
            >
              <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600">
                    Featured
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
