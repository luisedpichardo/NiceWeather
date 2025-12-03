import Config from '../../config.local.js';

// Try to find city by name
export const weatherService = async (city, type, unit) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    );
    return res.json();
  } catch {
    return {
      cod: 404,
      message: 'Error finding city',
    };
  }
};

// Try to find city by lat and long
export const weatherMyLocService = async (lat, long, type, unit) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${long}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    );
    return res.json();
  } catch {
    return {
      cod: 404,
      message: 'Error finding city',
    };
  }
};
