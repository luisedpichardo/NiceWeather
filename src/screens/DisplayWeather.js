import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
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
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${route.params.cityData.name}&appid=${Config.API_WORK_KEY}&units=imperial`,
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
            {route.params.fromList ? (
              <RemoveCity cityData={route.params} />
            ) : (
              <AddCity cityData={route.params} />
            )}
          </View>

          <TemperatureHdr style={{felx:9}} weatherInfo={route.params.cityData} />
            <ScrollView style={{flex:30}}>
          <TempInfoDisplay infoPerHrList={forecastData.list} />
            </ScrollView>
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
    padding: 5,
    alignItems: 'flex-end',
    margin: 5,
  },
})
