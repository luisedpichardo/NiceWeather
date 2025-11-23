import { View, Text, StyleSheet, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Config from '../../config.local.js'
import { TemperatureHdr } from '../components/TemperatureHdr.js'
import { TempInfoDisplay } from '../components/TempInfoDisplay.js'
import { AddCity } from '../components/AddCity.js'
import { RemoveCity } from '../components/RemoveCity.js'

export const DisplayWeather = ({ route }) => {
  const [loader, setLoader] = useState(true)
  const [forecastData, setForecastData] = useState(null)

  const getForecastByName = () => {
    console.log('request to forecast')
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${route.params.name}&appid=${Config.API_WORK_KEY}&units=imperial`,
    )
      .then(response => {
        // Parse to json
        return response.json()
      })
      .then(json => {
        if (json.cod === '200') {
          setForecastData(json)
          setLoader(false)
          return
        }
        // Other wise throw an error
        throw Error(json.message)
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }

  useEffect(() => {
    console.log(route.params.name)
    getForecastByName()
  }, [])

  return (
    <View style={styles.container}>
      {loader ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.infoContainer}>
          <View style={styles.addRemStyle}>
            {route.params.fromList ? <RemoveCity /> : <AddCity />}
          </View>

          <TemperatureHdr weatherInfo={route.params} />

          <TempInfoDisplay
            infoPerHrList={forecastData.list}
            infoPerDayList={{}}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 70,
    padding: 30,
    paddingBottom: 50,
  },
  addRemStyle: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-end',
  },
})
