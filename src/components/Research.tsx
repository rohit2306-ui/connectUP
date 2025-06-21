import React from 'react';
import { ExternalLink, Lightbulb, Link2 } from 'lucide-react';

const Research: React.FC = () => {
  const mainResearch = {
    title: 'Infinite Memory Storage using Signals in Space',
    status: 'Ongoing Research',
    description: `This independent theory explores the possibility of utilizing natural signals and spatial frequency domains as infinite storage mediums. By leveraging the properties of quantum noise, wave interference, and spatial signal resonance, this research aims to demonstrate a practical path toward limitless data retention without physical memory modules.`,
    summaryPoints: [
      'Conceptual model based on electromagnetic spatial stability',
      'Daily logs and theoretical updates published on Medium',
      'Long-term vision for redefining digital storage and computation'
    ],
    blogLink: 'https://medium.com/@rtech3388/infinite-memory-30b395ba40c4',
    impactNote: 'This work is currently in conceptual development and aims to open new frontiers in theoretical computer science and space-based computation.',
  };

  const otherResearchLinks = [
    {
      title: 'All My Publications, Theories & Projects',
      url: 'https://linktr.ee/rohitdhakre', // Update this to your actual links page
    },
    {
      title: 'AI-Powered MRI Diagnosis System',
      url: 'https://github.com/rohitdhakre/mri-diagnosis-ai', // Example repo
    },
    {
      title: 'Federated Learning in Healthcare with Privacy',
      url: 'https://medium.com/@rohit.rdhak1237/federated-health-ai', // Example article
    },
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Research 
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Focused on groundbreaking theories, especially infinite memory storage using signals in space. 
            All other research, publications, and innovations are linked below.
          </p>
        </div>

        {/* Main Research */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <Lightbulb size={24} className="text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {mainResearch.title}
            </h3>
          </div>
          <span className="inline-block mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
            {mainResearch.status}
          </span>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {mainResearch.description}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
            {mainResearch.summaryPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic mb-4">
            {mainResearch.impactNote}
          </p>
          <a
            href={mainResearch.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            <ExternalLink size={16} />
            <span>Read Full Theory on Medium</span>
          </a>
        </div>

        {/* Other Research Links */}
        {/* <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
            <Link2 size={20} className="text-green-600 dark:text-green-400" />
            <span>Other Research & Publications</span>
          </h3>
          <ul className="space-y-4">
            {otherResearchLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Research;
