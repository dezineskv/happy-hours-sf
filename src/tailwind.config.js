// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        flash: "flash 1s linear infinite", // 'flash' is the name of your animation, 1s duration, linear timing, infinite repetition
      },
      keyframes: {
        flash: {
          "0%, 100%": { opacity: "1" }, // Fully visible at the start and end
          "50%": { opacity: "0" }, // Fully invisible in the middle
        },
      },
    },
  },
  plugins: [],
};
