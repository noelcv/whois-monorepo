export const validateUserLocation = (lat: number, long: number): boolean => {
  return lat > 90 || lat < -90 || long > 180 || long < -180 ? false : true;
};
