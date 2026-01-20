import React from 'react';
import { Megaphone, TrendingUp, FileText, Users, Award, MessageCircle } from 'lucide-react';

const GetInvolved5: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            Advocacy & Outreach
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Megaphone className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                Amplify Your Voice
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advocacy is about using your voice and platform to create positive change. As a 
              woman in STEM, you have unique insights into the challenges and opportunities in 
              the field. Your advocacy can help break down barriers for future generations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Share Your Story</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Personal stories are powerful tools for change. Your experience can inspire 
                    and encourage others.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Write blog posts about your STEM journey</li>
                    <li>• Speak at school assemblies or career days</li>
                    <li>• Share on social media with #WomenInSTEM</li>
                    <li>• Participate in panel discussions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Raise Awareness</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Educate your community about the importance of diversity in STEM.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Create informative posters and infographics</li>
                    <li>• Organize workshops on unconscious bias</li>
                    <li>• Start social media campaigns</li>
                    <li>• Write articles for school newspapers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-pink-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Build Networks</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Connect with organizations working towards gender equity in STEM.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Join professional organizations (SWE, AWIS, IEEE WIE)</li>
                    <li>• Attend conferences and networking events</li>
                    <li>• Connect with local STEM advocacy groups</li>
                    <li>• Collaborate with like-minded advocates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-orange-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Take Action</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Move beyond awareness to create tangible change in your community.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advocate for STEM programs in your school</li>
                    <li>• Work with administration to support diversity initiatives</li>
                    <li>• Petition for updated, inclusive curricula</li>
                    <li>• Partner with local businesses for STEM resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-3">
              Key Advocacy Topics
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded text-center text-sm font-semibold text-gray-800">
                📚 Equal Access to STEM Education
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded text-center text-sm font-semibold text-gray-800">
                💼 Workplace Gender Equity
              </div>
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-2 rounded text-center text-sm font-semibold text-gray-800">
                🎓 Scholarships & Funding
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-2 rounded text-center text-sm font-semibold text-gray-800">
                🌍 Representation in Media
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-lg border-l-4 border-purple-600">
            <p className="text-gray-800 font-semibold mb-2">
              "Never doubt that a small group of thoughtful, committed citizens can change 
              the world; indeed, it's the only thing that ever has."
            </p>
            <p className="text-gray-600 text-sm">— Margaret Mead, Cultural Anthropologist</p>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 28
        </div>
      </div>
    </div>
  );
};

export default GetInvolved5;