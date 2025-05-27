
import { Code2, Database, Palette, Globe, Server, Smartphone, TrendingUp, Star, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
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
      color: "from-green-400 to-emerald-400",
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
      color: "from-purple-400 to-violet-400",
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
      color: "from-orange-400 to-red-400",
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
      color: "from-pink-400 to-rose-400",
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
      color: "from-indigo-400 to-blue-400",
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

  const getSkillBarColor = (level: number, categoryColor: string) => {
    if (level >= 90) return `bg-gradient-to-r ${categoryColor} shadow-lg`;
    if (level >= 80) return `bg-gradient-to-r from-cyan-400 to-blue-400 shadow-md`;
    if (level >= 70) return `bg-gradient-to-r from-blue-400 to-indigo-400 shadow-md`;
    return `bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm`;
  };

  const getSkillRating = (level: number) => {
    if (level >= 90) return { icon: <Star className="w-4 h-4" />, label: "Expert", color: "text-yellow-400" };
    if (level >= 80) return { icon: <TrendingUp className="w-4 h-4" />, label: "Advanced", color: "text-green-400" };
    if (level >= 70) return { icon: <Zap className="w-4 h-4" />, label: "Intermediate", color: "text-blue-400" };
    return { icon: <Code2 className="w-4 h-4" />, label: "Beginner", color: "text-purple-400" };
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here's an overview of the technologies 
            and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/20 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Enhanced Category Header */}
              <div className="flex items-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <div className={`text-white mr-4 p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:rotate-6 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">{category.title}</h3>
              </div>

              {/* Enhanced Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const rating = getSkillRating(skill.level);
                  return (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors duration-200">{skill.name}</span>
                          <div className={`${rating.color} group-hover/skill:scale-110 transition-transform duration-200`}>
                            {rating.icon}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs font-semibold ${rating.color}`}>{rating.label}</span>
                          <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      
                      {/* Enhanced Skill Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillBarColor(skill.level, category.color)} relative overflow-hidden group-hover/skill:shadow-lg`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s both`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div 
                          className={`absolute top-0 left-0 h-3 rounded-full opacity-0 group-hover/skill:opacity-50 transition-all duration-500 bg-gradient-to-r ${category.color} blur-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Category progress indicator */}
              <div className="mt-6 pt-4 border-t border-slate-600/50">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Category Mastery</span>
                  <span className="font-semibold">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills Summary */}
        <div className="text-center animate-fade-in delay-800">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-10 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 group">
            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-100 transition-colors duration-300">Other Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Agile Development", "Code Review", "Team Leadership", "Problem Solving",
                "Performance Optimization", "Testing", "Documentation", "API Design",
                "Security Best Practices", "Continuous Integration"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-400/20 hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-cyan-400/25 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
