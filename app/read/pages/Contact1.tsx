import { Mail, MessageCircle, Github, Linkedin, Instagram, Globe } from 'lucide-react';

export default function Contact1() {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter VI: Contact</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Connect With Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="bg-white/60 p-6 rounded-lg text-center">
            <h3 className="font-serif font-semibold text-xl mb-3">We'd Love to Hear From You!</h3>
            <p className="text-sm leading-relaxed">
              Whether you have questions, want to share your STEM journey, need guidance, or want to collaborate,
              we're here to support you. STEM•SPARK is more than a platform—it's a community, and you're a vital part of it.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <Mail className="w-6 h-6 text-rose-900 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                <p className="text-sm text-rose-900/70">hello@stemspark.org</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <MessageCircle className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Join Our Discord</h4>
                <p className="text-sm text-rose-900/70">Connect with fellow STEM enthusiasts</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <Instagram className="w-6 h-6 text-pink-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Follow on Instagram</h4>
                <p className="text-sm text-rose-900/70">@stemspark_official</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-800 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Connect on LinkedIn</h4>
                <p className="text-sm text-rose-900/70">STEM•SPARK Community</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <Github className="w-6 h-6 text-gray-800 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">GitHub</h4>
                <p className="text-sm text-rose-900/70">Contribute to our open-source projects</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/60 p-4 rounded-lg hover:bg-white/80 transition-colors">
              <Globe className="w-6 h-6 text-emerald-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Visit Our Website</h4>
                <p className="text-sm text-rose-900/70">www.stemspark.org</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-100 to-amber-100 p-4 rounded-lg border border-rose-200">
            <h4 className="font-serif font-semibold text-center mb-2">Get Our Newsletter</h4>
            <p className="text-xs text-center text-rose-900/70">
              Stay updated with the latest opportunities, resources, and inspiring stories.
              Subscribe at stemspark.org/newsletter
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 30 —</span>
        </div>
      </div>
    </div>
  );
}