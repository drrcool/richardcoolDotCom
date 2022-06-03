module.exports = {
  mode: "jit",
  content: [
    "./pages/*.{js,ts,tsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        af: "repeat(auto-fit, minmax(60, 1fr))",
      },

      gridAutoRows: {
        custom: "minmax(60px, 1fr)",
      },

      gridRow: {
        tall: "span 2",
      },
      gridColumn: {
        wide: "span 2",
      },
    },
  },

  plugins: [],
};
