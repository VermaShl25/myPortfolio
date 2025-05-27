
import { Code, Palette, Database, Globe } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate developer with experience in creating digital solutions that combine
            technical excellence with creative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Info */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <div className="w-6 h-6 bg-cyan-400 rounded-full mr-3"></div>
              Personal Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Name:</span>
                <span className="text-white">Sahil Verma</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Age:</span>
                <span className="text-white">21</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Gender:</span>
                <span className="text-white">Male</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Languages:</span>
                <span className="text-white">Hindi & English</span>
              </div>
            </div>
          </div>

          {/* Educational Background */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <div className="w-6 h-6 bg-cyan-400 rounded-full mr-3"></div>
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Institute:</span>
                <span className="text-white">IIT Bombay</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Duration:</span>
                <span className="text-white">2021-2025</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Degree:</span>
                <span className="text-white">B-Tech</span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 w-20">Field:</span>
                <span className="text-white">Met Eng & Material Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
            <div className="w-6 h-6 bg-cyan-400 rounded-full mr-3"></div>
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-400 pl-6">
              <h4 className="text-xl font-semibold text-white">App Development Intern | A.V.Copters</h4>
              <p className="text-slate-300">Developed mobile applications focusing on user experience and performance optimization.</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h4 className="text-xl font-semibold text-white">MERN-stack Intern | Systemica Solutions</h4>
              <p className="text-slate-300">Built full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h4 className="text-xl font-semibold text-white">Frontend Developer | Chocolate Stay</h4>
              <p className="text-slate-300">Created responsive and interactive frontend interfaces for hospitality platform.</p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
