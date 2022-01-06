export const IMAGES_PATH = "/images";
export const SHARED_IMAGES_PATH = IMAGES_PATH + "/shared";
export const DESTINATION_IMAGES_PATH = IMAGES_PATH + "/destination";
export const HOME_PATH = "/";
export const DESTINATION_ROOT_PATH = "/destination";
export const getDestinationPath = (destinationId) =>
  `${DESTINATION_ROOT_PATH}/${destinationId}`;
export const CREW_PATH = "/crew";
export const TECHNOLOGY_PATH = "/technology";
