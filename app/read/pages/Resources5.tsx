import { Briefcase, Target, Users2, Sparkles } from 'lucide-react';

export default function Resources5() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Professional Development</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Briefcase className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Career Development Workshops</h3>
              <p className="text-sm leading-relaxed">
                Attend workshops on resume building, technical interviews, salary negotiation, and career planning specifically
                tailored for STEM professionals. Learn from industry experts and HR professionals about navigating your career path.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Target className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Leadership Training Programs</h3>
              <p className="text-sm leading-relaxed">
                Develop your leadership skills through programs like the Society of Women Engineers Leadership Institute,
                Grace Hopper Leadership Academy, and university-based STEM leadership workshops designed to prepare you for management roles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Networking & Conference Opportunities</h3>
              <p className="text-sm leading-relaxed">
                Connect with professionals at conferences like Grace Hopper Celebration, Society of Women Engineers Annual Conference,
                and field-specific symposia. Build your professional network and stay current with industry trends.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Soft Skills & Communication</h3>
              <p className="text-sm leading-relaxed">
                Master essential soft skills through training in public speaking, scientific communication, teamwork, and project management.
                These complement your technical expertise and are crucial for career advancement in any STEM field.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 14 —</span>
        </div>
      </div>
    </div>
  );
}