import { View, Text, StyleSheet } from 'react-native'
// Components
import { WeatherIcon } from './WeatherIcon.tsx'
// Utils
import { roundNumber } from '../utils/roundNumber.js'
// Types
type Clouds = {
  all: number
}
type Main = {
  feels_like: number,
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_kf: number,
  temp_max: number,
  temp_min: number,
}
type Sys = {
  pod: string,
}
type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string,
}
type Wind = {
  deg: number,
  gust: number,
  speed: number,
}
type Hr = {
  clouds: Clouds,
  dt: number,
  dt_txt: number,
  main: Main,
  pop: number,
  sys: Sys,
  visibility: number,
  weather: Array<Weather>,
  wind: Wind,
}
type Props = {
  hr: Hr
}

export const HrInfoDisplay = ({ hr } : Props) => {
  return (
    <View style={styles.hrInfo}>
      <View style={styles.tempInfo}>
        <Text>{hr.dt_txt}</Text>
        <Text>
          Max: {roundNumber(hr.main.temp_max)}° Low:{' '}
          {roundNumber(hr.main.temp_min)}°
        </Text>
        <Text>{hr.weather[0].main}</Text>
        <Text>Humidity {hr.main.humidity}%</Text>
      </View>
      <View style={styles.icon}>
        <Text>{roundNumber(hr.main.temp)}°</Text>
        <WeatherIcon icon={hr.weather[0].icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hrInfo: {
    backgroundColor: 'aliceblue',
    margin: 5,
    marginBottom: 10,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  tempInfo: {
    flex: 3,
  },
  icon: {
    flex: 1,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})
