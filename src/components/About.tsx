
import { Code, Palette, Database, Globe, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Building scalable server-side applications with Node.js, Express, and database management."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that enhance user experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end web development from concept to deployment with modern tech stacks."
    }
  ];

  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      company: "A.V.Copters",
      role: "App Development Intern",
      duration: "6 months",
      location: "Remote",
      description: "Developed mobile applications focusing on user experience and performance optimization.",
      technologies: ["React Native", "Flutter", "Firebase", "REST APIs"],
      achievements: ["Improved app performance by 40%", "Implemented real-time features", "Enhanced user engagement"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      company: "Systemica Solutions",
      role: "MERN-stack Intern",
      duration: "4 months",
      location: "Hybrid",
      description: "Built full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      achievements: ["Delivered 3 production apps", "Optimized database queries", "Mentored junior developers"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      company: "Chocolate Stay",
      role: "Frontend Developer",
      duration: "8 months",
      location: "On-site",
      description: "Created responsive and interactive frontend interfaces for hospitality platform.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      achievements: ["Increased conversion rate by 25%", "Reduced load time by 60%", "Implemented accessibility features"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate developer with experience in creating digital solutions that combine
            technical excellence with creative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in delay-200">
          {/* Enhanced Personal Info */}
          <div className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
              Personal Info
            </h3>
            <div className="space-y-5">
              {[
                { label: "Name:", value: "Sahil Verma" },
                { label: "Age:", value: "21" },
                { label: "Gender:", value: "Male" },
                { label: "Languages:", value: "Hindi & English" }
              ].map((item, index) => (
                <div key={index} className="flex items-center group/item hover:bg-slate-700/30 rounded-lg p-3 transition-all duration-200">
                  <span className="text-slate-400 w-24 group-hover/item:text-cyan-300 transition-colors duration-200">{item.label}</span>
                  <span className="text-white font-medium group-hover/item:text-cyan-100 transition-colors duration-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Educational Background */}
          <div className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse delay-200"></div>
              Education
            </h3>
            <div className="space-y-5">
              {[
                { label: "Institute:", value: "IIT Bombay" },
                { label: "Duration:", value: "2021-2025" },
                { label: "Degree:", value: "B-Tech" },
                { label: "Field:", value: "Met Eng & Material Science" }
              ].map((item, index) => (
                <div key={index} className="flex items-center group/item hover:bg-slate-700/30 rounded-lg p-3 transition-all duration-200">
                  <span className="text-slate-400 w-24 group-hover/item:text-cyan-300 transition-colors duration-200">{item.label}</span>
                  <span className="text-white font-medium group-hover/item:text-cyan-100 transition-colors duration-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Professional Experience */}
        <div className="mb-20 animate-fade-in delay-400">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Award className="text-cyan-400 mr-4" size={32} />
            <span className="text-white">Professional </span>
            <span className="text-cyan-400 ml-2">Experience</span>
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-r from-slate-900/60 via-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Experience Timeline */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company & Role */}
                  <div className="md:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-cyan-400/20 rounded-xl text-cyan-400 group-hover:bg-cyan-400/30 group-hover:scale-110 transition-all duration-300">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-200">{exp.role}</h4>
                        <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-200">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/30 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/30 transition-all duration-300">
                    <h5 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="text-sm text-slate-300 flex items-start space-x-2 group-hover:text-slate-200 transition-colors duration-200"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced What I Do */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in delay-600">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 p-3 bg-cyan-400/10 rounded-xl w-fit group-hover:bg-cyan-400/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">{feature.title}</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">{feature.description}</p>
              
              {/* Hover indicator */}
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
