import axios from 'axios';

export const getTemperature = async (city: string): Promise<number> => {
  const url: string | undefined = process.env.OWM_URL;
  const appId: string | undefined = process.env.OWM_APP_ID;

  if (typeof url === 'undefined' || typeof appId === 'undefined') {
    throw new Error(
      'Configuration for OpenWeatherMap API is missing or incomplete'
    );
  }

  try {
    const { data } = await axios.get(url, {
      params: {
        appid: appId,
        q: city,
        units: 'metric'
      }
    });

    return data.main.temp;
  } catch (err) {
    throw err;
  }
};
