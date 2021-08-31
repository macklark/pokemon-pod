module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bubble: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.1)",
          },
          "66%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        bubble: "bubble 7s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
