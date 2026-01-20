import { Rocket, Sparkles, Brain, Globe } from 'lucide-react';

export default function Stories5() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Engineering Excellence</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="w-6 h-6 text-purple-900" />
              <h3 className="font-serif font-semibold text-xl">Emily Roebling</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">Chief Engineer of Brooklyn Bridge</p>
            <p className="text-sm leading-relaxed">
              When her husband fell ill during construction of the Brooklyn Bridge in the 1870s, Emily Warren Roebling stepped in to oversee
              one of the greatest engineering projects of the era. She studied higher mathematics, catenary curves, material strength, and bridge
              specifications to effectively manage the construction. Her dedication and technical expertise were crucial to completing this iconic
              structure, making her one of the first female field engineers in America.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-6 h-6 text-pink-700" />
              <h3 className="font-serif font-semibold text-xl">Dr. Shirley Ann Jackson</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">First African American Woman to Earn MIT Physics PhD</p>
            <p className="text-sm leading-relaxed">
              Dr. Shirley Ann Jackson's research in theoretical physics has led to breakthroughs enabling caller ID, call waiting, and fiber optic cables.
              As president of Rensselaer Polytechnic Institute, she has been a transformative leader in higher education. She served on the
              President's Intelligence Advisory Board and continues to advocate for diversity in STEM, inspiring generations of scientists and engineers.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-blue-700" />
              <h3 className="font-serif font-semibold text-xl">Ellen Ochoa</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">First Hispanic Woman in Space & Former NASA Director</p>
            <p className="text-sm leading-relaxed">
              Dr. Ellen Ochoa flew four space shuttle missions, logging nearly 1,000 hours in space. She later served as Director of NASA's
              Johnson Space Center, becoming the first Hispanic director and only the second female director of the center. An accomplished
              engineer and advocate for STEM education, she inspires young people to pursue careers in science and engineering.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 22 —</span>
        </div>
      </div>
    </div>
  );
}