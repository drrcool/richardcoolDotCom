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
    extend: {},
  },
  plugins: [],
};
