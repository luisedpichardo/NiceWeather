import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Components
import { WeatherIcon } from './WeatherIcon.tsx'
import { Loading } from './Loading.tsx'
// Contexts
import { useUnit } from '../contexts/UnitContext.js'
// Hooks
import { useFetchWeatherLocPrev } from '../hooks/useFetchWeatherMyLocPrev.js'
// Screens
import { BackgroundWeather } from '../screens/BackgroundWeather.js'
// Utils
import { roundNumber } from '../utils/roundNumber.js'

export const MyCityPrev = ({ lat, long }) => {
  const navigation = useNavigation()
  const { cityInfo, loader } = useFetchWeatherLocPrev(
    lat,
    long,
    'weather',
    useUnit(),
  )

  const openCityScreen = () => {
    let payload = {
      cityData: cityInfo,
      myLoc: true,
    }
    navigation.navigate('Weather', payload)
  }

  return (
    <View>
      {loader ? (
        <Loading />
      ) : (
        <TouchableOpacity onPress={() => openCityScreen()}>
          <BackgroundWeather
            icon={cityInfo.weather[0].icon}
            style={styles.inWeather}
          >
            <View style={styles.inWeather}>
              <View style={styles.cardElem}>
                <Text style={{ fontSize: 20, ...styles.textWhite }}>
                  {cityInfo.name}, {cityInfo.sys.country}
                </Text>
                <Text style={styles.textWhite}>My Location</Text>
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
    marginTop: 10,
    marginBottom: 10,
  },
  cardElem: {
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  textWhite: {
    color: 'white',
  },
})
