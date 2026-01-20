import React from 'react';
import { Trophy, Zap, Code, Rocket, Award, Star } from 'lucide-react';

const GetInvolved2: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            STEM Competitions
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Trophy className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                Challenge Yourself
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Competitions are an excellent way to test your skills, learn from others, and 
              gain recognition for your talents. Here are top opportunities for young women in STEM:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Hackathons</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>MLH Hackathons:</strong> Major League Hacking events worldwide</li>
                    <li>• <strong>Google Code Jam:</strong> Annual coding competition</li>
                    <li>• <strong>TechTogether:</strong> Hackathons for women and non-binary individuals</li>
                    <li>• <strong>Athena Hacks:</strong> USC's women-focused hackathon</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Coding Competitions</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>USACO:</strong> USA Computing Olympiad</li>
                    <li>• <strong>Technovation Girls:</strong> App development challenge</li>
                    <li>• <strong>Congressional App Challenge:</strong> Create apps for your district</li>
                    <li>• <strong>CyberPatriot:</strong> National cybersecurity competition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Science & Engineering Fairs</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>ISEF:</strong> International Science and Engineering Fair</li>
                    <li>• <strong>Google Science Fair:</strong> Online competition for ages 13-18</li>
                    <li>• <strong>FIRST Robotics:</strong> Design and build robots</li>
                    <li>• <strong>Science Olympiad:</strong> Team-based STEM competition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Women-Specific Programs</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Girls Who Code:</strong> Summer immersion programs</li>
                    <li>• <strong>NCWIT Award:</strong> Aspirations in Computing</li>
                    <li>• <strong>WiSTEM Challenge:</strong> Women in STEM competition</li>
                    <li>• <strong>Kode With Klossy:</strong> Free coding camps for girls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong className="text-yellow-800">💡 Pro Tip:</strong> Start with local competitions 
              to build confidence, then work your way up to national and international events. 
              Don't be afraid to compete—every experience is a learning opportunity!
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 25
        </div>
      </div>
    </div>
  );
};

export default GetInvolved2;