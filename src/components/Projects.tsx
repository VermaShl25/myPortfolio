
import { ExternalLink, Github, Calendar, Users, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveCard from '@/components/ui/InteractiveCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/ecommerce",
      status: "Production",
      team: "Solo Project",
      duration: "3 months",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/taskmanager",
      status: "Production",
      team: "3 Developers",
      duration: "4 months",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/weather-app",
      status: "Beta",
      team: "Solo Project",
      duration: "2 months",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "D3.js", "Node.js", "Redis", "OAuth"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/social-dashboard",
      status: "Development",
      team: "2 Developers",
      duration: "5 months",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, progress tracking, and interactive assignments.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=60",
      technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "NextAuth"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/lms",
      status: "Production",
      team: "4 Developers",
      duration: "6 months",
      featured: true
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "A real-time cryptocurrency portfolio tracking application with price alerts, portfolio analytics, and market insights.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=60",
      technologies: ["Vue.js", "Vuex", "CoinGecko API", "Firebase"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/crypto-tracker",
      status: "Beta",
      team: "Solo Project",
      duration: "3 months",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "from-green-400 to-emerald-400";
      case "Beta": return "from-yellow-400 to-orange-400";
      case "Development": return "from-blue-400 to-cyan-400";
      default: return "from-gray-400 to-slate-400";
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work & <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
            Each project demonstrates different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <InteractiveCard
              key={index}
              hoverEffect="tilt"
              className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 animate-fade-in ${project.featured ? 'lg:col-span-1 sm:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent group-hover:from-slate-900/60 transition-all duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg backdrop-blur-sm`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="p-1.5 sm:p-2 bg-yellow-400/20 rounded-full backdrop-blur-sm">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    </div>
                  </div>
                )}

                {/* Project Meta Info Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span className="hidden sm:inline">{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span className="hidden sm:inline">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400" />
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 sm:mb-6 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/30 hover:from-cyan-400/30 hover:to-blue-400/30 hover:scale-105 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-cyan-400/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div className="flex gap-2 sm:gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-slate-900 flex-1 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 text-xs sm:text-sm"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in delay-600">
          <InteractiveCard hoverEffect="glow">
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                Interested in Working Together?
              </h3>
              <p className="text-slate-300 mb-6 group-hover:text-slate-200 transition-colors duration-300">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Button 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
