/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#603F8B",
        dim_gray: "#686868",
        space_cadet: "#1E1E4B",
        regalia: "#532F82",
        maximum_blue_purple: "#B6B6E5",
        bright_gray: "#E7EAF1",
        ghost_white: "#F8FAFD",
        medium_purple: "#A16AE8",
        crayola: "#A3B1BF",
        platinum: "#E5E7EA",
        charcoal: "#353F54",
        dark_purple: "#230B34",
        alice_blue: "#EEEEFF",
        pastel_blue: "#B1BDCA",
        magnolia: "#F8F3FF",
        onyx: "#383838",
        baby_powder: "#FCFAFF",
        granite_gray: "#656565",
      },
      fontSize: {
        t14: ["0.78rem", "1.11rem"],
        t16: ["0.89rem", "1.11rem"],
        t18: ["1rem", "1.28rem"],
        t20: ["1.11rem", "1.39rem"],
        t22: ["1.22rem", "1.56rem"],
        t24: ["1.33rem", "1.67rem"],
        t36: ["2rem", "2.72rem"],
      },
      fontFamily: {
        CircularStd: ["Circular Std", "sans-serif"],
        Recoleta: ["Recoleta Alt", "sans-serif"],
      },
      fontWeight: {
        "medium-slim": 450,
      },
      boxShadow: {
        "3xl": "2px 8px 8px rgba(86, 86, 86, 0.25)",
      },
    },
  },
  plugins: [],
};
