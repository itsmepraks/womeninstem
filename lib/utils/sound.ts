/**
 * Sound utilities for page-turning effects
 * Stub implementation to prevent build errors
 */

// This is a stub implementation to prevent build errors
// Full implementation will be added when book redesign is merged

export const SOUND_URLS = {
  pageTurn: '/sounds/page-turn.mp3',
  pageFlip: '/sounds/page-flip.mp3',
  bookmark: '/sounds/bookmark.mp3',
  openBook: '/sounds/open-book.mp3',
  closeBook: '/sounds/close-book.mp3',
};

export class SoundManager {
  private static instance: SoundManager;
  private enabled: boolean = false;

  private constructor() {}

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  preloadSounds() {
    // Stub implementation
  }

  play(soundKey: keyof typeof SOUND_URLS) {
    // Stub implementation
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  setVolume(volume: number) {
    // Stub implementation
  }
}

export const soundManager = SoundManager.getInstance();
