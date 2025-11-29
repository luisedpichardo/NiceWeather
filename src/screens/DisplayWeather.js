import { View, StyleSheet, Alert, ScrollView, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// Components
import { TemperatureHdr } from '../components/TemperatureHdr.js'
import { TempHrDisplay } from '../components/TempHrDisplay.js'
import { AddCity } from '../components/AddCity.js'
import { RemoveCity } from '../components/RemoveCity.js'
import { Loading } from '../components/Loading.js'
// Contexts
import { useUnit } from '../contexts/UnitContext.js'
import { useCities } from '../contexts/CityContext.js'
// Screens
import { BackgroundWeather } from './BackgroundWeather.js'
// Services
import { weatherService } from '../services/WeatherSercive.js'

export const DisplayWeather = ({ route }) => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(true)
  const [forecastData, setForecastData] = useState(null)
  const unit = useUnit()
  const cities = useCities()

  const getForecastByName = () => {
    weatherService(route.params.cityData.name, 'forecast', unit)
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
        navigation.goBack()
      })
  }

  useEffect(() => {
    getForecastByName()
    navigation.setOptions({
      headerRight: () => (
        <View>
          {!route.params.myLoc ? (
            <View style={styles.addRemStyle}>
              {cities.some(elem => route.params.cityData.name === elem.city) ? (
                <RemoveCity cityData={route.params.cityData} />
              ) : (
                <AddCity cityData={route.params} />
              )}
            </View>
          ) : (
            <></>
          )}
        </View>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      {loader ? (
        <Loading />
      ) : (
        <BackgroundWeather icon={route.params.cityData.weather[0].icon}>
          <View style={styles.infoContainer}>
            <TemperatureHdr
              style={{ felx: 9 }}
              weatherInfo={route.params.cityData}
            />
            <ScrollView style={{ flex: 30 }}>
              <TempHrDisplay infoPerHrList={forecastData.list} />
            </ScrollView>
            <View>
              <Text>Hello there</Text>
            </View>
          </View>
        </BackgroundWeather>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingTop: 70,
    padding: 30,
    paddingBottom: 50,
  },
  addRemStyle: {
    padding: 10,
    alignSelf: 'flex-end',
  },
})
