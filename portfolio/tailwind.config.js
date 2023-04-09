/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5632",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#808080",
        offBlack: "#1a1a1a",
        lightGray: "#bfbfbf",
      },
    },
  },
  plugins: [],
};
