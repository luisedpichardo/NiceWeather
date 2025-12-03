import { Image } from 'react-native';
// Types
type Props = {
  icon: string;
};

export const WeatherIcon = ({ icon }: Props) => {
  return (
    <Image
      source={{
        uri: `https://openweathermap.org/img/wn/${icon}@4x.png`,
      }}
      style={{ width: 50, height: 50 }}
      resizeMode="contain"
    />
  );
};
