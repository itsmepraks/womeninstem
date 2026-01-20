import React from 'react';
import { Users, Heart, Link, Globe, Zap, Sparkles } from 'lucide-react';

const GetInvolved6: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 5: Get Involved
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            Join Our Community
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <Users className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                You're Not Alone
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              STEM•SPARK is more than just a resource—it's a growing community of passionate 
              women supporting each other on their STEM journeys. Together, we're breaking 
              barriers, celebrating achievements, and building a more inclusive future.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">Online Community</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Connect with other women in STEM from around the world. Share experiences, 
                    ask questions, and find support.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800 mb-1">💬 Discussion Forums</p>
                      <p className="text-xs text-gray-600">
                        Ask questions, share projects, and connect with peers
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800 mb-1">📅 Virtual Events</p>
                      <p className="text-xs text-gray-600">
                        Monthly webinars, workshops, and networking sessions
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800 mb-1">🎯 Study Groups</p>
                      <p className="text-xs text-gray-600">
                        Join or create groups focused on specific topics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Link className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">Stay Connected</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Follow us on social media for daily inspiration, opportunities, and updates.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-xl mb-1">📸</p>
                      <p className="text-xs font-semibold text-gray-800">Instagram</p>
                      <p className="text-xs text-gray-600">@stemspark</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-xl mb-1">🐦</p>
                      <p className="text-xs font-semibold text-gray-800">Twitter</p>
                      <p className="text-xs text-gray-600">@stemspark</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-xl mb-1">💼</p>
                      <p className="text-xs font-semibold text-gray-800">LinkedIn</p>
                      <p className="text-xs text-gray-600">STEM•SPARK</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <p className="text-xl mb-1">📺</p>
                      <p className="text-xs font-semibold text-gray-800">TikTok</p>
                      <p className="text-xs text-gray-600">@stemspark</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-pink-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">Get Exclusive Benefits</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Sign up for our newsletter and become a STEM•SPARK member:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-0.5">✓</span>
                      <span>Weekly newsletter with opportunities and resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-0.5">✓</span>
                      <span>Early access to events and programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-0.5">✓</span>
                      <span>Exclusive mentorship opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-0.5">✓</span>
                      <span>Member spotlight features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ready to Make an Impact?
              </h3>
              <p className="text-gray-700 mb-4">
                Your STEM journey doesn't have to be a solo adventure. Join thousands of other 
                women who are learning, growing, and leading together.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  🌐 Visit us at: <span className="text-purple-600">www.stemspark.org</span>
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  ✉️ Email: <span className="text-purple-600">hello@stemspark.org</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 29
        </div>
      </div>
    </div>
  );
};

export default GetInvolved6;