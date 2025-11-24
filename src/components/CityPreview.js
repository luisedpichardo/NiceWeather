import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import Config from '../../config.local.js'
import { WeatherIcon } from './WeatherIcon'
import { Loading } from './Loading.js'
import { roundNumber } from '../utils/roundNumber.js'

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
      fromList: el.fromList,
    }
    navigation.navigate('Weather', payload)
  }

  return (
    <View>
      {loader ? (
        <Loading style={styles.cardStyle}/>
      ) : (
        <TouchableOpacity
          style={styles.cardStyle}
          onPress={() => openCityScreen(el)}
        >
          <View style={styles.cardElem}>
            <Text style={{ fontSize: 20 }}>
              {el.city}, {el.country}
            </Text>
            <WeatherIcon icon={cityInfo.weather[0].icon} />
          </View>
          <View style={styles.cardElem}>
            <Text style={{ alignSelf: 'flex-end', fontSize: 25 }}>
              {roundNumber(cityInfo.main.temp)}°
            </Text>
            <Text>
              High: {roundNumber(cityInfo.main.temp_max)}° Low:{' '}
              {roundNumber(cityInfo.main.temp_min)}°
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardElem: {
    justifyContent: 'space-around',
  },
})
