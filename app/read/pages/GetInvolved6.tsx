import { Rocket, Heart, Users, Star } from 'lucide-react';

export default function GetInvolved6() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">Take Action Today</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg border-2 border-emerald-200">
            <div className="text-center mb-4">
              <Rocket className="w-12 h-12 text-emerald-900 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-2xl">Your Next Steps</h3>
            </div>
            <p className="text-sm leading-relaxed text-center mb-4">
              Getting involved in the STEM community doesn't require a grand gesture. Start small, stay consistent, and watch
              your impact grow. Every connection made, every person mentored, and every challenge attempted contributes to
              building a more inclusive and vibrant STEM ecosystem.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-6 h-6 text-amber-600" />
              <h3 className="font-serif font-semibold text-lg">Choose One Thing This Week</h3>
            </div>
            <ul className="text-sm space-y-2 ml-4">
              <li>✓ Sign up for one online course or coding challenge</li>
              <li>✓ Attend one virtual meetup or webinar</li>
              <li>✓ Join one Discord server or online community</li>
              <li>✓ Reach out to one person for an informational interview</li>
              <li>✓ Volunteer for one hour with a local STEM program</li>
              <li>✓ Register for one upcoming hackathon or competition</li>
            </ul>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-rose-600" />
              <h3 className="font-serif font-semibold text-lg">Build Your Support System</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Find your people—whether that's a study group, a coding buddy, an online community, or a mentor. Having a support system
              makes challenges more manageable, celebrates your wins, and reminds you that you're not alone on this journey.
              Reach out, be vulnerable, and invest in relationships that uplift and inspire you.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-700" />
              <h3 className="font-serif font-semibold text-lg">Give Back as You Grow</h3>
            </div>
            <p className="text-sm leading-relaxed">
              As you learn and grow, look for opportunities to help others. Answer questions in forums, share resources with peers,
              mentor someone just starting their journey, or contribute to projects that support beginners. The STEM community thrives
              when we lift each other up. Your unique perspective and experiences are valuable—share them.
            </p>
          </div>

          <div className="mt-6 text-center bg-gradient-to-r from-emerald-900/10 to-teal-900/10 p-6 rounded-lg border border-emerald-200">
            <p className="font-serif text-lg font-semibold text-emerald-950 mb-2">
              The STEM community is waiting for you.
            </p>
            <p className="text-sm text-emerald-900/80">
              Every expert was once a beginner. Every leader once took their first step. Every breakthrough started with curiosity.
            </p>
            <p className="text-base mt-4 text-emerald-950 font-semibold">
              Your time is now. Let's build the future together. ✨
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 29 —</span>
        </div>
      </div>
    </div>
  );
}