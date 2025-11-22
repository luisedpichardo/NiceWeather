import { View, Text, StyleSheet, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Config from '../../config.local.js'
import { AddRemoveCityBtn } from '../components/AddRemoveCityBtn.js'
import { TemperatureHdr } from '../components/TemperatureHdr.js'
import { TempInfoDisplay } from '../components/TempInfoDisplay.js'

export const DisplayWeather = ({ route }) => {
  const [loader, setLoader] = useState(true)
  const [forecastData, setForecastData] = useState(null)

  const getForecastByName = () => {
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
          console.log('read data')
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
    // console.log(route.params.name)
    console.log('loading')
    getForecastByName()
  }, [])

  return (
    <View>
      {loader ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <AddRemoveCityBtn inList={route.params.formList} />

          <TemperatureHdr infoPerHrList={forecastData.list} />

          <TempInfoDisplay />
        </View>
      )}
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
