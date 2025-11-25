import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { WeatherIcon } from './WeatherIcon'
import { Loading } from './Loading.js'
import { BackgroundWeather } from '../screens/BackgroundWeather.js'
import { roundNumber } from '../utils/roundNumber.js'
import { getCityInfoService } from '../services/WeatherSercive.js'

export const CityPreview = ({ el }) => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(true)
  const [cityInfo, setCityInfo] = useState(null)


  useEffect(() => {
    getCityInfo()
  }, [])

  const getCityInfo = () => {
    getCityInfoService(el.city, el.country)
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
                <Text style={{ fontSize: 20, ...styles.textWhite }}>
                  {el.city}, {el.country}
                </Text>
                <WeatherIcon icon={cityInfo.weather[0].icon} />
              </View>

              <View style={styles.cardElem}>
                <Text
                  style={{
                    alignSelf: 'flex-end',
                    fontSize: 25,
                    ...styles.textWhite,
                  }}
                >
                  {roundNumber(cityInfo.main.temp)}°
                </Text>
                <Text style={styles.textWhite}>
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
  textWhite: {
    color: 'white',
  },
})
