/**
 * Sound utility functions for page-turning effects
 */

export const SOUND_URLS = {
  pageTurn: '/sounds/page-turn.mp3',
  pageFlip: '/sounds/page-flip.mp3',
  bookmark: '/sounds/bookmark.mp3',
  openBook: '/sounds/open-book.mp3',
  closeBook: '/sounds/close-book.mp3',
};

export class SoundManager {
  private static instance: SoundManager;
  private sounds: Map<string, HTMLAudioElement>;
  private enabled: boolean;

  private constructor() {
    this.sounds = new Map();
    this.enabled = true;
  }

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  preloadSounds() {
    if (typeof window === 'undefined') return;

    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      const audio = new Audio(url);
      audio.preload = 'auto';
      audio.volume = 0.3; // Set default volume to 30%
      this.sounds.set(key, audio);
    });
  }

  play(soundKey: keyof typeof SOUND_URLS) {
    if (!this.enabled || typeof window === 'undefined') return;

    const sound = this.sounds.get(soundKey);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch((error) => {
        console.warn('Failed to play sound:', error);
      });
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  setVolume(volume: number) {
    this.sounds.forEach((sound) => {
      sound.volume = Math.max(0, Math.min(1, volume));
    });
  }
}

// Export singleton instance
export const soundManager = SoundManager.getInstance();
