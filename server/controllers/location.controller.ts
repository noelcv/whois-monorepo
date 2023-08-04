import { Request, Response } from 'express';

export async function lookUp(req: Request, res: Response) {
  try {
    if (!req.body.lat || !req.body.long)
      return res.status(400).send('❌ Invalid location data');
    const lat = req.body.lat as string;
    const long = req.body.long as string;
    console.log('lat from Client: ', lat);
    console.log('long from Client: ', long);
    res.send('hello from location controller');
  } catch (err) {
    console.log('❌ Error in location.controller in lookUp: ', err);
  }
}
