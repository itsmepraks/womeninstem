/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary black/white palette
        'obsidian': {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Glass accents
        'frost': {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.15)',
          strong: 'rgba(255, 255, 255, 0.25)',
        },
        // Subtle accent for highlights
        'silver': {
          DEFAULT: '#c0c0c0',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'book-shadow': 'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.3) 100%)',
        'page-fold': 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 5%)',
      },
      animation: {
        'page-flip-forward': 'pageFlipForward 0.6s ease-in-out forwards',
        'page-flip-backward': 'pageFlipBackward 0.6s ease-in-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        pageFlipForward: {
          '0%': { 
            transform: 'perspective(2000px) rotateY(0deg)',
            transformOrigin: 'left center',
          },
          '100%': { 
            transform: 'perspective(2000px) rotateY(-180deg)',
            transformOrigin: 'left center',
          },
        },
        pageFlipBackward: {
          '0%': { 
            transform: 'perspective(2000px) rotateY(-180deg)',
            transformOrigin: 'left center',
          },
          '100%': { 
            transform: 'perspective(2000px) rotateY(0deg)',
            transformOrigin: 'left center',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4)',
        'glass-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'book': '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'book-hover': '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'page': '2px 0 8px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 30px rgba(255, 255, 255, 0.1)',
        'glow-strong': '0 0 50px rgba(255, 255, 255, 0.2)',
      },
      borderRadius: {
        'glass': '1rem',
        'book': '0.25rem',
        'page': '0.125rem 0.5rem 0.5rem 0.125rem',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-strong': '40px',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      letterSpacing: {
        'elegant': '0.05em',
        'wide-elegant': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};
