import React from 'react';
import { Sparkles, Heart, Rocket, Star, Award, Zap } from 'lucide-react';

const Contact2: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 6: Contact Us
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-3">
            Your Journey Begins Now
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Sparkles className="w-6 h-6" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur rounded-lg shadow-xl p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <Rocket className="w-8 h-8 text-purple-600" />
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              You've Reached the End... and the Beginning!
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Congratulations on completing STEM•SPARK! You've explored what STEM means, 
              discovered inspiring role models, found valuable resources, learned about 
              amazing opportunities, and connected with a supportive community.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 text-center">
              Your Next Steps
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">Take Action Today</p>
                  <p className="text-sm text-gray-700">
                    Choose one opportunity from this book and commit to it this week.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">Share Your Story</p>
                  <p className="text-sm text-gray-700">
                    Tell us about your STEM journey. Your story could inspire others!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">Join the Community</p>
                  <p className="text-sm text-gray-700">
                    Connect with other women in STEM at www.stemspark.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 p-6 rounded-lg border-2 border-purple-300 mb-6">
            <div className="text-center">
              <Sparkles className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <p className="text-lg font-serif font-bold text-gray-800 mb-3">
                "The future belongs to those who believe in the beauty of their dreams."
              </p>
              <p className="text-gray-600 mb-4">— Eleanor Roosevelt</p>
              <p className="text-gray-700 leading-relaxed">
                Every great scientist, engineer, and innovator started exactly where you are now—
                curious, passionate, and ready to make a difference. Your unique perspective, 
                creativity, and determination are exactly what the world of STEM needs.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-3 text-center">
              Remember These Key Messages
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>You belong in STEM.</strong> Your voice and perspective matter.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span><strong>Failure is part of learning.</strong> Every mistake is a step forward.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Community is strength.</strong> You don't have to do this alone.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Start where you are.</strong> Use what you have. Do what you can.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Your journey is unique.</strong> Don't compare yourself to others.</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-serif font-bold mb-3">
              The World Needs Your Brilliance
            </h3>
            <p className="mb-4">
              Thank you for being part of STEM•SPARK. We can't wait to see what you'll create, 
              discover, and achieve. Stay curious, stay passionate, and never stop learning.
            </p>
            <p className="text-xl font-bold">
              ✨ Go spark change! ✨
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 italic">
              Created with 💜 by the STEM•SPARK team
            </p>
            <p className="text-sm text-gray-600 italic">
              © 2026 STEM•SPARK Initiative | www.stemspark.org
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 31 | The End
        </div>
      </div>
    </div>
  );
};

export default Contact2;