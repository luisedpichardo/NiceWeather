import { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
// Components
import { DayInfoDisplay } from './DayInfoDisplay.tsx'
// Utils
import { calculateDays } from '../utils/calculateDays.js'
// Types
type Clouds = {
  all: number,
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
type InfoPerHrList = {
  clouds: Clouds,
  dt: number,
  dt_txt: string,
  main: Main,
  pop: number,
  sys: Sys,
  visibility: number,
  weather: Array<Weather>,
  wind: Wind,
}
type Props = {
  infoPerHrList: Array<InfoPerHrList>,
}

export const TempDayDisplay = ({ infoPerHrList } : Props) => {
  const daysOfWeek = useMemo(
    () => calculateDays(infoPerHrList),
    [infoPerHrList],
  )

  return (
    <View style={styles.dayInfo}>
      {daysOfWeek.map((el, i) => {
        return <DayInfoDisplay key={i} day={el} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfo: {
    borderRadius: 25,
    flexDirection: 'row',
  },
})
