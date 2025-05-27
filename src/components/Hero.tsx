
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-slate-300 mb-2">Hi, I'm</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Sahil <span className="text-cyan-400">Verma</span>
              </h1>
              <div className="text-xl md:text-2xl text-slate-300 mb-2">I'm a</div>
              <div className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-6">
                Full Stack Developer
              </div>
            </div>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              Passionate about creating innovative web applications with modern technologies. 
              Specialized in React, Node.js, and building scalable solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full"></div>
              
              {/* Profile Photo */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl">
                <img
                  src="/lovable-uploads/b38bc3b6-25f7-4d85-9db1-1a46c0e7ff29.png"
                  alt="Sahil Verma"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
