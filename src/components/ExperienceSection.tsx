import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function ExperienceSection() {
  const professionalExperience = [
  {
    title: "GENAI-Powered Data Analytics Simulation",
    company: "TATA (via Forage)",
    period: "2025",
    description: "Completed a hands-on job simulation focused on leveraging Generative AI tools for data analytics. Gained practical experience in analyzing datasets, generating insights, and presenting findings using AI-powered tools.",
    achievements: [
      "Simulated real-world data analytics workflows using GENAI tools",
      "Developed actionable insights from complex datasets",
      "Enhanced understanding of AI-driven analytics in business contexts"
    ]
  }
];


  const education = [
    {
      degree: "Bachelor of Technology in Copmuter Engineering",
      institution: "Veermata Jijabai Technological University",
      period: "2023-2027",
      details: "Specialized in Computer Engineering with focus on Software Development and System Design. GPA: 9.37/10",
      highlights: [
  "Completed project on Machine Learning-based AI Powered Financial Summarizer",
  "Secured top 10% rank in department for all semesters",
  "Organized technical workshops and coding competitions"
]
    },
    {
  degree: "Primary and Secondary Education",
  institution: "Lokhandwala Foundation School",
  period: "2011 - 2021",
  details: "Completed schooling with Science stream in Higher Secondary. Achieved distinction in academics.",
  highlights: [
    "Secured top grades in Science and Mathematics",
    "Participated in inter-school coding and robotics events",
    "Served as Prefect in senior year"
  ]
}

  ];

  const certifications = [
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google Cloud Skills Boost",
    year: "Feb 2025",
    credentialId: "0HIZTF1USEJS",
    description: "Introduced to GCP services including virtual machines, containers, networking, and storage with hands-on experience."
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    year: "Dec 2024",
    credentialId: "OC92BW3OG3QC",
    description: "Applied data preprocessing, visualization, and statistical analysis techniques using Pandas, Matplotlib, and Seaborn."
  },
  {
    name: "Introduction to Neural Networks and PyTorch",
    issuer: "IBM",
    year: "Dec 2024",
    credentialId: "1SKY6942NT7L",
    description: "Developed foundational understanding of neural networks and deep learning concepts."
  },
  {
    name: "LeetCode 100 Days Coding Challenge",
    issuer: "LeetCode",
    year: "Aug 2024",
    credentialId: "5297630",
    description: "Completed daily DSA problems consistently for 100 days."
  }
];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-blue-50/30 dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-100">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of my professional journey, academic background, and certifications
          </p>
        </div>

        <Tabs defaultValue="professional" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="professional">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications">
              <Award className="w-4 h-4 mr-2" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professional" className="space-y-6">
            {professionalExperience.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-slate-900 dark:text-slate-100">{exp.title}</h3>
                    <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                    <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{edu.institution}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.details}</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500">Highlights:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-slate-900 dark:text-slate-100 mb-2">{cert.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                      <span className="text-xs text-slate-500">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
