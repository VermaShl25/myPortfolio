import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import InteractiveCard from '@/components/ui/InteractiveCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sahil8decem@gmail.com",
      link: "mailto:sahil8decem@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8009832805",
      link: "tel:+918009832805"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/sahilverma",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/sahilverma",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/sahilverma",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 lg:mb-8">Let's Connect</h3>
            
            {/* Contact Details */}
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {contactInfo.map((info, index) => (
                <InteractiveCard key={index} hoverEffect="scale">
                  <div className="flex items-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="text-cyan-400 mr-3 lg:mr-4 group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm lg:text-base">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm lg:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm lg:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <InteractiveCard key={index} hoverEffect="scale">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 text-slate-300 ${social.color} transition-all duration-200 hover:border-cyan-400/50 backdrop-blur-sm block`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  </InteractiveCard>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <InteractiveCard hoverEffect="scale" className="mt-6 lg:mt-8">
              <div className="p-4 lg:p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-sm lg:text-base">Available for Projects</span>
                </div>
                <p className="text-slate-300 text-xs lg:text-sm">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss your project requirements!
                </p>
              </div>
            </InteractiveCard>
          </div>

          {/* Contact Form */}
          <InteractiveCard hoverEffect="scale">
            <div className="bg-slate-800/50 rounded-xl p-6 lg:p-8 border border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 text-sm lg:text-base">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 text-sm lg:text-base">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2 text-sm lg:text-base">Subject *</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 text-sm lg:text-base">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold py-3 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900 mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
