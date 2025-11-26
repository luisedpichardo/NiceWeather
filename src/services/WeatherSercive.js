import Config from '../../config.local.js'

// Try to find city
export const weatherService = async (city, type, unit) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    )
    return res.json()
  } catch {
    return {
      cod: 404,
      message: 'Error finding city',
    }
  }
}

