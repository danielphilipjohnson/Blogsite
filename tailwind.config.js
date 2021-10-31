module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#7E5FA0",
          dark: "#303146",
          light: "#987FB3",
          alt: "#3a3c55",
        },
        secondary: "#81A05F",
        tricary: "#5FA07E",
        // dark-text: "#102a43",
        // light-text: "#1A446C",
        // text-base: "rgb(55, 53, 47)",
        // text-gray: "#4B4B4B"
        // text-light-gray: "#696969",
        // text-gray-dark: "#4F4F4F",
        // text-black: "#201F1B",
        //  background: #303146;
        white: "#FEFEFE",
        text: {
          black: "rgb(10, 12, 16)",
        },
      },
    },
  },
  extend: {
    fontFamily: {
      sans: ["wotfard"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
};
