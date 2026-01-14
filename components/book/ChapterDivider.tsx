import React from 'react';
import { cn } from '@/lib/utils';

export interface ChapterDividerProps {
  chapterNumber?: number | string;
  chapterTitle: string;
  subtitle?: string;
  ornamentStyle?: 'flourish' | 'simple' | 'vintage' | 'modern';
  className?: string;
}

/**
 * ChapterDivider component - Elegant divider for chapter transitions
 * 
 * @example
 * ```tsx
 * <ChapterDivider 
 *   chapterNumber={1}
 *   chapterTitle="The Beginning"
 *   subtitle="Where it all started"
 *   ornamentStyle="flourish"
 * />
 * ```
 */
export default function ChapterDivider({
  chapterNumber,
  chapterTitle,
  subtitle,
  ornamentStyle = 'flourish',
  className,
}: ChapterDividerProps) {
  const ornaments = {
    flourish: '❦',
    simple: '◆',
    vintage: '✦',
    modern: '●',
  };

  return (
    <div className={cn(
      'chapter-divider flex flex-col items-center justify-center',
      'min-h-[400px] py-16 px-8 text-center',
      className
    )}>
      {/* Top Ornament */}
      <div className="text-4xl md:text-5xl text-gold-500 mb-8 animate-float-gentle">
        {ornaments[ornamentStyle]}
      </div>

      {/* Chapter Number */}
      {chapterNumber && (
        <div className="chapter-number mb-4">
          Chapter {chapterNumber}
        </div>
      )}

      {/* Chapter Title */}
      <h1 className="chapter-heading max-w-2xl">
        {chapterTitle}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl md:text-2xl text-ink-light font-serif italic mt-6 max-w-xl">
          {subtitle}
        </p>
      )}

      {/* Decorative Line */}
      <div className="mt-8 w-32 h-px bg-gradient-to-r from-transparent via-sepia-400 to-transparent" />

      {/* Bottom Ornament */}
      <div className="text-4xl md:text-5xl text-gold-500 mt-8 animate-float-gentle" style={{ animationDelay: '1s' }}>
        {ornaments[ornamentStyle]}
      </div>
    </div>
  );
}

/**
 * SectionDivider - Smaller divider for section breaks within chapters
 */
export function SectionDivider({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('section-divider py-8 flex justify-center', className)}>
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-sepia-400" />
        <div className="text-2xl text-sepia-500">❦</div>
        <div className="w-16 h-px bg-sepia-400" />
      </div>
    </div>
  );
}

/**
 * EndOfChapter - End marker for chapters
 */
export function EndOfChapter({
  nextChapterTitle,
  className,
}: {
  nextChapterTitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('end-of-chapter py-12 text-center', className)}>
      <div className="flex justify-center items-center gap-3 mb-6">
        <div className="w-12 h-px bg-sepia-400" />
        <div className="text-2xl text-sepia-500">✦ ✦ ✦</div>
        <div className="w-12 h-px bg-sepia-400" />
      </div>
      
      <p className="font-serif text-lg text-ink-light italic">
        End of Chapter
      </p>

      {nextChapterTitle && (
        <p className="font-serif text-base text-ink-light/60 mt-4">
          Next: <span className="font-semibold">{nextChapterTitle}</span>
        </p>
      )}
    </div>
  );
}
