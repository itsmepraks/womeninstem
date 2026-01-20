import { Heart, Users, Compass, MessageCircle } from 'lucide-react';

export default function Resources7() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Mentorship Programs</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Heart className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Finding Your Mentor</h3>
              <p className="text-sm leading-relaxed">
                A mentor can be transformative in your STEM journey. Look for mentors through professional organizations like
                Society of Women Engineers, AnitaB.org, or your university's alumni network. Seek someone who has walked a path
                you admire and is willing to share their experiences and guidance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Formal Mentorship Programs</h3>
              <p className="text-sm leading-relaxed">
                Join structured programs that match mentees with experienced professionals: Million Women Mentors (MWM),
                ChickTech mentorship, Girls Who Code alumni mentorship, and company-sponsored programs at major tech firms.
                These provide framework and accountability for meaningful mentoring relationships.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Compass className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Peer Mentorship</h3>
              <p className="text-sm leading-relaxed">
                Don't underestimate the power of peer mentorship. Study groups, coding partners, and cohort connections provide
                mutual support and shared learning. Form study circles, join hackathon teams, or create accountability groups
                where you can learn together and support each other's growth.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <MessageCircle className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Becoming a Mentor</h3>
              <p className="text-sm leading-relaxed">
                As you progress in your journey, consider mentoring others. Teaching reinforces your own knowledge and gives back
                to the community. Volunteer with programs like Girls Who Code, FIRST Robotics, or your local schools to inspire
                the next generation of women in STEM.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 16 —</span>
        </div>
      </div>
    </div>
  );
}