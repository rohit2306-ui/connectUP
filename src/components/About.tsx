import React from 'react';
import {
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Code,
  Brain,
  Database,
  Laptop,
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Web Development', icon: Code, level: 90 },
    { name: 'AI / ML', icon: Brain, level: 85 },
    { name: 'System Design', icon: Database, level: 80 },
    { name: 'Full Stack Development', icon: Laptop, level: 88 },
  ];

  const education = [
    {
      institution: 'Guru Gobind Singh Indraprastha University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      year: '2023 - 2027',
      location: 'New Delhi, India',
      achievements: [
        '92 Percentile in JEE Mains',
        'GATE CSE 2026 Aspirant',
        'Focused Research in Computation',
      ],
    },
    {
      institution: 'High School',
      degree: 'Senior Secondary (PCM)',
      year: '2019 - 2021',
      location: 'India',
      achievements: ['Top 5% in board exams', 'CS Club Lead', 'State-level Coding Competitions'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Developer | Researcher | Innovator. I'm on a journey to create real-world solutions through the power of code, design, and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rohit Dhakre</h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                I’m a passionate full stack developer and AI researcher building impactful projects across web, mobile, and machine learning.
                From chat applications to computation-focused research, I love solving complex problems with clean and scalable solutions.
              </p>
              <p>
                I’m pursuing my B.Tech in Computer Science from Guru Gobind Singh Indraprastha University, New Delhi. I scored 92 percentile in JEE Mains 
                and I’m currently preparing for GATE CSE 2026 with a keen focus on system design and advanced computation theories.
              </p>
              <p>
                I’ve worked with technologies like React.js, Node.js, Firebase, MongoDB, PyTorch, and more. 
                I’m also deeply interested in building intelligent systems and pushing boundaries in computational science.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h4>
              <div className="space-y-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-16 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.degree}
                    </p>

                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          <Award size={12} />
                          <span>{achievement}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
