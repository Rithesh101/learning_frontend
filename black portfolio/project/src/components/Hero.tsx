import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-fade-in-delay">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
          <a
            href="#projects"
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;