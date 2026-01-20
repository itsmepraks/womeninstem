/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // CSS Variable-based colors for theme switching
        'bg-primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
        
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-tertiary': 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        
        'accent-burgundy': 'rgb(var(--color-accent-burgundy) / <alpha-value>)',
        'accent-gold': 'rgb(var(--color-accent-gold) / <alpha-value>)',
        'accent-forest': 'rgb(var(--color-accent-forest) / <alpha-value>)',
        'accent-sepia': 'rgb(var(--color-accent-sepia) / <alpha-value>)',
        
        // Legacy color palette (kept for existing components)
        'parchment': {
          DEFAULT: '#f4f1e8',
          light: '#faf8f3',
          dark: '#e8e3d3',
        },
        'burgundy': {
          600: '#c92e54',
          700: '#a82145',
        },
        'gold': {
          500: '#f59009',
        },
        'sepia': {
          300: '#ddbfa0',
          400: '#d1a67d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'book': '0 4px 6px -1px rgb(var(--shadow-color) / calc(var(--shadow-opacity) * 0.6))',
        'book-lg': '0 10px 15px -3px rgb(var(--shadow-color) / var(--shadow-opacity))',
        'book-xl': '0 20px 25px -5px rgb(var(--shadow-color) / var(--shadow-opacity))',
      },
      borderRadius: {
        'book': '0.25rem',
        'page': '0.5rem',
      },
    },
  },
  plugins: [],
};
