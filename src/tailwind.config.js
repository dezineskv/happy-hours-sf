// tailwind.config.js
module.exports = {
  // darkMode: ["selector", '[data-theme="dark"]'], // Important for DaisyUI theme switching
  darkMode: "class",

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
  daisyui: {
    themes: ["light", "dark"], // Enable light and dark themes
    defaultTheme: "light", // Optional: set a default theme
  },
  plugins: [require("daisyui")],
};
