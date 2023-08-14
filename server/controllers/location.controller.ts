import { Request, Response } from 'express';
import { validateUserLocation } from './utils/location/validateUserLocation.util';
import { mockUserLocation } from './utils/location/mockUserLocation.util';
import { queryLocationService } from '../services/location/queryLocationService.service';

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
    //STRATEGY:
    //mock API response on development;
    if (process.env.NODE_ENV !== 'production') {
      return mockUserLocation();
    }
    //query API on production;
    if (process.env.NODE_ENV === 'production') {
      return await queryLocationService(lat, long);
    }
  } catch (err) {
    console.log('❌ Error at getLocation: ', err);
  }
};
