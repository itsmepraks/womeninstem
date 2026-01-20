import React from 'react';
import { Mail, Github, Linkedin, Globe, MessageCircle } from 'lucide-react';

export default function Contact1() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Mail className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Contact</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 30</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <div className="text-center mb-6">
          <MessageCircle className="w-16 h-16 text-amber-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-amber-900 mb-2">Let's Connect!</h3>
          <p className="text-lg text-amber-700 italic">We'd love to hear from you</p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 border-2 border-purple-300">
          <p className="text-lg leading-relaxed text-center">
            Have questions? Want to share your STEM journey? Looking for collaboration opportunities? 
            We're here to support you every step of the way.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
            <Mail className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-blue-900">Email</h4>
              <p className="text-gray-700">hello@stemspark.com</p>
              <p className="text-sm text-gray-600 italic">We respond within 24 hours</p>
            </div>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
            <Github className="w-8 h-8 text-gray-800 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-gray-900">GitHub</h4>
              <p className="text-gray-700">@itsmepraks/womeninstem</p>
              <p className="text-sm text-gray-600 italic">Contribute to this project</p>
            </div>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
            <Linkedin className="w-8 h-8 text-blue-700 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-blue-900">LinkedIn</h4>
              <p className="text-gray-700">STEM•SPARK Community</p>
              <p className="text-sm text-gray-600 italic">Join our professional network</p>
            </div>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
            <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-green-900">Website</h4>
              <p className="text-gray-700">www.stemspark.com</p>
              <p className="text-sm text-gray-600 italic">Explore more resources</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-5 border-2 border-amber-300">
          <h4 className="font-bold text-lg text-amber-900 mb-2 text-center">Ways to Get Involved</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              <span><span className="font-semibold">Share Your Story:</span> Inspire others by sharing your STEM journey</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              <span><span className="font-semibold">Suggest Resources:</span> Know a great program or opportunity? Let us know!</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              <span><span className="font-semibold">Report Issues:</span> Help us improve this platform by reporting bugs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">•</span>
              <span><span className="font-semibold">Volunteer:</span> Become a mentor or contribute content</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}