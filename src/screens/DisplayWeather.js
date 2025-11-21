import { View, StyleSheet } from 'react-native'

import { AddRemoveCityBtn } from '../components/AddRemoveCityBtn.js'
import { TemperatureHdr } from '../components/TemperatureHdr.js'
import { TempInfoDisplay } from '../components/TempInfoDisplay.js'

export const DisplayWeather = () => {
  return (
    <View style={styles.container}>
			<AddRemoveCityBtn />

			<TemperatureHdr />

			<TempInfoDisplay />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 70,
    padding: 30,
    paddingBottom: 50,
  },
  tempInfo: {
    flex: 45,
  },
  dayInfo: {
    flex: 1,
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  weekInfo: {
    flex: 7,
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 10,
  },
  hrInfo: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 5,
  },
  dayPrev: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 5,
  },
})
