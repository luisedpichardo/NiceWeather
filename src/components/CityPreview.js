import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import Config from '../../config.local.js'
import { WeatherIcon } from './WeatherIcon'
import { Loading } from './Loading.js'
import { BackgroundWeather } from '../screens/BackgroundWeather.js'
import { roundNumber } from '../utils/roundNumber.js'
import { unitType } from '../stores/store-unitType.js'

export const CityPreview = ({ el }) => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(true)
  const [cityInfo, setCityInfo] = useState(null)
  const unit = unitType.getState().unit

  useEffect(() => {
    getCityInfo()
  }, [unit])

  const getCityInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${el.city},${el.country}&appid=${Config.API_WORK_KEY}&units=${unit}`,
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
        <Loading />
      ) : (
        <TouchableOpacity onPress={() => openCityScreen(el)}>
          <BackgroundWeather
            icon={cityInfo.weather[0].icon}
            style={styles.inWeather}
          >
            <View style={styles.inWeather}>
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
            </View>
          </BackgroundWeather>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inWeather: {
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  cardElem: {
    justifyContent: 'center',
  },
})
