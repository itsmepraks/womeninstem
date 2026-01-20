import { Megaphone, Users, BookOpen, Target } from 'lucide-react';

export default function GetInvolved4() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">Advocacy & Awareness</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Megaphone className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Raise Awareness</h3>
              <p className="text-sm leading-relaxed">
                Share your STEM journey on social media, start a blog or YouTube channel about your learning experiences, or speak at
                school assemblies and community events. Your story can inspire others and help break down stereotypes about who belongs in STEM.
                Use hashtags like #WomenInSTEM, #GirlsWhoCode, and #STEMinist to connect with broader movements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Campus & Workplace Advocacy</h3>
              <p className="text-sm leading-relaxed">
                Advocate for inclusive policies, equitable resource allocation, and support systems for women in STEM at your institution.
                Join or form diversity committees, participate in policy discussions, propose initiatives like inclusive hiring practices
                or mentorship programs, and work with administration to create change from within.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <BookOpen className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Educational Outreach</h3>
              <p className="text-sm leading-relaxed">
                Partner with local schools to organize STEM days, career panels, or hands-on workshops. Work with organizations that promote
                STEM education in underserved communities. Create and share educational content that makes STEM accessible and exciting for
                younger students, especially girls who might not see themselves represented in these fields.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Target className="w-6 h-6 text-rose-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Policy & Systemic Change</h3>
              <p className="text-sm leading-relaxed">
                Engage with policy issues affecting women in STEM. Support organizations like AAUW and National Center for Women & Information Technology
                that advocate for legislative change. Write to representatives about STEM education funding, equal pay legislation, and policies
                supporting women in science and technology. Systemic change requires sustained advocacy at all levels.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 27 —</span>
        </div>
      </div>
    </div>
  );
}