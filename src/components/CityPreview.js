import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { WeatherIcon } from './WeatherIcon'
import { Loading } from './Loading.js'
import { BackgroundWeather } from '../screens/BackgroundWeather.js'
import { roundNumber } from '../utils/roundNumber.js'
import { unitType } from '../stores/store-unitType'
import { useFetchWeatherPrev } from '../hooks/useFetchWeatherPrev.js'

export const CityPreview = ({ el }) => {
  const navigation = useNavigation()
  const { cityInfo, loader } = useFetchWeatherPrev(
    el.city + ',' + el.country,
    'weather',
    unitType.getState().unit,
  )

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
