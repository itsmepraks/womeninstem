import React from 'react';
import { Sparkles, Users, Target, Heart } from 'lucide-react';

const GetInvolved1: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Be the Change
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Sparkles className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-8 mb-6 border border-purple-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                Your Journey Starts Here
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You've learned about STEM, discovered inspiring stories, and explored valuable resources. 
                Now it's time to take action! This chapter will guide you through meaningful ways to 
                get involved in the STEM community.
              </p>
            </div>
          </div>

          <div className="border-t border-purple-200 pt-6 mb-6">
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Ways to Make an Impact
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🏆 Participate in Competitions</h4>
                <p className="text-gray-700 text-sm">
                  Challenge yourself and showcase your skills through hackathons, coding competitions, 
                  and science fairs.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🤝 Volunteer & Mentor</h4>
                <p className="text-gray-700 text-sm">
                  Share your knowledge and inspire the next generation of women in STEM.
                </p>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">🌟 Start a STEM Club</h4>
                <p className="text-gray-700 text-sm">
                  Create a community in your school or neighborhood to explore STEM together.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">📢 Advocate for Change</h4>
                <p className="text-gray-700 text-sm">
                  Raise awareness about women in STEM and work towards greater diversity and inclusion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <p className="text-gray-800 font-semibold mb-2">
                  "The future belongs to those who believe in the beauty of their dreams."
                </p>
                <p className="text-gray-600 text-sm">— Eleanor Roosevelt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 24
        </div>
      </div>
    </div>
  );
};

export default GetInvolved1;