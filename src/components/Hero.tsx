import React from 'react';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import rohit from './rohit.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src={rohit} alt="Rohit Dhakre" className="object-cover w-full h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Rohit Thakur
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
              Full Stack Developer | Research Enthusiast | Innovator
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Exploring the edge of development and innovation. I build intelligent apps, impactful research, and future-ready systems.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View My Work</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center space-x-6">
            <a
              href="https://github.com/rohit2306-ui" // ✅ Replace with actual GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-thakur-0853b0335/" // ✅ Replace with actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rohit.rdhak1237@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
