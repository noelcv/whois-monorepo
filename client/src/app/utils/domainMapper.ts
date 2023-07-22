import { IParsedDomain } from '../types/parsedDomain.interface';
import { v4 as uuid } from 'uuid';

// Util to map the response to a domain object
export const domainMapper = (rawResponse: string): IParsedDomain => {
  //generate a unique id for the parsed domain
  const uid = uuid();

  //clean the payload
  const cleanResponse = rawResponse.split('\r\n');

  // Map the response to a domain object
  const domainName = cleanResponse[0]
    .split(/:/)
    .map(element => element.trim())[1];
  const registrarId = cleanResponse[1]
    .split(/:/)
    .map(element => element.trim())[1];
  const registrarWhoisServer = cleanResponse[2]
    .split(/:/)
    .map(element => element.trim())[1];
  const registrarUrl = `https://${cleanResponse[3]
    .split(/:/)
    .map(element => element.trim())[2]
    .slice(2)}`;
  const creationDate = cleanResponse[5]
    .split(/:/)
    .map(element => element.trim())[1]
    .slice(0, 10);
  const expirationDate = cleanResponse[6]
    .split(/:/)
    .map(element => element.trim())[1]
    .slice(0, 10);
  const registrarName = cleanResponse[7]
    .split(/:/)
    .map(element => element.trim())[1];
  const registrarIanaId = cleanResponse[8]
    .split(/:/)
    .map(element => element.trim())[1];

  //assemble the domain object
  const parsedDomain = {
    uid,
    domainName,
    registrarId,
    registrarName,
    registrarUrl,
    registrarWhoisServer,
    expirationDate,
    creationDate,
    registrarIanaId,
    rawResponse,
  };

  return parsedDomain;
};
