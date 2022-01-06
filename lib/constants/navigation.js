import {
  CREW_ROOT_PATH,
  DESTINATION_ROOT_PATH,
  HOME_PATH,
  TECHNOLOGY_ROOT_PATH
} from "./paths";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    to: HOME_PATH,
    exact: true
  },
  {
    id: "destination",
    label: "Destination",
    to: DESTINATION_ROOT_PATH
  },
  {
    id: "crew",
    label: "Crew",
    to: CREW_ROOT_PATH
  },
  {
    id: "technology",
    label: "Technology",
    to: TECHNOLOGY_ROOT_PATH
  }
];

export { navigationItems };
