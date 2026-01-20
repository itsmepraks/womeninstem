import { Star, Sparkles, Heart, Rocket } from 'lucide-react';

export default function Stories1() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Trailblazers in Tech</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-6 h-6 text-purple-900" />
              <h3 className="font-serif font-semibold text-xl">Dr. Mae Jemison</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">First African American Woman in Space</p>
            <p className="text-sm leading-relaxed">
              A chemical engineer, physician, and NASA astronaut, Dr. Jemison served as a mission specialist aboard the Space Shuttle Endeavour in 1992.
              Before joining NASA, she served in the Peace Corps in West Africa. After retiring from NASA, she founded the Jemison Group,
              focusing on developing technologies for everyday life, and currently leads 100 Year Starship, working to ensure human travel
              beyond our solar system becomes possible within the next century.
            </p>
            <div className="mt-3 text-xs italic text-purple-900/70">
              "Never be limited by other people's limited imaginations."
            </div>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-pink-700" />
              <h3 className="font-serif font-semibold text-xl">Katherine Johnson</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">NASA Mathematician & Space Pioneer</p>
            <p className="text-sm leading-relaxed">
              Her precise calculations of orbital mechanics were critical to the success of early U.S. spaceflight missions, including
              John Glenn's historic orbit around Earth and the Apollo 11 moon landing. Despite facing discrimination as an African American
              woman in the 1950s and 60s, her brilliance in mathematics became indispensable to NASA's space program, as celebrated in
              the book and film <em>Hidden Figures</em>.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 18 —</span>
        </div>
      </div>
    </div>
  );
}