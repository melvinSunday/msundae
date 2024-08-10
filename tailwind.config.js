/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },
      animation: {
        "jumping-dots":
          "jumping-dots 2s cubic-bezier(0.55, 1.55, 0.55, 1.55) infinite",
      },
    },
  },
  plugins: [],
};
