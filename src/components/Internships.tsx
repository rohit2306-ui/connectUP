import React from 'react';
import { Building, Calendar, MapPin, ExternalLink, Award, Target } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      company: 'Edunet Foundation',
      role: 'AI Research Intern',
      duration: 'Feb 2024 - Apr 2024',
      location: 'Remote, India',
      type: 'Part-time',
      logo: Building,
      description:
        'Contributed to the development of an AI-based diagnostic system for analyzing MRI and X-ray images using deep learning. The system aimed to improve medical diagnostics and reduce human error by leveraging machine learning.',
      achievements: [
        'Integrated PyTorch and OpenCV to process and analyze medical image data',
        'Developed a real-time web interface for diagnosis using React and Firebase',
        'Researched and experimented with MONAI and CheXNet for medical image classification',
        'Built a multilingual web platform to support wider accessibility',
      ],
      technologies: ['Python', 'PyTorch', 'OpenCV', 'React', 'Firebase', 'MONAI', 'CheXNet'],
      companyUrl: 'https://drive.google.com/file/d/1TwF7nH71mjRrsi5HFeHNSLgkA1AmYcg6/view',
    },
  ];

  return (
    <section id="internships" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've had the opportunity to work on impactful projects that blend AI and software engineering. 
            As a Computer Science undergrad at GGSIPU with a 92 percentile in JEE Mains and a GATE 2026 aspirant, 
            I am focused on building systems that solve real-world problems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {internships.map((exp, index) => {
            const Logo = exp.logo;
            return (
              <div key={index} className="relative group">
                {index < internships.length - 1 && (
                  <div className="absolute left-8 lg:left-1/2 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-indigo-600 transform lg:-translate-x-0.5 hidden sm:block"></div>
                )}

                <div
                  className={`flex flex-col lg:flex-row items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8`}
                >
                  <div className="relative lg:flex-shrink-0 hidden lg:block">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <Logo size={24} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                            >
                              <span>{exp.company}</span>
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          <Target size={18} className="text-green-500" />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <Award size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Internships;
