import React from 'react';
import { Mail, MapPin, Phone, Globe, Send, MessageSquare } from 'lucide-react';

const Contact1: React.FC = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-3">
            Chapter 6: Contact Us
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-3">
            Let's Connect
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <div className="h-px w-12 bg-purple-600"></div>
            <MessageSquare className="w-5 h-5" />
            <div className="h-px w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-6 mb-6 border border-purple-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Send className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                We'd Love to Hear From You
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Have questions, suggestions, or want to share your STEM story? We're here to 
              support you on your journey. Reach out to us through any of the channels below!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    For general inquiries, partnerships, or feedback:
                  </p>
                  <p className="text-purple-600 font-semibold">hello@stemspark.org</p>
                  <p className="text-sm text-gray-600 mt-2">
                    We typically respond within 24-48 hours!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Visit Our Website</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Explore more resources, blog posts, and community features:
                  </p>
                  <p className="text-blue-600 font-semibold">www.stemspark.org</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Updated weekly with new content and opportunities!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Talk to our team (Monday-Friday, 9AM-5PM EST):
                  </p>
                  <p className="text-pink-600 font-semibold">1-800-STEM-NOW</p>
                  <p className="text-sm text-gray-600 mt-2">
                    (1-800-783-6669)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Mailing Address</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Send us mail, artwork, or project showcases:
                  </p>
                  <div className="text-gray-800 font-medium text-sm">
                    <p>STEM•SPARK Initiative</p>
                    <p>123 Innovation Drive, Suite 400</p>
                    <p>Tech Valley, CA 94025</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-3 text-center">
              Follow Us on Social Media
            </h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">📸</div>
                <p className="text-xs font-semibold text-gray-800">Instagram</p>
                <p className="text-xs text-gray-600">@stemspark</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🐦</div>
                <p className="text-xs font-semibold text-gray-800">Twitter</p>
                <p className="text-xs text-gray-600">@stemspark</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">💼</div>
                <p className="text-xs font-semibold text-gray-800">LinkedIn</p>
                <p className="text-xs text-gray-600">STEM•SPARK</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">📺</div>
                <p className="text-xs font-semibold text-gray-800">TikTok</p>
                <p className="text-xs text-gray-600">@stemspark</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-purple-800">💌 Newsletter:</strong> Sign up at our website 
              to receive weekly STEM opportunities, inspiring stories, and exclusive resources!
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="text-center text-gray-500 text-sm font-serif">
          Page 30
        </div>
      </div>
    </div>
  );
};

export default Contact1;