import { View, Text, StyleSheet } from 'react-native'

export const TemperatureHdr = ({ weatherInfo }) => {
  return (
    <View style={styles.cityCont}>
      <Text style={styles.cityName}>{weatherInfo.name}</Text>
      <Text style={styles.cityTemp}>{weatherInfo.main.temp}°</Text>
      <Text style={styles.cityHighLow}>
        {weatherInfo.weather[0].description}
      </Text>
      <Text style={styles.cityHighLow}>
        Feels like: {weatherInfo.main.feels_like}°
      </Text>
      <Text style={styles.cityHighLow}>
        High: {weatherInfo.main.temp_max}° Low: {weatherInfo.main.temp_min}°
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cityCont: {
    flex: 9,
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
