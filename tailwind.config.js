module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./tailwind/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-1": "#fff",
        gainsboro: "#e0e6ed",
        darkslategray: "#3b3f5c",
        midnightblue: {
          100: "#03123d",
          200: "#03123b",
        },
        ghostwhite: "rgba(249, 250, 253, 0)",
        "grey-stroke": "#dedede",
        "grey-1": "#252c32",
        "propacity-blue": "#0062ff",
        "grey-2": "#696974",
        gray: "rgba(255, 255, 255, 0)",
        black: "#000",
        "blue-highlight": "#e5efff",
        darkslateblue: "#001b47",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "heading-semi-bold": "Inter",
        avalon: "Avalon",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
