import { View, Text, StyleSheet } from 'react-native'

export const TemperatureHdr = () => {
  return (
    <View style={styles.cityCont}>
      <Text style={styles.cityName}>City</Text>
      <Text style={styles.cityTemp}>Temp</Text>
      <Text style={styles.cityHighLow}>High/Low Temp</Text>
      <Text style={styles.cityHighLow}>Sunny</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cityCont: {
    flex: 9,
    backgroundColor: 'blue',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  cityName: {
    color: 'white',
    fontSize: 30,
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
