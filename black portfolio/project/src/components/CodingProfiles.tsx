import React from 'react';
import { Trophy, Code, Brain, Target } from 'lucide-react';

const profiles = [
  {
    platform: 'LeetCode',
    icon: <Code className="w-8 h-8 text-gray-300" />,
    stats: {
      ranking: '5,234',
      solved: '450+',
      contests: '25+',
    },
    link: 'https://leetcode.com/username',
    className: 'from-yellow-400/20 to-yellow-600/20',
  },
  {
    platform: 'HackerRank',
    icon: <Target className="w-8 h-8 text-gray-300" />,
    stats: {
      badges: '15',
      certificates: '5',
      skills: 'Problem Solving',
    },
    link: 'https://hackerrank.com/username',
    className: 'from-green-400/20 to-green-600/20',
  },
  {
    platform: 'CodeForces',
    icon: <Brain className="w-8 h-8 text-gray-300" />,
    stats: {
      rating: '1756',
      contests: '30+',
      problems: '500+',
    },
    link: 'https://codeforces.com/profile/username',
    className: 'from-red-400/20 to-red-600/20',
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Coding Profiles
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`bg-gradient-to-br ${profile.className} p-1 rounded-lg`}>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    {profile.icon}
                    <h3 className="text-xl font-semibold text-white">{profile.platform}</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-gray-400 group-hover:text-white transition-colors duration-300">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>View Profile</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;