/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#603F8B",
        dim_gray: "#686868",
        space_cadet: "#1E1E4B",
        regalia: "#532F82",
        maximum_blue_purple: "#B6B6E5",
      },
      fontSize: {
        t16: ["0.89rem", "1.11rem"],
        t18: ["1rem", "1.28rem"],
        t20: ["1.11rem", "1.39rem"],
        t22: ["1.22rem", "1.56rem"],
      },
      fontFamily: {
        CircularStd: ["Circular Std", "sans-serif"],
        Recoleta: ["Recoleta", "sans-serif"],
      },
      fontWeight: {
        "medium-extra": 450,
      },
    },
  },
  plugins: [],
};
