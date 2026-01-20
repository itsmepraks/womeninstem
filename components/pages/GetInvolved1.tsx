import React from 'react';
import { Users, Sparkles } from 'lucide-react';

export default function GetInvolved1() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Users className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 24</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <div className="text-center mb-8">
          <Sparkles className="w-16 h-16 text-amber-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-amber-900 mb-2">Join the Movement</h3>
          <p className="text-lg text-amber-700 italic">Your journey in STEM starts here</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-amber-200">
          <p className="text-lg leading-relaxed mb-4">
            The world of STEM is waiting for <span className="font-bold text-amber-900">YOU</span>. 
            Whether you're a student, professional, educator, or simply curious about science 
            and technology, there are countless ways to get involved and make a difference.
          </p>
          
          <p className="text-lg leading-relaxed">
            Every great scientist, engineer, and mathematician started exactly where you are now—
            curious, eager to learn, and ready to explore. Your unique perspective and talents 
            are exactly what the STEM community needs.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-pink-100 rounded-lg p-6 border-2 border-amber-300">
          <h4 className="text-xl font-bold text-amber-900 mb-3">Why Get Involved?</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Build skills that will shape the future</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Connect with inspiring mentors and peers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Make a real impact on your community</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span>Discover opportunities you never knew existed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}