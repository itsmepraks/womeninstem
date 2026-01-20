/**
 * About STEM•SPARK Page 3 - Page 6
 * Our Vision
 */
import React from 'react';
import { Telescope, Globe, Sparkles } from 'lucide-react';

export default function AboutStem3() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Our Vision</h2>
      </div>

      {/* Vision Statement */}
      <div className="space-y-4">
        <p className="body-text">
          We envision a world where women are not just participants in STEM fields, but 
          leaders, innovators, and changemakers. A world where every girl grows up knowing 
          that her ideas matter, her contributions are valued, and her potential is limitless.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 p-5 rounded-page border border-burgundy-200">
            <Telescope className="w-10 h-10 text-burgundy-600 mb-3" />
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">
              Looking Forward
            </h3>
            <p className="text-sm text-ink-light">
              By 2030, we aim to have empowered 100,000 women and girls to pursue and 
              excel in STEM careers through our platform.
            </p>
          </div>

          <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-5 rounded-page border border-forest-200">
            <Globe className="w-10 h-10 text-forest-600 mb-3" />
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">
              Global Impact
            </h3>
            <p className="text-sm text-ink-light">
              We're building a worldwide community that transcends borders, connecting 
              women across continents through shared passion for STEM.
            </p>
          </div>
        </div>

        <p className="body-text">
          Through this interactive book and our comprehensive platform, we're not just 
          teaching STEM concepts—we're nurturing confidence, building networks, and 
          creating opportunities that will shape the future of technology and innovation.
        </p>

        {/* Aspirational Quote */}
        <div className="bg-gold-50 p-6 rounded-page border-2 border-gold-200 mt-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
            <p className="font-serif text-lg italic text-ink leading-relaxed">
              "Our vision is bold, our mission is clear, and our commitment is unwavering. 
              Together, we're writing a new chapter in the story of women in STEM."
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center mt-6 pt-4 border-t border-sepia-200">
        <p className="page-number-ornate">6</p>
      </div>
    </div>
  );
}
