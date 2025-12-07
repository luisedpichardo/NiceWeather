import { useImperativeHandle, forwardRef } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Contexts
import { useUnit } from '../contexts/UnitContext.js';
// Stores
import { storeCities } from '../store/citiesStore';
// Services
import { weatherService } from '../services/WeatherSercive.js';

const LookForCity = ({ city }, ref) => {
  const navigation = useNavigation();
  const unit = useUnit();
  const cities = storeCities.getState().cities;

  const lookCity = () => {
    weatherService(city, 'weather', unit)
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          // Check if city exists in cities context
          if (cities.some(elem => elem.city === json.name)) {
            navigation.navigate('Weather', {
              cityData: json,
              myLoc: false,
            });
            return;
          }
          navigation.navigate('Weather', {
            cityData: json,
            myLoc: false,
          });
          return;
        }
        // Other wise throw an error
        throw new Error(json.message);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  useImperativeHandle(ref, () => ({
    lookCity,
  }));

  return <View></View>;
};

export default forwardRef(LookForCity);
