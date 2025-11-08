import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Github, ExternalLink, Users, Calendar, Clock, TrendingUp } from "lucide-react";

export function SocialMediaSection() {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@shipra_designs",
      followers: "158",
      postsFrequency: "3-4/week",
      activeSince: "2023",
      bestTime: "Evenings (7-10 PM)",
      description: "Design process & tutorials",
      url: "https://www.instagram.com/shipraaaa._?igsh=a3lhb2U2dXZhcXlu",
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "Shipra Singh",
      followers: "500+",
      postsFrequency: "2/week",
      activeSince: "2021",
      bestTime: "Weekdays (12-2 PM)",
      description: "Career journey & tech insights",
      url: "https://www.linkedin.com/in/shipra-singh-b06074298/",
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      handle: "@shipra-codes",
      followers: "40",
      postsFrequency: "When projects update",
      activeSince: "2023",
      bestTime: "Weekends",
      description: "Code projects & contributions",
      url: "https://github.com/S-Shipra",
      gradient: "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100",
      bgGradient: "from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20",
      iconColor: "text-slate-700 dark:text-slate-300"
    }
  ];

  const platformInsights = [
    {
      platform: "Instagram",
      timeSpent: "5-7 hours/week",
      engagementFocus: "Building design community",
      primaryGoals: "Showcase journeys, share insights",
      topContent: "Documenting places, stories, and cultures",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20"
    },
    {
      platform: "LinkedIn",
      timeSpent: "2-3 hours/week",
      engagementFocus: "Professional networking",
      primaryGoals: "Career growth, industry connections",
      topContent: "Project launches, learning insights",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      platform: "GitHub",
      timeSpent: "Varies with projects",
      engagementFocus: "Technical collaboration",
      primaryGoals: "Showcase technical skills, open source",
      topContent: "React projects, Python scripts",
      bgGradient: "from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20"
    }
  ];

  return (
    <section id="social-media" className="py-20 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-blue-50/30 dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-100">
            Digital Presence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Where I share my work and connect with the community
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card 
              key={index}
              className={`p-6 border-slate-200 dark:border-slate-800 bg-gradient-to-br ${platform.bgGradient} backdrop-blur-sm hover:shadow-2xl transition-all hover:scale-105 group`}
            >
              <div className="space-y-4">
                {/* Icon & Platform Name */}
                <div className="flex items-center gap-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${platform.gradient} shadow-md group-hover:scale-110 transition-transform`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 dark:text-slate-100">{platform.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{platform.handle}</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <p className="text-2xl text-slate-900 dark:text-slate-100 mb-1">{platform.followers}</p>
                    <p className="text-xs text-slate-500">Followers</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-900 dark:text-slate-100 mb-1">{platform.postsFrequency}</p>
                    <p className="text-xs text-slate-500">Posts</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-900 dark:text-slate-100 mb-1">{platform.activeSince}</p>
                    <p className="text-xs text-slate-500">Active</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-900 dark:text-slate-100 mb-1">{platform.bestTime}</p>
                    <p className="text-xs text-slate-500">Best Time</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                  {platform.description}
                </p>

                {/* Visit Button */}
                <Button
                  asChild
                  size="sm"
                  className={`w-full bg-gradient-to-r ${platform.gradient} hover:opacity-90 text-white shadow-md`}
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Profile
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Insights */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl text-slate-900 dark:text-slate-100 mb-8 text-center">
            Platform Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformInsights.map((insight, index) => (
              <Card 
                key={index}
                className={`p-6 bg-gradient-to-br ${insight.bgGradient} backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow`}
              >
                <h4 className="text-xl text-slate-900 dark:text-slate-100 mb-4">{insight.platform}</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Time spent</p>
                    <p className="text-sm text-slate-900 dark:text-slate-100">{insight.timeSpent}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Engagement focus</p>
                    <p className="text-sm text-slate-900 dark:text-slate-100">{insight.engagementFocus}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Primary goals</p>
                    <p className="text-sm text-slate-900 dark:text-slate-100">{insight.primaryGoals}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Top content</p>
                    <p className="text-sm text-slate-900 dark:text-slate-100">{insight.topContent}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
