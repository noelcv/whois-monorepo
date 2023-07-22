import Express from 'express';
import cors from 'cors';
import router from './router';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import helmet from 'helmet';
import SECURITY_OPTIONS from './config/helmet.config';
const PORT = process.env.PORT || 3001;
const allowedOrigins = [
  process.env.PRODUCTION_CLIENT_URL,
  process.env.DEV_CLIENT_URL,
];

const app = Express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Request origin not allowed by CORS!'));
      }
    },
    methods: ['GET'],
  })
);

app.use(helmet(SECURITY_OPTIONS));
app.disable('x-powered-by'); //Hide the information about the framework used and save bandwidth

app.use(morgan('dev'));
app.use(Express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(router);

app.listen(PORT, () => {
  try {
    console.log(`🚀 Server is running at  http://localhost:${PORT}`);
  } catch (err) {
    console.error('❌ Error launching server: ', err);
  }
});
