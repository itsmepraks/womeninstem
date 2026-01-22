import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';

export default function GetInvolved2() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Trophy className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 25</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <h3 className="text-2xl font-bold text-amber-900 text-center mb-4">Competitions & Challenges</h3>

        <p className="text-lg leading-relaxed">
          Competitions are an incredible way to test your skills, learn from others, and 
          gain recognition for your work. They're also a lot of fun!
        </p>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-lg text-blue-900">Science Olympiad</h4>
            </div>
            <p className="text-gray-700">
              Team-based competitions in biology, earth science, chemistry, physics, and engineering. 
              Build projects, compete in events, and represent your school at state and national levels.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-6 h-6 text-purple-600" />
              <h4 className="font-bold text-lg text-purple-900">Hackathons</h4>
            </div>
            <p className="text-gray-700">
              24-48 hour coding marathons where you build software projects with a team. 
              Try MLH (Major League Hacking) events, Google Code-in, or local university hackathons.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-6 h-6 text-green-600" />
              <h4 className="font-bold text-lg text-green-900">Math Competitions</h4>
            </div>
            <p className="text-gray-700">
              MATHCOUNTS, AMC (American Mathematics Competitions), and USAMO test your 
              problem-solving abilities and can open doors to summer programs and scholarships.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-pink-500">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-6 h-6 text-pink-600" />
              <h4 className="font-bold text-lg text-pink-900">Robotics Competitions</h4>
            </div>
            <p className="text-gray-700">
              FIRST Robotics, VEX Robotics, and RoboCup combine engineering, programming, 
              and teamwork. Design, build, and compete with robots you create!
            </p>
          </div>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}