import React from 'react';
import { Users, BookOpen, Rocket, CheckCircle, Star, Sparkles } from 'lucide-react';

const GetInvolved4: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            Start a STEM Club
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Rocket className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                Build Your Community
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting a STEM club is one of the most impactful ways to create lasting change 
              in your school or community. You'll build leadership skills while creating a 
              supportive environment where girls can explore technology together.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-serif font-bold text-gray-800">
                Getting Started: 5 Steps
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                <div className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Find Your Focus</h4>
                  <p className="text-sm text-gray-700">
                    Choose a theme: coding club, robotics team, science exploration, or 
                    general STEM interest group. Pick something you're passionate about!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                <div className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Get Official Approval</h4>
                  <p className="text-sm text-gray-700">
                    Talk to your school administration or community center. You'll need a 
                    faculty advisor and possibly a meeting space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg">
                <div className="bg-pink-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Recruit Members</h4>
                  <p className="text-sm text-gray-700">
                    Create eye-catching posters, make announcements, and use social media. 
                    Host an exciting kick-off event to attract members.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg">
                <div className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Plan Activities</h4>
                  <p className="text-sm text-gray-700">
                    Mix hands-on projects, guest speakers, field trips, and competitions. 
                    Keep meetings engaging and varied!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg">
                <div className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Sustain & Grow</h4>
                  <p className="text-sm text-gray-700">
                    Create a leadership team, maintain consistent meeting schedules, and 
                    document your activities for future members.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600" />
              Activity Ideas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-purple-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Weekly coding challenges</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-pink-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Build-a-thon projects</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Tech company visits</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-orange-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Science experiments</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Guest speaker series</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <CheckCircle className="w-4 h-4 text-indigo-600 mb-1" />
                <p className="text-sm font-semibold text-gray-800">Hackathon participation</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Resources to Help</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Girls Who Code offers free club curricula and support</li>
                  <li>• NCWIT provides resources for computing clubs</li>
                  <li>• Code.org has lesson plans and activities</li>
                  <li>• Apply for grants from tech companies to fund activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 27
        </div>
      </div>
    </div>
  );
};

export default GetInvolved4;