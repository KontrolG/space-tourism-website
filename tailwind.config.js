const IMAGES_PATH = "/images";
const HOME_IMAGES_PATH = `${IMAGES_PATH}/home`;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      subheading: ["Barlow  Condensed", "sans-serif"],
      sans: ["Barlow", "sans-serif"],
      serif: ["Bellefair", "serif"]
    },
    backgroundImage: {
      "home-sm": `url(${HOME_IMAGES_PATH}/background-home-mobile.jpg)`
    },
    extend: {
      colors: {
        black: "#0B0D17",
        light: "#D0D6F9"
      }
    }
  },
  plugins: []
};
