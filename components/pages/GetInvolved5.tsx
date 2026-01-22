import React from 'react';
import { Megaphone, BookOpen, Globe } from 'lucide-react';

export default function GetInvolved5() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Megaphone className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 28</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <h3 className="text-2xl font-bold text-amber-900 text-center mb-4">Advocate & Lead Change</h3>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-5 border-2 border-purple-300">
          <p className="text-lg leading-relaxed">
            Your voice matters! Advocacy is about using your experiences and insights to create 
            positive change in STEM education and opportunities for everyone.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              At Your School
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Advocate for more AP STEM courses and electives</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Request better lab equipment and technology resources</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Organize career panels with women in STEM professions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Start initiatives to make STEM spaces more inclusive</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Present to school boards about STEM education needs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-600" />
              In Your Community
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Write articles or blog posts about women in STEM</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Speak at local events about your STEM experiences</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Contact local representatives about STEM funding</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Organize community STEM fairs and showcases</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Partner with libraries to offer free STEM workshops</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md border-l-4 border-rose-500">
            <h4 className="font-bold text-lg text-rose-900 mb-2">Online Advocacy</h4>
            <p className="text-gray-700 mb-2">
              Use social media and digital platforms to amplify your impact:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-rose-600">•</span>
                <span>Share stories of women breaking barriers in STEM</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-600">•</span>
                <span>Create YouTube content about STEM topics</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-600">•</span>
                <span>Join online communities and contribute to discussions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-600">•</span>
                <span>Start a podcast featuring STEM role models</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4 border border-amber-300">
          <p className="text-center italic text-amber-900 font-medium">
            "Be the change you wish to see" — Your advocacy today creates opportunities for tomorrow's innovators.
          </p>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}