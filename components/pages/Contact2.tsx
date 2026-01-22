import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Contact2() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-8 flex flex-col">
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-amber-600">
        <Heart className="w-8 h-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-amber-900">Contact</h2>
      </div>

      {/* Page Number */}
      <div className="absolute top-8 right-8 text-amber-800 font-serif text-sm">Page 31</div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center space-y-8 font-serif text-gray-800">
        <div className="text-center">
          <Sparkles className="w-20 h-20 text-amber-600 mx-auto mb-6 animate-pulse" />
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-4">
            Thank You for Reading!
          </h3>
        </div>

        <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 rounded-lg p-8 border-2 border-purple-400 shadow-xl">
          <p className="text-xl leading-relaxed text-center text-gray-800 mb-4">
            This interactive book was created with <span className="text-rose-600 font-bold">❤️</span> to inspire 
            and empower women in STEM. Every page represents countless hours of research, 
            design, and dedication to making STEM education accessible to everyone.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-700">
            We hope you found inspiration, resources, and motivation to pursue your dreams in science, 
            technology, engineering, and mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-amber-900 mb-2">Share</h4>
            <p className="text-sm text-gray-700">
              Help others discover this resource. Share it with friends, classmates, and fellow STEM enthusiasts!
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Heart className="w-10 h-10 text-rose-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-rose-900 mb-2">Support</h4>
            <p className="text-sm text-gray-700">
              Star this project on GitHub and contribute to making STEM education better for everyone.
            </p>
          </div>

          <div className="bg-white/70 rounded-lg p-5 shadow-md text-center">
            <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-purple-900 mb-2">Connect</h4>
            <p className="text-sm text-gray-700">
              Stay in touch! Follow our journey and be part of the STEM•SPARK community.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-6 border-2 border-amber-400 shadow-lg">
          <p className="text-2xl font-bold text-center text-amber-900 mb-4">
            "The future belongs to those who believe in the beauty of their dreams."
          </p>
          <p className="text-center text-gray-700 italic">— Eleanor Roosevelt</p>
        </div>

        <div className="text-center space-y-3">
          <p className="text-xl text-gray-800">
            Created by <span className="font-bold text-purple-900">Prakriti Bista</span>
          </p>
          <p className="text-lg text-amber-700">
            Open Source • Built with Next.js & Love ✨
          </p>
          <p className="text-sm text-gray-600">
            © 2025 STEM•SPARK • All Rights Reserved
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg">
            🚀 Your STEM Journey Starts Now! 🚀
          </div>
        </div>
      </div>

      {/* Ornamental ending */}
      <div className="text-center text-amber-600 text-3xl mt-6">✦ ✦ ✦</div>
    </div>
  );
}