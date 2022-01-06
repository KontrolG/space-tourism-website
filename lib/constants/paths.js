export const IMAGES_PATH = "/images";
export const SHARED_IMAGES_PATH = IMAGES_PATH + "/shared";
export const DESTINATION_IMAGES_PATH = IMAGES_PATH + "/destination";
export const CREW_IMAGES_PATH = IMAGES_PATH + "/crew";
export const HOME_PATH = "/";
export const DESTINATION_ROOT_PATH = "/destination";
export const getDestinationPath = (destinationId) =>
  `${DESTINATION_ROOT_PATH}/${destinationId}`;
export const CREW_ROOT_PATH = "/crew";
export const getCrewPath = (memberId) => `${CREW_ROOT_PATH}/${memberId}`;
export const TECHNOLOGY_PATH = "/technology";
