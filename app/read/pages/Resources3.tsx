import { GraduationCap, DollarSign, Award, Globe } from 'lucide-react';

export default function Resources3() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">STEM Scholarships & Funding</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <GraduationCap className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Merit-Based STEM Scholarships</h3>
              <p className="text-sm leading-relaxed">
                Discover prestigious scholarships for exceptional STEM students, including the Google Generation Scholarship,
                Microsoft Tuition Scholarship, and National Merit programs specifically for science and technology fields.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Award className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Women in STEM Scholarships</h3>
              <p className="text-sm leading-relaxed">
                Special funding opportunities designed to support women pursuing STEM degrees: Society of Women Engineers (SWE)
                scholarships, AAUW grants, and the Palantir Women in Technology Scholarship supporting the next generation of female leaders.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <DollarSign className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Research Grants & Fellowships</h3>
              <p className="text-sm leading-relaxed">
                Funding for undergraduate and graduate research including NSF REU programs, NASA Space Grant, and
                department-specific fellowships that provide stipends while you advance scientific knowledge.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Globe className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">International & Study Abroad Funding</h3>
              <p className="text-sm leading-relaxed">
                Resources for international students and study abroad programs in STEM, including Fulbright Science & Technology Award,
                Rhodes Scholarship, and country-specific programs promoting global scientific collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 12 —</span>
        </div>
      </div>
    </div>
  );
}