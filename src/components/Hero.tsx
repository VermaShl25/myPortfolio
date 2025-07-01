import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Enhanced floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Enhanced Text Content with better responsive typography */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-2 animate-slide-in-left">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 animate-slide-in-left delay-100 leading-tight">
                Sahil <span className="text-cyan-400 animate-pulse">Verma</span>
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-2 animate-slide-in-left delay-200">
                I'm a
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cyan-400 mb-6 lg:mb-8 animate-slide-in-left delay-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 lg:mb-10 max-w-2xl leading-relaxed animate-fade-in delay-500">
              Passionate about creating innovative web applications with modern
              technologies. Specialized in React, Node.js, and building scalable
              solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start animate-fade-in delay-700">
              <Button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-slate-900 font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 group text-sm sm:text-base">
                <Download
                  className="mr-2 lg:mr-3 group-hover:animate-bounce"
                  size={20}
                />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 lg:px-10 py-3 lg:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 backdrop-blur-sm bg-white/5 text-sm sm:text-base"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Larger Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300 order-1 lg:order-2">
            <div className="relative group">
              {/* Enhanced Decorative Elements */}
              <div className="absolute -inset-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full animate-pulse delay-200"></div>

              {/* Main Profile Container - Adjusted sizing */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.025] group-hover:border-cyan-300 group-hover:shadow-cyan-400/50 group-hover:shadow-[0_0_80px_rgba(34,211,238,0.5)]">
                <img
                  src="/lovable-uploads/b38bc3b6-25f7-4d85-9db1-1a46c0e7ff29.png"
                  alt="Sahil Verma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Floating Elements - Responsive positioning */}
              <div className="absolute top-6 lg:top-8 right-6 lg:right-8 w-3 lg:w-4 h-3 lg:h-4 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute bottom-10 lg:bottom-12 left-6 lg:left-8 w-2 lg:w-3 h-2 lg:h-3 bg-blue-500 rounded-full animate-bounce delay-100 shadow-lg shadow-blue-500/50"></div>
              <div className="absolute top-1/2 -right-3 lg:-right-4 w-4 lg:w-5 h-4 lg:h-5 bg-purple-500 rounded-full animate-bounce delay-200 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-12 lg:top-16 left-3 lg:left-4 w-1 lg:w-2 h-1 lg:h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-16 lg:bottom-20 right-12 lg:right-16 w-2 lg:w-3 h-2 lg:h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2 lg:w-3 h-2 lg:h-3 bg-cyan-300 rounded-full -translate-x-1/2 shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute bottom-0 left-1/2 w-1 lg:w-2 h-1 lg:h-2 bg-blue-300 rounded-full -translate-x-1/2 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="text-cyan-400 animate-pulse" size={24} />
            <div className="w-px h-6 lg:h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
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
