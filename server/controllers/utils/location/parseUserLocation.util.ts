import { UserLocation } from '../../../types/userLocation.interface';

export const parseUserLocation = (userLocation: UserLocation): string => {
  return JSON.stringify(userLocation);
};
