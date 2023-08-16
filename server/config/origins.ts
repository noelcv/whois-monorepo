import dotenv from 'dotenv';
dotenv.config();
export const ALLOWED_ORIGINS = [
  process.env.PRODUCTION_CLIENT_URL,
  process.env.DEV_CLIENT_URL,
  process.env.DEV_CLIENT_MICROSERVICE,
  process.env.PRODUCTION_CLIENT_MICROSERVICE,
];

export default ALLOWED_ORIGINS;
