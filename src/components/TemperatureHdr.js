import { View, Text, StyleSheet } from 'react-native'
// Utils
import { roundNumber } from '../utils/roundNumber'
import { useCallback } from 'react'

export const TemperatureHdr = ({ weatherInfo }) => {
  const mainTemp = useCallback(
    temp => {
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
