import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
// Components
import { Loading } from './Loading.tsx';
import { MyCityPrev } from './MyCityPrev.js';
// Services
import { getLocationService } from '../services/GetLocationService.js';

type Location = {
  accuracy: number;
  altitude: number;
  bearing?: number;
  latitude: number;
  longitude: number;
  provider?: string;
  speed: number;
  time: number;
};

export const MyLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    getLocationService()
      .then(res => {
        if ('cod' in res) {
          throw new Error(res.message);
        } else {
          setLocation(res);
        }
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }, []);

  return (
    <View>
      {!location ? (
        <Loading />
      ) : (
        <View>
          <MyCityPrev lat={location.latitude} long={location.longitude} />
        </View>
      )}
    </View>
  );
};
