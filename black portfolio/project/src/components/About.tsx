import React from 'react';
import { FileDown, Code2, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience in building web applications.
              My journey in software development started with a deep curiosity for technology and problem-solving.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building scalable web applications using modern technologies and best practices.
              My approach combines technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            <div className="flex space-x-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <FileDown size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <Code2 className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-gray-400">
                Writing maintainable and efficient code is my top priority.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <BrainCircuit className="w-12 h-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solver</h3>
              <p className="text-gray-400">
                Turning complex problems into simple solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;