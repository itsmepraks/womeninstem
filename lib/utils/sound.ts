/**
 * Complete sound utility system with preloading and volume control
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
  private volume: number;

  private constructor() {
    this.sounds = new Map();
    this.enabled = false;
    this.volume = 0.3;
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
      try {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.volume = this.volume;
        // Don't actually load the file if it doesn't exist
        audio.addEventListener('error', () => {
          console.warn(`Sound file not found: ${url}`);
        });
        audio.src = url;
        this.sounds.set(key, audio);
      } catch (error) {
        console.warn(`Failed to preload sound: ${key}`, error);
      }
    });
  }

  play(soundKey: keyof typeof SOUND_URLS) {
    if (!this.enabled || typeof window === 'undefined') return;

    const sound = this.sounds.get(soundKey);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch((error) => {
        // Silently fail - user interaction may be required for audio
        console.debug('Audio play prevented:', error.message);
      });
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach((sound) => {
      sound.volume = this.volume;
    });
  }

  getVolume(): number {
    return this.volume;
  }

  stopAll() {
    this.sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
}

// Export singleton instance
export const soundManager = SoundManager.getInstance();
