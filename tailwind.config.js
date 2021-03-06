// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#B300FF",
        red: "#F52F57",
        yellow: "#F7C22C",
        green: "#5AB46C",
        blue: "#5983B5",
        purple: "#BA2FF5",
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        touch: { raw: "(hover: none), (pointer: coarse)" },
      },
    },
    fontFamily: {
      display: ["Oswald", "sans"],
    },
  },
};
