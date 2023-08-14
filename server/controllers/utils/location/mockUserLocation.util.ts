import { parseUserLocation } from './parseUserLocation.util';

export const mockUserLocation = () => {
  const mock = { town: 'Berlin', country: 'Germany' };
  const mockUserLocation = parseUserLocation(mock);
  return mockUserLocation;
};
