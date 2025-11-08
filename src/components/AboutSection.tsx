import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Code, Star, Heart, Brain, Zap } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "VJTI, 3rd Year CSE",
      details: [
        "School: Lokhandwala Foundation School (2011-2021)",
        "Junior College: Prakash College of Arts and Science (2021-2023)",
        "Undergraduate: VJTI (2023-current), 3rd Year CSE"
      ]
    },
    {
      icon: Star,
      label: "Academic Achievements",
      value: "",
      details: [
        "10th Board: 98.3%",
        "12th Board: 90.3%",
        "CET Percentile: 99.91%"
      ]
    },
    {
      icon: Award,
      label: "Certifications",
      value: "5 Professional",
      details: [
        "Troubleshooting and Debugging Techniques",
        "Google Cloud Fundamentals: Core Infrastructure",
        "Exploratory Data Analysis for Machine Learning",
        "Introduction to Neural Networks and PyTorch",
        "LeetCode 100 Days Coding Challenge"
      ]
    },
    {
      icon: Code,
      label: "Projects",
      value: "3 Completed",
      details: [
        "AI Powered Financial Summarizer",
        "Meal-Match - AI Powered Recipe Generation App",
        "DailyPulse - Voice Enabled News Website Reader"
      ]
    }
  ];

  const skills = [
    { name: "C", category: "Programming" },
    { name: "C++", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Artificial Intelligence", category: "AI/ML" },
  ];

  const interests = [
    { icon: Code, name: "Competitive Programming", color: "from-purple-500 to-pink-500" },
    { icon: Zap, name: "Hackathons", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, name: "Badminton", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* About Me */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I’m a third-year Computer Science Engineering student at VJTI with a deep passion for coding and AI. I love building innovative projects that solve real-world problems, participating in hackathons, and exploring new technologies. Constantly learning and challenging myself, I aim to create impactful software solutions.
          </p>
        </div>

        {/* Stats / Boxes: Education, Achievements, Certifications, Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:scale-105 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-4">
                <stat.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">{stat.label}</p>
              {stat.value && <p className="text-lg text-slate-900 dark:text-slate-100 mb-2">{stat.value}</p>}
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                {stat.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          {/* Technical Skills */}
<Card className="p-8 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
  <div className="flex items-center gap-3 mb-6">
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
      <Code className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl text-slate-900 dark:text-slate-100">Technical Skills</h3>
  </div>

  <div className="space-y-4">
    {/* Programming Languages */}
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">Programming Languages</p>
      <div className="flex flex-wrap gap-2">
        {skills.filter(s => s.category === "Programming").map((skill, index) => (
          <Badge
            key={index}
            className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 px-4 py-2"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>

    {/* AI & Machine Learning Skills */}
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">AI / ML & Libraries</p>
      <div className="flex flex-wrap gap-2">
        {[
          "Machine Learning",
          "Artificial Intelligence",
          "NumPy",
          "Pandas",
          "Scikit-learn",
          "PyTorch",
          "TensorFlow"
        ].map((lib, index) => (
          <Badge
            key={index}
            className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-4 py-2"
          >
            {lib}
          </Badge>
        ))}
      </div>
    </div>
  </div>
</Card>


          {/* Interests & Hobbies */}
          <Card className="p-8 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
  <div className="flex items-center gap-3 mb-6">
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
      <Heart className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl text-slate-900 dark:text-slate-100">Interests & Hobbies</h3>
  </div>

  <div className="space-y-4">
    {[
      {
        icon: Code,
        name: "Competitive Programming",
        color: "from-purple-500 to-pink-500",
        desc: "I regularly participate in contests on LeetCode, CodeChef, and Codeforces."
      },
      {
        icon: Zap,
        name: "Hackathons",
        color: "from-blue-500 to-cyan-500",
        desc: "I take part in inter-college coding hackathons at KJS, DJ Sangvi, and other colleges."
      },
      {
        icon: Heart,
        name: "Badminton",
        color: "from-pink-500 to-rose-500",
        desc: "Whenever I am free, I enjoy playing badminton to relax and stay active."
      }
    ].map((interest, index) => (
      <div
        key={index}
        className="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${interest.color}`}>
            <interest.icon className="w-6 h-6 text-white" />
          </div>
          <p className="text-slate-900 dark:text-slate-100 font-semibold">{interest.name}</p>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{interest.desc}</p>
      </div>
    ))}
  </div>

  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
      I believe in continuous learning and pushing my limits while balancing my hobbies and personal growth.
    </p>
  </div>
</Card>

        </div>
      </div>
    </section>
  );
}
