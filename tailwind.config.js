/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0D1120",
          50: "#171E2C",
          500: "#0D1120",
        },
      },
      keyframes: {
        wiggle: {
          "100%,100%": { transform: "rotate(-50deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite", // Adjusted duration to 0.5s
        float: "float 2s ease-in-out infinite",   // Adjusted duration to 2s
        fadeIn: "fadeIn 0.5s ease-in-out",        // Adjusted duration to 0.5s
      },
    },
  },
  plugins: [],
};
