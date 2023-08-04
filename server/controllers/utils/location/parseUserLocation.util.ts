import { UserLocation } from '../../location.controller';

export const parseUserLocation = (userLocation: UserLocation): string => {
  return JSON.stringify(userLocation);
};
