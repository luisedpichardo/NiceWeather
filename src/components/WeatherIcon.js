import { Image } from 'react-native'

export const WeatherIcon = ({ icon }) => (
  <Image
    source={{
      uri: `https://openweathermap.org/img/wn/${icon}@4x.png`,
    }}
    style={{ width: 50, height: 50 }}
    resizeMode="contain"
  />
)
