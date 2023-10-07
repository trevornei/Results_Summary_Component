/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        perp: "#7755FF",
        lightperp: "#2F2CE9",
      },
    },
  },
  plugins: [],
}

