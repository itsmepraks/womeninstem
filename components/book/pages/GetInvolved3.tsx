import React from 'react';
import { Heart, Users, GraduationCap, Lightbulb, HandHeart, Globe } from 'lucide-react';

const GetInvolved3: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            Volunteer & Mentor
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <HandHeart className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                Give Back, Grow Forward
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most rewarding ways to get involved is by helping others discover their 
              passion for STEM. Whether you're teaching coding, mentoring younger students, or 
              volunteering at STEM events, your impact can change lives.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-pink-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Teach & Tutor</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Share your knowledge with younger students who are just beginning their STEM journey.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lead coding workshops at your local library</li>
                    <li>• Tutor math and science at community centers</li>
                    <li>• Create online tutorials and learning resources</li>
                    <li>• Host STEM demo days for elementary schools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Mentorship Programs</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Connect with mentees through established programs that support women in STEM.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Girls Who Code:</strong> Facilitate clubs in your area</li>
                    <li>• <strong>Black Girls Code:</strong> Volunteer as a teaching assistant</li>
                    <li>• <strong>Code.org:</strong> Become a volunteer teacher</li>
                    <li>• <strong>STEM-Away:</strong> Remote mentorship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Community Events</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Help organize and run STEM events that bring communities together.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Volunteer at science fairs and maker faires</li>
                    <li>• Assist with hackathon organization</li>
                    <li>• Help at STEM summer camps</li>
                    <li>• Support Hour of Code events in December</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Create Content</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Inspire others by sharing your STEM journey and knowledge online.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Start a STEM blog or YouTube channel</li>
                    <li>• Write tutorials on Medium or Dev.to</li>
                    <li>• Create TikTok videos about science concepts</li>
                    <li>• Share your projects on GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-pink-100 to-purple-100 p-5 rounded-lg border-l-4 border-pink-600">
            <p className="text-gray-800 font-semibold mb-2">
              "To the world you may be one person, but to one person you may be the world."
            </p>
            <p className="text-gray-600 text-sm mb-3">— Unknown</p>
            <p className="text-sm text-gray-700">
              Every hour you volunteer, every student you mentor, creates a ripple effect 
              that extends far beyond what you can see. Your guidance today could inspire 
              the next great scientist, engineer, or innovator.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 26
        </div>
      </div>
    </div>
  );
};

export default GetInvolved3;