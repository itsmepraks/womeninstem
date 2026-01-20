import { Heart, Users, Lightbulb, Globe } from 'lucide-react';

export default function GetInvolved2() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">Volunteer Opportunities</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Heart className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Teaching & Mentoring</h3>
              <p className="text-sm leading-relaxed">
                Volunteer with Girls Who Code clubs, Hour of Code events, or after-school STEM programs. Mentor younger students,
                lead coding workshops, or tutor in math and science. Teaching others reinforces your own knowledge while inspiring
                the next generation of women in STEM.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Community Tech Support</h3>
              <p className="text-sm leading-relaxed">
                Help bridge the digital divide by volunteering at community centers, libraries, or senior centers to teach basic computer skills,
                set up devices, or troubleshoot technology issues. Organizations like Per Scholas and NPower train volunteers to provide
                technology education to underserved communities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Science Communication</h3>
              <p className="text-sm leading-relaxed">
                Volunteer at science museums, planetariums, or nature centers. Help with public outreach events, science demonstrations,
                or educational programs. Develop your ability to explain complex concepts in accessible ways while sharing your passion
                for science with diverse audiences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Globe className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Open Source Contribution</h3>
              <p className="text-sm leading-relaxed">
                Contribute to open-source projects on GitHub. Start with beginner-friendly issues labeled "good first issue" or join
                initiatives like Outreachy and Google Summer of Code. Gain real-world coding experience, collaborate with global developers,
                and give back to the software community.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 25 —</span>
        </div>
      </div>
    </div>
  );
}