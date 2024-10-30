/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'desktop': { 'min': '1024px' },
      },
      spacing: {
        'sm': '0.25rem',
        'base': '0.5rem',
        'lg': '1rem',
        'gutter': '1.25rem', // Gutter for all breakpoints
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '7rem',
        '7xl': '9rem',
        '8xl': '11rem',
        '9xl': '13rem',
      },
      margin: {
        'mobile': '1rem',
        'tablet': '2rem',
        'desktop': 'auto',
      },
      colors: {
        primary: '#000000', // Black: primary background, secondary text
        secondary: '#E900F5', // Neon Pink: secondary background, borders, links
        accent: '#00FF00', // Lime Green: hover effect on links
        'primary-text': '#FFFFFF', // White: primary text
      },
      fontFamily: {
        'primary': ['Orbitron', 'sans-serif'],
        'body': ['OCR A Extended', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '72px', fontWeight: '700' }], // Titles
        'h2': ['32px', { lineHeight: '56px', fontWeight: '600' }], // Headings
        'h3': ['24px', { lineHeight: '40px', fontWeight: '500' }], // Subheadings, Labels, Card Titles
        'body': ['14px', { lineHeight: '20px', fontWeight: '400' }], // Body Text, Links
        'small': ['12px', { lineHeight: '14px', fontWeight: '400' }], // Captions, less important details
      },
    },
  },
  plugins: [],
}
