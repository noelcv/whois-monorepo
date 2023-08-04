import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { parseUserLocation } from './utils/location/parseUserLocation.util';
import { validateUserLocation } from './utils/location/validateUserLocation.util';
dotenv.config();
const LOCATION_API_URL = `${process.env.LOCATION_API_URL}${process.env.LOCATION_TOKEN}`;

interface LocationCoords {
  latitude: string;
  longitude: string;
}

export interface UserLocation {
  town: string;
  country: string;
}

export async function lookUp(req: Request, res: Response) {
  try {
    if (!req.body.latitude || !req.body.longitude)
      return res.status(400).send('❌ Invalid location data');
    const lat = req.body.latitude as number;
    const long = req.body.longitude as number;
    const isValidUserLocation = validateUserLocation(lat, long);
    if (!isValidUserLocation)
      return res.status(400).send('❌ Invalid coordinates');
    const userLocation = await getLocation(lat, long);
    if (userLocation) res.send(userLocation);
  } catch (err) {
    console.log('❌ Error in location.controller in lookUp: ', err);
  }
}

const getLocation = async (
  lat: number,
  long: number
): Promise<string | undefined> => {
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
    console.log('❌ Error at getLocation: ', err);
  }
};
