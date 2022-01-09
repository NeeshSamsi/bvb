module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/2": "1fr 2fr",
        "1/3/1": "1fr 3fr 1fr",
        "1/4/1/3": "1fr 4fr 1fr 3fr",
      },
    },
  },
  plugins: [],
}
