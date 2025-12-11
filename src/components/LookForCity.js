import { useImperativeHandle, forwardRef } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// Services
import { weatherService } from '../services/WeatherSercive.js';
// Stores
import { unitListStore } from '../store/unitStore';

const LookForCity = ({ city }, ref) => {
  const navigation = useNavigation();
  const unit = unitListStore(state => state.unit)
  const cities = useSelector(state => state.cities);

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
