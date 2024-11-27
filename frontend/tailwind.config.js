/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text: "var(--text-color)",
      },
      fontFamily: {
        title: ["Kanit", "sans-serif"],
      }
    },
  },
  plugins: [],
};
