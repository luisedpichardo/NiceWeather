import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
// Services
import { weatherMyLocService } from '../services/WeatherSercive';

export function useFetchWeatherLocPrev(lat, long, type, unit) {
  const [loader, setLoader] = useState(true);
  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    weatherMyLocService(lat, long, type, unit)
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          setCityInfo(json);
          setLoader(false);
          return;
        }
        // Other wise throw an error
        throw Error(json.message);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }, [lat, long, type, unit]);

  return {
    cityInfo: cityInfo,
    loader: loader,
  };
}
