import { unitType } from '../stores/store-unitType'
import Config from '../../config.local.js'

// const unit = unitType.getState().unit

// Try to find city
export const lookCityService = async (city, unit) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    )
    return res.json()
  } catch {
    return {
      cod: 404,
      message: 'Error finding city',
    }
  }
}

// Try to get forecast of city
export const getForecastByNameService = async name => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    )
    return res.json()
  } catch {
    return {
      cod: 404,
      message: 'Error receiving Forecast',
    }
  }
}

// Get info for preview City
export const getCityInfoService = async (city, country) => {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Config.API_WORK_KEY}&units=${unit}`,
    )
    return res.json()
  } catch {
    return {
      cod: 404,
      message: 'Error getting city info',
    }
  }
}