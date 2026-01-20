import { Coffee, MessageCircle, Handshake, Sparkles } from 'lucide-react';

export default function GetInvolved5() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">Build Your Network</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Coffee className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Attend Conferences & Events</h3>
              <p className="text-sm leading-relaxed">
                Participate in conferences like Grace Hopper Celebration, SWE Annual Conference, TechCrunch Disrupt, or local meetups and tech talks.
                These events offer workshops, networking sessions, career fairs, and opportunities to meet professionals, recruiters, and peers.
                Many offer student scholarships or discounted tickets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <MessageCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Informational Interviews</h3>
              <p className="text-sm leading-relaxed">
                Reach out to professionals in roles or companies you're interested in and request informational interviews. Most people are
                happy to share their experiences and advice. Come prepared with thoughtful questions, be respectful of their time, and always
                follow up with a thank-you note. These conversations provide valuable insights and can lead to mentorship or job opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Handshake className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">LinkedIn & Professional Presence</h3>
              <p className="text-sm leading-relaxed">
                Build a strong LinkedIn profile showcasing your projects, skills, and experiences. Connect with classmates, professors, and
                professionals in your field. Share articles, comment on posts, and engage with content to increase visibility. Join LinkedIn
                groups for women in STEM and participate in discussions. A strong online presence opens doors to opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Alumni Networks</h3>
              <p className="text-sm leading-relaxed">
                Leverage your school's alumni network. Many universities have dedicated groups for women in STEM or specific departments.
                Alumni are often eager to help fellow graduates with career advice, job referrals, or mentorship. Attend alumni events,
                join alumni groups on LinkedIn, and don't hesitate to reach out for guidance or connections.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 28 —</span>
        </div>
      </div>
    </div>
  );
}