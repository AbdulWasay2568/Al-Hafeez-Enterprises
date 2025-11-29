/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alpha': ['AlphaCentauri', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'inter-700': '700',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    }
  },
  variants: {},
  plugins: [],
};
