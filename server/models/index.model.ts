'use strict';
// import mongoose from 'mongoose';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import config from '../config/default';

const MONGODB_URL = `${config.DB_URL}/${config.DB_NAME}`;

(async () => {
  try {
    console.log('🚀 Connecting to database..., config.dbURI: ', MONGODB_URL);
    await mongoose.connect(MONGODB_URL, {
      dbName: 'whois',
      autoCreate: true,
    } as ConnectOptions);
    console.log('Successful Mongoose Connection');
  } catch (err) {
    console.log(err);
  }
})();

export default mongoose;
