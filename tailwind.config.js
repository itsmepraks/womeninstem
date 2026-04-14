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
          body: '#5c4636',
          secondary: '#7a5e48',
          muted: '#94704f',
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
        'heading': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'xs': ['0.8125rem', { lineHeight: '1.6' }],
        'sm': ['0.9375rem', { lineHeight: '1.6' }],
        'label': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }],
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
        'blob-drift': 'blobDrift 20s ease-in-out infinite',
      },
      keyframes: {
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
