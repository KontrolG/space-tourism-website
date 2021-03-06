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
      "home-md": `url(${HOME_IMAGES_PATH}/background-home-tablet.jpg)`,
      "home-lg": `url(${HOME_IMAGES_PATH}/background-home-desktop.jpg)`,
      "destination-sm": `url(${DESTINATION_IMAGES_PATH}/background-destination-mobile.jpg)`,
      "destination-md": `url(${DESTINATION_IMAGES_PATH}/background-destination-tablet.jpg)`,
      "destination-lg": `url(${DESTINATION_IMAGES_PATH}/background-destination-desktop.jpg)`,
      "crew-sm": `url(${CREW_IMAGES_PATH}/background-crew-mobile.jpg)`,
      "crew-md": `url(${CREW_IMAGES_PATH}/background-crew-tablet.jpg)`,
      "crew-lg": `url(${CREW_IMAGES_PATH}/background-crew-desktop.jpg)`,
      "technology-sm": `url(${TECHNOLOGY_IMAGES_PATH}/background-technology-mobile.jpg)`,
      "technology-md": `url(${TECHNOLOGY_IMAGES_PATH}/background-technology-tablet.jpg)`,
      "technology-lg": `url(${TECHNOLOGY_IMAGES_PATH}/background-technology-desktop.jpg)`,
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
