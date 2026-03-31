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
        bg: {
          primary: '#fdf8f3',
          warm: '#fceee3',
          deep: '#f7e4d4',
        },
        text: {
          heading: '#3d2518',
          body: '#6b5344',
          secondary: '#8b6e5a',
          muted: '#b8946c',
        },
        accent: {
          primary: '#c47a52',
          secondary: '#e8976b',
          gold: '#f4c87a',
        },
        surface: {
          white: '#ffffff',
          dark: '#3d2518',
          'dark-text': '#fceee3',
        },
        blob: {
          coral: 'rgba(232,151,107,0.07)',
          gold: 'rgba(244,200,122,0.05)',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.08', fontWeight: '300' }],
        'display': ['2rem', { lineHeight: '1.15', fontWeight: '500' }],
        'heading': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.125em', fontWeight: '400' }],
      },
      borderRadius: {
        'organic': '1.25rem',
        'organic-lg': '1.375rem',
        'pill': '2rem',
      },
      boxShadow: {
        'card': '0 12px 40px rgba(92,58,46,0.06)',
        'card-sm': '0 2px 12px rgba(92,58,46,0.03)',
        'card-hover': '0 20px 60px rgba(92,58,46,0.1)',
        'dark-card': '0 12px 40px rgba(92,58,46,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'blob-drift': 'blobDrift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blobDrift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(15px, -10px) rotate(3deg)' },
          '66%': { transform: 'translate(-10px, 8px) rotate(-2deg)' },
        },
      },
    },
  },
  plugins: [],
};
