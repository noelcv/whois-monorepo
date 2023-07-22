import {Request, Response} from 'express';

export async function getHome(req: Request, res: Response ) {
  try {
    await res.send("Hello Whois Query Server");
    res.status(200)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}