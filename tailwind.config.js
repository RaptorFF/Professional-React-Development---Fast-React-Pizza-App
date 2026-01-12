/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // customize font family
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    // extend the default theme
    extend: {
      height: {
        screen: ["100dvh"],
      },
    },
  },
  plugins: [],
};
