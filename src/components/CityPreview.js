import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import Config from '../../config.local.js'
import { WeatherIcon } from './WeatherIcon'

export const CityPreview = ({ el }) => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(true)
  const [cityInfo, setCityInfo] = useState(null)

  useEffect(() => {
    getCityInfo()
  }, [])

  const getCityInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${el.city},${el.country}&appid=${Config.API_WORK_KEY}&units=imperial`,
    )
      .then(response => {
        // Parse to json
        return response.json()
      })
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          setCityInfo(json)
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

  const openCityScreen = el => {
    let payload = {
      citiesList: [],
      cityData: cityInfo,
      fromList: el.fromList
    }
    navigation.navigate('Weather', payload)
  }

  return (
    <View>
      {loader ? (
        <View style={styles.cardStyle}>
          <Text>loading...</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.cardStyle}
          onPress={() => openCityScreen(el)}
        >
          <View style={styles.cardElem}>
            <Text>
              {el.city}, {el.country}
            </Text>
            <Text>{cityInfo.main.temp}°</Text>
          </View>
          <View style={styles.cardElem}>
            <WeatherIcon icon={cityInfo.weather[0].icon}/>
            <Text>High: {cityInfo.main.temp_max}° Low: {cityInfo.main.temp_min}°</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    margin: 20,
    padding: 30,
    borderRadius: 25,
  },
  cardElem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
