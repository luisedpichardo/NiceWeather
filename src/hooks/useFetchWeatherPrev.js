import { useEffect, useState } from 'react'

import { weatherService } from '../services/WeatherSercive'

export function useFetchWeatherPrev(name, type, unit) {
  const [loader, setLoader] = useState(true)
  const [cityInfo, setCityInfo] = useState(null)

  useEffect(() => {
    weatherService(name, type, unit)
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          setCityInfo(json)
          setLoader(false)
          return
        }
        // Other wise throw an error
        throw Error(json.message)
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }, [name, type, unit])

  return {
    cityInfo: cityInfo,
    loader: loader,
  }
}
