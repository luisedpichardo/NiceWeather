import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// Slices
import { onRemoveCity } from '../store/slice/cities/citiesSlice';
// Types
type Clouds = {
  all: number;
};
type Coord = {
  lat: number;
  lon: number;
};
type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};
type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};
type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};
type Wind = {
  deg: number;
  speed: number;
};
type CityData = {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
};
type Props = {
  cityData: CityData;
};

export const RemoveCity = ({ cityData }: Props) => {
  const navigation = useNavigation();
  const dispatchCities = useDispatch();
  const removeCityfromList = () => {
    // Dispatch action to store
    dispatchCities(
      onRemoveCity({
        city: cityData.name,
      }),
    );
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={() => removeCityfromList()}>
      <Text>Remove</Text>
    </TouchableOpacity>
  );
};
