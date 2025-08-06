/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
        'share-tech': ['"Share Tech Mono"', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
