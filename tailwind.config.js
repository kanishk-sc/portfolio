/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#39FF14',
        'cyber-bg': '#0f111a',
        'cyber-accent': '#00ffe7',
        'glow': '#39FF14',
      },
      fontFamily: {
        mono: ['Fira Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 8px #39FF14, 0 0 16px #39FF14',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
          '0%': { textShadow: '0 0 8px #39FF14, 0 0 16px #39FF14' },
          '100%': { textShadow: '0 0 16px #39FF14, 0 0 32px #39FF14' },
        },
      },
      backgroundImage: {
        'matrix': "linear-gradient(180deg, rgba(57,255,20,0.05) 0%, rgba(15,17,26,1) 100%)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

