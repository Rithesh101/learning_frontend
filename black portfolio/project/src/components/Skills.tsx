import React from 'react';
import { Code, Layout, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-8 h-8 text-gray-300" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  },
  {
    title: 'Backend Development',
    icon: <Code className="w-8 h-8 text-gray-300" />,
    skills: ['Node.js', 'Python', 'Java', 'Express', 'Django'],
  },
  {
    title: 'Database',
    icon: <Database className="w-8 h-8 text-gray-300" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
  },
  {
    title: 'DevOps',
    icon: <Terminal className="w-8 h-8 text-gray-300" />,
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Linux'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-100 to-gray-400 h-2 rounded-full"
                        style={{
                          width: `${Math.floor(Math.random() * 30) + 70}%`,
                          transition: 'width 1s ease-in-out',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;