import Link from 'next/link';
import { 
  Rocket, 
  Sparkles, 
  Users, 
  Target, 
  GraduationCap, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Telescope,
  UserCheck,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-purple-400">STEM</span>
              <span className="text-amber-400">•</span>
              <span className="text-emerald-400">SPARK</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Igniting curiosity, one spark at a time.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              An interactive book experience empowering girls and women in STEM through
              engaging content, mentorship connections, and a supportive community.
            </p>

            <div className="flex flex-wrap gap-3 justify-center items-center text-sm">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <BookOpen className="w-4 h-4 text-purple-400" strokeWidth={2.5} />
                <span className="text-slate-200">Interactive Book</span>
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
                <span className="text-slate-200">Mentorship</span>
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Users className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                <span className="text-slate-200">Community</span>
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Target className="w-4 h-4 text-amber-400" strokeWidth={2.5} />
                <span className="text-slate-200">Achievement System</span>
              </span>
            </div>
          </div>

          {/* CTA Buttons - UPDATED to point to /read */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/read"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-purple-400 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" strokeWidth={2.5} />
              Start Reading
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-200 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" strokeWidth={2.5} />
              View Demo
            </Link>
          </div>

          {/* Status Badge */}
          <div className="pt-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-200">Interactive Book Now Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-purple-400">Explore Our Chapters</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Journey through our interactive book to discover resources, stories, and opportunities
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                title: 'Learning Resources',
                description: 'Curated tutorials, guides, and educational content for your STEM journey',
                chapter: 'Chapter 3',
              },
              {
                icon: <UserCheck className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-emerald-400',
                bgColor: 'bg-emerald-500/10',
                title: 'Success Stories',
                description: 'Inspiring stories from women who are making their mark in STEM',
                chapter: 'Chapter 4',
              },
              {
                icon: <Sparkles className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-blue-400',
                bgColor: 'bg-blue-500/10',
                title: 'Get Involved',
                description: 'Join our community, find mentors, and start your STEM adventure',
                chapter: 'Chapter 5',
              },
              {
                icon: <BookOpen className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-amber-400',
                bgColor: 'bg-amber-500/10',
                title: 'About STEM•SPARK',
                description: 'Learn about our mission, vision, and commitment to empowering women',
                chapter: 'Chapter 2',
              },
              {
                icon: <MessageCircle className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-pink-400',
                bgColor: 'bg-pink-500/10',
                title: 'Community Forum',
                description: 'Connect with peers, ask questions, and share your experiences',
                chapter: 'Coming Soon',
              },
              {
                icon: <Telescope className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-indigo-400',
                bgColor: 'bg-indigo-500/10',
                title: 'Career Pathways',
                description: 'Explore diverse STEM careers and find your perfect path',
                chapter: 'Coming Soon',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 space-y-4 group hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">{feature.chapter}</div>
                  <h3 className="font-display text-xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Join the Movement
            </h2>
            <p className="text-gray-400 text-lg">
              Be part of something extraordinary
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
                value: '32', 
                label: 'Interactive Pages',
                color: 'text-purple-400'
              },
              { 
                icon: <BookOpen className="w-6 h-6" strokeWidth={2.5} />,
                value: '6', 
                label: 'Chapters',
                color: 'text-emerald-400'
              },
              { 
                icon: <Award className="w-6 h-6" strokeWidth={2.5} />,
                value: '100+', 
                label: 'Resources',
                color: 'text-blue-400'
              },
              { 
                icon: <Zap className="w-6 h-6" strokeWidth={2.5} />,
                value: '∞', 
                label: 'Possibilities',
                color: 'text-amber-400'
              },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className={`inline-flex p-3 rounded-lg bg-white/5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-xl">
            <div className="inline-flex p-4 rounded-full bg-purple-500/20 mb-4">
              <Sparkles className="w-10 h-10 text-purple-400" strokeWidth={2} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Open the book and start exploring. Each page brings new knowledge, inspiration, 
              and opportunities to connect with a community of amazing women in STEM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/read"
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" strokeWidth={2.5} />
                Open the Book
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
