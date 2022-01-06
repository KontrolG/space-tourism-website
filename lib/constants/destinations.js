import { DESTINATION_IMAGES_PATH } from "./paths";

const destinations = [
  {
    id: "moon",
    name: "Moon",
    images: {
      png: `${DESTINATION_IMAGES_PATH}/image-moon.png`,
      webp: `${DESTINATION_IMAGES_PATH}/image-moon.webp`
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    id: "mars",
    name: "Mars",
    images: {
      png: `${DESTINATION_IMAGES_PATH}/image-mars.png`,
      webp: `${DESTINATION_IMAGES_PATH}/image-mars.webp`
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    id: "europa",
    name: "Europa",
    images: {
      png: `${DESTINATION_IMAGES_PATH}/image-europa.png`,
      webp: `${DESTINATION_IMAGES_PATH}/image-europa.webp`
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    id: "titan",
    name: "Titan",
    images: {
      png: `${DESTINATION_IMAGES_PATH}/image-titan.png`,
      webp: `${DESTINATION_IMAGES_PATH}/image-titan.webp`
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

export { destinations };
