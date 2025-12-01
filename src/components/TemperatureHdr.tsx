import { View, Text, StyleSheet } from 'react-native'
// Utils
import { roundNumber } from '../utils/roundNumber'
import { useCallback } from 'react'
// Types
type Clouds = {
  all: number,
}
type Coord = {
  lat: number,
  lon: number,
}
type Main = {
  feels_like:number,
  grnd_level:number,
  humidity:number,
  pressure:number,
  sea_level:number,
  temp:number,
  temp_max:number,
  temp_min:number,
}
type Sys = {
  country: string,
  id: number,
  sunrise: number,
  sunset: number,
  type: number,
}
type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string,
}
type Wind = {
  deg: number,
  speed: number,
}
type WeatherInfo = {
  base: string,
  clouds: Clouds,
  cod: number,
  coord: Coord,
  dt: number,
  id: number,
  main: Main,
  name: string,
  sys: Sys,
  timezone: string,
  visibility: number,
  weather: Array<Weather>,
  wind: Wind,
}
type Props = {
  weatherInfo: WeatherInfo,
}

export const TemperatureHdr = ({ weatherInfo } : Props) => {
  const mainTemp = useCallback(
    (temp : number) => {
      return roundNumber(temp)
    },
    [weatherInfo],
  )

  return (
    <View style={styles.cityCont}>
      <Text style={styles.cityName}>{weatherInfo.name}</Text>
      <Text style={styles.cityTemp}>{mainTemp(weatherInfo.main.temp)}°</Text>
      <Text style={styles.cityHighLow}>
        {weatherInfo.weather[0].description}
      </Text>
      <Text style={styles.cityHighLow}>
        Feels like: {roundNumber(weatherInfo.main.feels_like)}°
      </Text>
      <Text style={styles.cityHighLow}>
        High: {roundNumber(weatherInfo.main.temp_max)}° Low:{' '}
        {roundNumber(weatherInfo.main.temp_min)}°
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cityCont: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  cityName: {
    color: 'white',
    fontSize: 20,
  },
  cityTemp: {
    color: 'white',
    fontSize: 50,
  },
  cityHighLow: {
    color: 'white',
    fontSize: 15,
  },
})
