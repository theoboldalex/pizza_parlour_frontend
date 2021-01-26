module.exports = {
  theme: {
    // ...
  },
  variants: {
    opacity: ({ after }) => after(["disabled"])
  },
  plugins: [
    require("@tailwindcss/forms")
    // ...
  ]
};
