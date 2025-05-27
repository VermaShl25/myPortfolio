
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/taskmanager"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/weather-app"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "D3.js", "Node.js", "Redis", "OAuth"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/social-dashboard"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, progress tracking, and interactive assignments.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=60",
      technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "NextAuth"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/lms"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "A real-time cryptocurrency portfolio tracking application with price alerts, portfolio analytics, and market insights.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=500&q=60",
      technologies: ["Vue.js", "Vuex", "CoinGecko API", "Firebase"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/crypto-tracker"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work & <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
            Each project demonstrates different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 flex-1"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
