import React from 'react';
import { Sparkles, Heart, Users, Rocket } from 'lucide-react';

export default function GetInvolved6() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Sparkles className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 29</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-amber-900 mb-2">Your Next Step</h3>
          <p className="text-lg text-amber-700 italic">The future is yours to create</p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-lg p-6 border-2 border-purple-300 shadow-lg">
          <p className="text-xl leading-relaxed text-center text-gray-800 mb-4">
            You've explored the stories, learned about the resources, and discovered the opportunities. 
            Now it's time to take action. <span className="font-bold text-purple-900">Your journey starts today.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-blue-900 mb-2">Start Small</h4>
            <p className="text-gray-700 text-sm">
              You don't need to change the world overnight. Take one small step: 
              join a club, enter a competition, or reach out to a mentor. 
              Every expert was once a beginner.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-green-900 mb-2">Find Your Community</h4>
            <p className="text-gray-700 text-sm">
              You're not alone on this journey. Connect with others who share your 
              passion, whether online or in person. Together, you'll go further.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Heart className="w-12 h-12 text-rose-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-rose-900 mb-2">Stay Curious</h4>
            <p className="text-gray-700 text-sm">
              Never lose your sense of wonder. Ask questions, experiment, fail, 
              and try again. Curiosity is the fuel that drives innovation.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-amber-900 mb-2">Be Bold</h4>
            <p className="text-gray-700 text-sm">
              Don't wait for permission to pursue your dreams. The world needs your 
              unique perspective, your creativity, and your determination.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg p-6 border-2 border-amber-400 shadow-lg">
          <h4 className="text-2xl font-bold text-amber-900 text-center mb-3">Remember</h4>
          <p className="text-lg text-center text-gray-800 leading-relaxed">
            Every groundbreaking discovery, every revolutionary invention, every leap forward in 
            human understanding started with someone saying, <span className="font-bold text-amber-900 italic">"I wonder if..."</span>
          </p>
          <p className="text-lg text-center text-gray-800 leading-relaxed mt-3">
            That someone could be you. That moment could be now.
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
            Welcome to STEM. Welcome to your future. ✨
          </p>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}