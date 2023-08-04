import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const LOCATION_API_URL = `${process.env.LOCATION_API_URL}${process.env.LOCATION_TOKEN}`;

interface LocationCoords {
  latitude: string;
  longitude: string;
}

interface UserLocation {
  town: string;
  country: string;
}

export async function lookUp(req: Request, res: Response) {
  try {
    console.log('req.body from Client: ', req.body);
    if (!req.body.latitude || !req.body.longitude)
      return res.status(400).send('❌ Invalid location data');
    const lat = req.body.latitude as string;
    const long = req.body.longitude as string;
    console.log('lat from Client: ', lat);
    console.log('long from Client: ', long);
    const userLocation = getLocation(lat, long);
    res.send(userLocation);
  } catch (err) {
    console.log('❌ Error in location.controller in lookUp: ', err);
  }
}

const getLocation = async (
  lat: string,
  long: string
): Promise<UserLocation> => {
  const locationQuery = `${LOCATION_API_URL}&lat=${lat}&lon=${long}&format=json`;
  const apiResponse = await axios.get(locationQuery);
  console.log('response from api', apiResponse.data);
  // const data = JSON.stringify(apiResponse.data, null, 2);
  // console.log('stringified', data);
  const town = apiResponse.data.address.town;
  const country = apiResponse.data.address.country;
  const userLocation: UserLocation = { town: town, country: country };
  return userLocation;
};
