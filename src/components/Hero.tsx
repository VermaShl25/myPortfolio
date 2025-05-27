
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl text-slate-300 mb-2 animate-slide-in-left">Hi, I'm</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-in-left delay-100">
                Sahil <span className="text-cyan-400 animate-pulse">Verma</span>
              </h1>
              <div className="text-xl md:text-2xl text-slate-300 mb-2 animate-slide-in-left delay-200">I'm a</div>
              <div className="text-3xl md:text-5xl font-semibold text-cyan-400 mb-8 animate-slide-in-left delay-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in delay-500">
              Passionate about creating innovative web applications with modern technologies. 
              Specialized in React, Node.js, and building scalable solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in delay-700">
              <Button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-slate-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 group">
                <Download className="mr-3 group-hover:animate-bounce" size={22} />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 backdrop-blur-sm bg-white/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group">
              {/* Enhanced Decorative Elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-30 blur-2xl animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full animate-pulse delay-200"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-300 group-hover:shadow-cyan-400/50 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                <img
                  src="/lovable-uploads/b38bc3b6-25f7-4d85-9db1-1a46c0e7ff29.png"
                  alt="Sahil Verma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100 shadow-lg shadow-blue-500/50"></div>
              <div className="absolute top-1/2 -right-4 w-5 h-5 bg-purple-500 rounded-full animate-bounce delay-200 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-16 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-20 right-16 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full -translate-x-1/2 shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-300 rounded-full -translate-x-1/2 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="text-cyan-400 animate-pulse" size={28} />
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
