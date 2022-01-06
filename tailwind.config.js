const IMAGES_PATH = "/images";
const HOME_IMAGES_PATH = `${IMAGES_PATH}/home`;
const DESTINATION_IMAGES_PATH = `${IMAGES_PATH}/destination`;
const CREW_IMAGES_PATH = `${IMAGES_PATH}/crew`;
const TECHNOLOGY_IMAGES_PATH = `${IMAGES_PATH}/technology`;

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
      "home-sm": `url(${HOME_IMAGES_PATH}/background-home-mobile.jpg)`,
      "destination-sm": `url(${DESTINATION_IMAGES_PATH}/background-destination-mobile.jpg)`,
      "crew-sm": `url(${CREW_IMAGES_PATH}/background-crew-mobile.jpg)`,
      "technology-sm": `url(${TECHNOLOGY_IMAGES_PATH}/background-technology-mobile.jpg)`
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
