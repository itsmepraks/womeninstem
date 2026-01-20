import { Building, Globe, Award, Sparkles } from 'lucide-react';

export default function Resources8() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Professional Organizations</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Building className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Society of Women Engineers (SWE)</h3>
              <p className="text-sm leading-relaxed">
                The largest advocacy organization for women engineers and those in technically related fields. SWE provides networking,
                scholarships, career development, and hosts the annual WE conference bringing together thousands of women in engineering.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Globe className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">AnitaB.org</h3>
              <p className="text-sm leading-relaxed">
                Home of the Grace Hopper Celebration, the world's largest gathering of women technologists. AnitaB.org works to
                advance women in computing through communities, programs, and partnerships that support recruitment, retention, and advancement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Award className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Association for Women in Science (AWIS)</h3>
              <p className="text-sm leading-relaxed">
                Dedicated to achieving equity and full participation of women in all disciplines and across all employment sectors.
                AWIS offers mentorship, advocacy, networking, and professional development resources for women scientists at all career stages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Field-Specific Organizations</h3>
              <p className="text-sm leading-relaxed">
                Join organizations in your specific discipline: Women in Machine Learning (WiML), Association for Women in Mathematics (AWM),
                Women in Bio, American Medical Women's Association (AMWA), and many others. These provide targeted resources and communities
                for your particular field of study.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 17 —</span>
        </div>
      </div>
    </div>
  );
}