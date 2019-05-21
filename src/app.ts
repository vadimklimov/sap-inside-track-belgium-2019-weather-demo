import cfenv from 'cfenv';
import dotenv from 'dotenv';
import express from 'express';
import { echoRouter } from './echo/echo.route';
import { weatherRouter } from './weather/weather.route';

dotenv.config();
const appEnv = cfenv.getAppEnv({ vcapFile: process.env.CF_VCAP_LOCAL_FILE });
const port: number = appEnv.port;

const app: express.Application = express();
app.disable('x-powered-by');
app.use('/weather', weatherRouter);
app.use('/echo', echoRouter);

app.listen(port, (): void => {
  console.log(`Application started and listening on port ${port}`);
});
