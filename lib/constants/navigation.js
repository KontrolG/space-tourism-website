import {
  CREW_PATH,
  DESTINATION_PATH,
  HOME_PATH,
  TECHNOLOGY_PATH
} from "./paths";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    to: HOME_PATH
  },
  {
    id: "destination",
    label: "Destination",
    to: DESTINATION_PATH,
    exact: false
  },
  {
    id: "crew",
    label: "Crew",
    to: CREW_PATH
  },
  {
    id: "technology",
    label: "Technology",
    to: TECHNOLOGY_PATH
  }
];

export { navigationItems };
