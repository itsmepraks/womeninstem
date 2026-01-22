import React from 'react';
import { Users, Rocket, Star } from 'lucide-react';

export default function GetInvolved4() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Users className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Get Involved</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 27</div>

      {/* Content */}
      <div className="flex-1 space-y-6 font-serif text-gray-800">
        <h3 className="text-2xl font-bold text-amber-900 text-center mb-4">Start or Join a Club</h3>

        <p className="text-lg leading-relaxed text-center">
          Clubs are where lasting friendships form and ideas come to life. 
          Create a space where you and your peers can explore STEM together!
        </p>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-5 border-2 border-blue-300">
          <h4 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            Starting Your Own Club
          </h4>
          <ol className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-blue-600 min-w-[24px]">1.</span>
              <span><span className="font-semibold">Find your focus:</span> Coding? Robotics? Science research? Environmental action?</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600 min-w-[24px]">2.</span>
              <span><span className="font-semibold">Recruit members:</span> Start with friends, post flyers, use social media</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600 min-w-[24px]">3.</span>
              <span><span className="font-semibold">Find a faculty advisor:</span> Teachers can help with resources and guidance</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600 min-w-[24px]">4.</span>
              <span><span className="font-semibold">Plan activities:</span> Weekly meetings, workshops, guest speakers, projects</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600 min-w-[24px]">5.</span>
              <span><span className="font-semibold">Make it official:</span> Register with your school and apply for funding</span>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4 shadow-md">
            <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-600" />
              Popular Club Ideas
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <span className="font-semibold">Coding Club:</span> Learn languages together</li>
              <li>• <span className="font-semibold">Robotics Team:</span> Build and compete</li>
              <li>• <span className="font-semibold">Science Olympiad:</span> Prepare for competitions</li>
              <li>• <span className="font-semibold">Math Circle:</span> Solve challenging problems</li>
              <li>• <span className="font-semibold">Maker Space:</span> Create and tinker</li>
              <li>• <span className="font-semibold">Environmental Club:</span> STEM for sustainability</li>
            </ul>
          </div>

          <div className="bg-white/70 rounded-lg p-4 shadow-md">
            <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-green-600" />
              Existing Organizations
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <span className="font-semibold">Girls Who Code:</span> Start a chapter</li>
              <li>• <span className="font-semibold">FIRST Robotics:</span> Join a team</li>
              <li>• <span className="font-semibold">SkillsUSA:</span> Career & technical skills</li>
              <li>• <span className="font-semibold">TSA:</span> Technology Student Association</li>
              <li>• <span className="font-semibold">Science NHS:</span> Honor society chapter</li>
              <li>• <span className="font-semibold">NSBE:</span> National Society of Black Engineers</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-4 border border-pink-300">
          <p className="text-center text-pink-900 font-medium">
            💡 Tip: Partner with other clubs for joint events and expand your impact!
          </p>
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="text-center text-amber-600 text-2xl mt-4">❋ ❋ ❋</div>
    </div>
  );
}