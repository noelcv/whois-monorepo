import axios from 'axios';
import dotenv from 'dotenv';
import { parseUserLocation } from '../../controllers/utils/location/parseUserLocation.util';
import { UserLocation } from '../../types/userLocation.interface';
dotenv.config();
const LOCATION_API_URL = `${process.env.LOCATION_API_URL}${process.env.LOCATION_TOKEN}`;

export const queryLocationService = async (lat: number, long: number) => {
  try {
    const locationQuery = `${LOCATION_API_URL}&lat=${lat}&lon=${long}&format=json`;
    const apiResponse = await axios.get(locationQuery);
    if (apiResponse.data) {
      const town = apiResponse.data.address.town;
      const country = apiResponse.data.address.country;
      const location: UserLocation = { town: town, country: country };
      const userLocation = parseUserLocation(location);
      return userLocation;
    }
  } catch (err) {
    console.log('❌ Error at queryLocationService: ', err);
  }
};
