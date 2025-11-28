import { View, Text, StyleSheet } from 'react-native'
// Components
import { WeatherIcon } from './WeatherIcon.js'
// Utils
import { roundNumber } from '../utils/roundNumber.js'

export const HrInfoDisplay = ({ hr }) => {
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
