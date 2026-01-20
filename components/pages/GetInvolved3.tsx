import React from 'react';
import { Heart, HandHeart, Lightbulb } from 'lucide-react';

export default function GetInvolved3() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Heart className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 26</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <h3 className="text-2xl font-bold text-amber-900 text-center mb-4">Volunteer & Mentor</h3>

        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-5 border-2 border-rose-300">
          <p className="text-lg leading-relaxed">
            One of the most rewarding ways to strengthen your own STEM skills is to teach others. 
            Volunteering and mentoring not only help your community—they deepen your understanding 
            and build leadership skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <HandHeart className="w-7 h-7 text-rose-600" />
              <h4 className="font-bold text-lg text-rose-900">Tutoring Programs</h4>
            </div>
            <p className="text-gray-700 mb-2">
              Help younger students with math, science, or coding through:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• After-school programs</li>
              <li>• Library homework help</li>
              <li>• Online tutoring platforms</li>
              <li>• Peer tutoring at your school</li>
            </ul>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-7 h-7 text-amber-600" />
              <h4 className="font-bold text-lg text-amber-900">STEM Workshops</h4>
            </div>
            <p className="text-gray-700 mb-2">
              Lead hands-on activities for kids:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Coding clubs for beginners</li>
              <li>• Science experiment demonstrations</li>
              <li>• Girls Who Code chapters</li>
              <li>• Hour of Code events</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-purple-500">
          <h4 className="font-bold text-lg text-purple-900 mb-2">Community Organizations</h4>
          <p className="text-gray-700 mb-2">
            Join or volunteer with organizations dedicated to STEM education:
          </p>
          <div className="text-gray-700 text-sm space-y-1">
            <p><span className="font-semibold">Code.org:</span> Teach computer science to underserved communities</p>
            <p><span className="font-semibold">STEMettes:</span> Inspire young women through STEM role models</p>
            <p><span className="font-semibold">Black Girls Code:</span> Empower girls of color in technology</p>
            <p><span className="font-semibold">Local science museums:</span> Lead exhibits and workshops</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4 border border-amber-300">
          <p className="text-center italic text-amber-900">
            "When you teach others, you learn twice." — Share your passion and watch it multiply!
          </p>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}