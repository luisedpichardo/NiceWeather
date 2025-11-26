import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { cityList } from '../stores/store-cityList.js'
import { weatherService } from '../services/WeatherSercive.js'

export const CityInput = ({ citiesList }) => {
  const navigation = useNavigation()
  const [city, setCity] = useState('')

  const lookCity = () => {
    weatherService(city, 'weather')
      .then(json => {
        // Check if success
        if (json.cod === 200) {
          // Check if city exists in list
          if (cityList.getState().cityExists(json.name)) {
            navigation.navigate('Weather', {
              fromList: true,
              cityData: { ...json },
              citiesList: citiesList,
            })
            return
          }
          navigation.navigate('Weather', {
            fromList: false,
            cityData: { ...json },
            citiesList: citiesList,
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
    <View style={styles.form}>
      <TextInput
        placeholder="Add City"
        inputMode="text"
        onChangeText={setCity}
        value={city}
        style={{ flex: 1 }}
      />
      <TouchableOpacity
        title="Submit"
        onPress={() => lookCity(city)}
        style={styles.btn}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'center',
    marginRight: 10,
  },
})
