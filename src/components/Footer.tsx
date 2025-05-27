
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-slate-300 flex items-center justify-center md:justify-start">
              Made with <Heart className="text-red-500 mx-2" size={16} /> by Sahil Verma
            </p>
            <p className="text-slate-400 text-sm mt-1">
              © 2025 All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
