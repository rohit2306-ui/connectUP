import React from 'react';
import { Download, Award, Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Resume: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, skills, and achievements. 
            Download my resume or explore the interactive summary below.
          </p>
        </div>

        {/* Download Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Download size={20} />
            <a href="https://drive.google.com/file/d/1kjYDGl4-XEdyNOR3XgC4OkfNu7cPjPqB/view?usp=sharing">Download Resume</a>
          </button>
        </div>

        {/* Resume Summary */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 lg:p-12 rounded-3xl shadow-xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">rdhak1237@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">+91 936 864 6810</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">New Delhi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">https://www.linkedin.com/in/rohit-thakur-0853b0335/</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">https://github.com/rohit2306-ui</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Dedicated and innovative software developer with over 2 years of experience in building robust full-stack web and mobile applications. 
                  Strong background in React, Node.js, Firebase, and system-level projects involving real-time data, AI integrations, and scalable architectures. 
                  Proven track record of delivering over 10 real-world projects, ranging from social media apps to diagnostic AI systems. 
                  Adept at problem-solving, team collaboration, and constantly exploring new technologies to enhance product value.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation to Sections */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="font-medium">Education</span>
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Briefcase size={20} className="text-green-600 dark:text-green-400" />
              <span className="font-medium">Experience</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Code size={20} className="text-purple-600 dark:text-purple-400" />
              <span className="font-medium">Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Award size={20} className="text-orange-600 dark:text-orange-400" />
              <span className="font-medium">Research</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
