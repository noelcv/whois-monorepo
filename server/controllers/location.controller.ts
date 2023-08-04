import { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const LOCATION_API_URL = `${process.env.LOCATION_API_URL}${process.env.LOCATION_TOKEN}`;

interface Location {
  latitude: string;
  longitude: string;
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
    getLocation(lat, long);
    const result = JSON.stringify({ lat, long });
    res.send(result);
  } catch (err) {
    console.log('❌ Error in location.controller in lookUp: ', err);
  }
}

const getLocation = (lat: string, long: string) => {
  const locationQuery = `${LOCATION_API_URL}&lat=${lat}&lon=${long}`;
  fetch(locationQuery).then;
};
