import { Users2, Calendar, Sparkles, Award } from 'lucide-react';

export default function GetInvolved3() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">Join STEM Clubs & Groups</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users2 className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">School & University Clubs</h3>
              <p className="text-sm leading-relaxed">
                Join or start clubs at your school: Computer Science Club, Robotics Team, Math Club, Science Olympiad, or Women in STEM organizations.
                These provide regular opportunities to pursue STEM interests, work on projects, attend competitions, and connect with like-minded peers.
                If your school doesn't have a club you're interested in, take the initiative to start one!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Calendar className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Professional Student Chapters</h3>
              <p className="text-sm leading-relaxed">
                Join student chapters of professional organizations: Society of Women Engineers (SWE), Association for Computing Machinery (ACM),
                Institute of Electrical and Electronics Engineers (IEEE), or American Chemical Society (ACS). These chapters offer networking,
                professional development workshops, industry connections, and leadership opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Online Communities</h3>
              <p className="text-sm leading-relaxed">
                Engage with virtual communities on Discord, Slack, and Reddit. Join servers like CS Career Questions, Women Who Code Slack channels,
                or subreddits like r/WomenInSTEM and r/girlsgonewired. Participate in discussions, ask questions, share resources, and connect
                with women in STEM worldwide. These communities offer 24/7 support and diverse perspectives.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Specialized Interest Groups</h3>
              <p className="text-sm leading-relaxed">
                Find groups focused on specific areas: AI/ML study groups, cybersecurity clubs, data science meetups, bioinformatics forums,
                or game development communities. These specialized groups allow you to dive deep into topics you're passionate about and
                connect with others who share your specific interests within the broader STEM field.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 26 —</span>
        </div>
      </div>
    </div>
  );
}