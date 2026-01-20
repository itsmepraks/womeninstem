import { Trophy, Code, Users, Zap } from 'lucide-react';

export default function GetInvolved1() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-emerald-900/10 rounded-full mb-3">
            <span className="text-emerald-900 font-serif text-sm">Chapter V: Get Involved</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-2">STEM Competitions</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-900 to-teal-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-emerald-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Trophy className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Hackathons</h3>
              <p className="text-sm leading-relaxed">
                Join hackathons like Major League Hacking (MLH) events, women-focused hackathons like TechTogether and Pearl Hacks,
                or company-sponsored events at Google, Microsoft, and Meta. Build projects in 24-48 hours, collaborate with teammates,
                learn new technologies, and potentially win prizes while expanding your portfolio and network.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Code className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Coding Competitions</h3>
              <p className="text-sm leading-relaxed">
                Test your programming skills in competitions like Google Code Jam, Facebook Hacker Cup, Advent of Code, and LeetCode contests.
                These challenges sharpen your algorithmic thinking, prepare you for technical interviews, and connect you with a global
                community of programmers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Users className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Science Fairs & Research Competitions</h3>
              <p className="text-sm leading-relaxed">
                Participate in prestigious competitions like the Regeneron Science Talent Search, International Science and Engineering Fair (ISEF),
                or Google Science Fair. Present original research, compete for scholarships, and gain recognition for your scientific work.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Robotics Competitions</h3>
              <p className="text-sm leading-relaxed">
                Join FIRST Robotics Competition, VEX Robotics, or RoboCup teams. Design, build, and program robots to compete in challenges
                that require engineering skills, teamwork, and creative problem-solving. These competitions offer hands-on experience with
                mechanical, electrical, and software engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-emerald-900/60 font-serif text-sm">— 24 —</span>
        </div>
      </div>
    </div>
  );
}