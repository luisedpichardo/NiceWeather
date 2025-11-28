import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Services
import { weatherService } from '../services/WeatherSercive.js'
// Context
import { useCities } from '../contexts/CityContext.js'
import { useUnit } from '../contexts/UnitContext.js'

export const SearchBtn = ({ city }) => {
  const navigation = useNavigation()
  const unit = useUnit()
  const cities = useCities()

  const lookCity = () => {
    weatherService(city, 'weather', unit)
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          // Check if city exists in cities context
          if (cities.some(elem => elem.city === json.name)) {
            navigation.navigate('Weather', {
              cityData: { ...json },
            })
            return
          }
          navigation.navigate('Weather', {
            cityData: { ...json },
          })
          return
        }
        // Other wise throw an error
        throw Error(json.message)
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }

  return (
    <TouchableOpacity
      title="Submit"
      onPress={() => lookCity(city)}
      style={styles.btn}
    >
      <Text>Search</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    marginRight: 10,
  },
})
