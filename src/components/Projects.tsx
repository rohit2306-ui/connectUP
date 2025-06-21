import React from 'react';
import { ExternalLink, Github, Code, Zap, Shield, Sparkles } from 'lucide-react';
import cunsultacyImg from './cunsultacy.png'; // Adjust path if needed
import connectup from './connectup.png'
import lib from './libraryweb.png'
import property from './propertyweb.png'
import chat from './chatapplication.png'
import stock from './stock_predictor.png'
const Projects: React.FC = () => {
  const projects = [
    {
  title: 'Consultancy Web',
  description: 'Developed a platform to solve IT problems (CRUD Consultancy).',
  techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
  image: cunsultacyImg,  // use the imported image
  githubUrl: '',
  liveUrl: 'https://crud-cunsultancy.vercel.app/',
  category: 'Full Stack',
  icon: Code,
}
,
    {
      title: 'ConnectUp',
      description: 'Fully scaled social media application built with Firebase.',
      techStack: ['React', 'Firebase', 'Tailwind'],
      image: connectup,
      githubUrl: '',
      liveUrl: 'https://connect-up-zeta.vercel.app/',
      category: 'Social Media',
      icon: Sparkles,
    },
    {
      title: 'Library Site',
      description: 'Created a platform to read premium books online.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: lib,
      githubUrl: '',
      liveUrl: 'https://library4all.vercel.app/',
      category: 'Frontend',
      icon: Code,
    },
    {
      title: 'Property Dealing Web',
      description: 'Developed a 2-interface site for property dealers and buyers.',
      techStack: ['React', 'Firebase', 'Tailwind'],
      image: property,
      githubUrl: '',
      liveUrl: 'https://property-dealer-9cci.vercel.app/',
      category: 'Real Estate',
      icon: Zap,
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat app with Firebase Auth and phone/email login.',
      techStack: ['React', 'Firebase', 'Tailwind'],
      image: chat,
      githubUrl: '',
      liveUrl: 'https://turn-chat-app.vercel.app/chat.html',
      category: 'Messaging',
      icon: Shield,
    },
    {
      title: 'Stock Market Predictor',
      description: 'Real-time stock prediction using previous market data.',
      techStack: ['React', 'Chart.js', 'API'],
      image: stock,
      githubUrl: '',
      liveUrl: 'https://stockpredictor-com.vercel.app/',
      category: 'AI/ML',
      icon: Sparkles,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work featuring real-world solutions and smart technologies that reflect my skills and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm">
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <div className="flex items-center space-x-4 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <Github size={18} />
                          <span className="font-medium">Code</span>
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rohit2306-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
