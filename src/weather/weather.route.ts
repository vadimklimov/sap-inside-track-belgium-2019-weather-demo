import { Request, Response, Router } from 'express';
import * as weatherController from './weather.controller';

export const weatherRouter: Router = Router();

weatherRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  const city: string = req.query.city;

  if (typeof city === 'undefined') {
    res.status(400);
    res.json({
      message: 'Error when executing query',
      details: `Parameter 'city' is missing`
    });

    return;
  }

  try {
    const temperature: number = await weatherController.getTemperature(city);

    res.status(200);
    res.json({
      city,
      temperature,
      unit: 'Celsius'
    });
  } catch (err) {
    res.status(500);
    res.json({
      message: `Error when executing query for city ${city}`,
      details: err.message
    });
  }
});
