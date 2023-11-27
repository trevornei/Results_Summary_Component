/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hg: 'Hanken Grotesk', 
      },
      colors: {
        perp: "#7755FF",
        lightperp: "#2F2CE9",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.3rem',
      },
      keyframes: {
        spun: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(36deg)' },
          '20%': { transform: 'rotate(72deg)' },
          '30%': { transform: 'rotate(108deg)' },
          '40%': { transform: 'rotate(144deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '60%': { transform: 'rotate(216deg)' },
          '70%': { transform: 'rotate(252deg)' },
          '80%': { transform: 'rotate(288deg)' },
          '90%': { transform: 'rotate(324deg)' },
          '100%': { transform: 'rotate(359deg)' },
        },
      },
      animation: {
        'spunOut': 'spun 5s linear infinite',
      },
    },
  },
  plugins: [],
}

