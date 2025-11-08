import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singh.shipra4005@gmail.com",
      link: "mailto:singh.shipra4005@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99372 77003",
      link: "tel:+919937277003"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@S-Shipra",
      url: "https://github.com/S-Shipra"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Shipra Singh",
      url: "https://www.linkedin.com/in/shipra-singh-b06074298/"
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@shipraaaa._",
      url: "https://www.instagram.com/shipraaaa._?igsh=a3lhb2U2dXZhcXlu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-50/30 via-purple-50/20 to-blue-50/30 dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 dark:text-slate-100">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card className="p-6 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl mb-6 text-slate-900 dark:text-slate-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-slate-100">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl mb-6 text-slate-900 dark:text-slate-100">
                Social Media
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                      <social.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-slate-500">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2 p-8 border-slate-200 dark:border-slate-800">
            <h3 className="text-xl mb-6 text-slate-900 dark:text-slate-100">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Shipra Singh"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="singh.shipra4005@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Project Inquiry for Shipra Singh"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell Shipra Singh about your project..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
