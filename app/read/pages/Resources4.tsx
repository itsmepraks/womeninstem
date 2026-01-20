import { Microscope, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function Resources4() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Research Opportunities</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Microscope className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Undergraduate Research Programs</h3>
              <p className="text-sm leading-relaxed">
                NSF REU (Research Experience for Undergraduates) sites across the nation offer paid summer research positions.
                Work alongside faculty and graduate students on cutting-edge projects while building your CV and research skills.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Laboratory Internships</h3>
              <p className="text-sm leading-relaxed">
                Major research institutions and national labs (Oak Ridge, Argonne, Lawrence Berkeley) offer internship programs
                for students. Gain hands-on experience with state-of-the-art equipment and contribute to meaningful scientific discovery.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Independent Study & Thesis Projects</h3>
              <p className="text-sm leading-relaxed">
                Pursue your own research interests through independent study courses or honors thesis projects. Develop expertise
                in your chosen field while working closely with a faculty mentor on original research questions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Industry Research Partnerships</h3>
              <p className="text-sm leading-relaxed">
                Tech companies like Google, Microsoft, IBM, and biotech firms offer research internships and co-op programs.
                Bridge academia and industry while tackling real-world problems and potentially securing future employment.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 13 —</span>
        </div>
      </div>
    </div>
  );
}