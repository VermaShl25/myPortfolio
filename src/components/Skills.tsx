
import { Code2, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Python", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "JWT Auth", level: 85 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "Prisma", level: 75 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 75 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android", level: 70 },
        { name: "Expo", level: 80 },
        { name: "App Store Deploy", level: 75 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 70 }
      ]
    }
  ];

  const getSkillBarColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-green-400 to-green-500";
    if (level >= 80) return "bg-gradient-to-r from-cyan-400 to-cyan-500";
    if (level >= 70) return "bg-gradient-to-r from-blue-400 to-blue-500";
    return "bg-gradient-to-r from-purple-400 to-purple-500";
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here's an overview of the technologies 
            and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-cyan-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillBarColor(skill.level)}`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Other Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile Development", "Code Review", "Team Leadership", "Problem Solving",
                "Performance Optimization", "Testing", "Documentation", "API Design",
                "Security Best Practices", "Continuous Integration"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
