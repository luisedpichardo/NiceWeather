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

import Config from '../../config.local.js'

export const CityInput = ({ citiesList }) => {
  const navigation = useNavigation()
  const [city, setCity] = useState('')

  const lookCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Config.API_WORK_KEY}&units=imperial`,
    )
      .then(response => {
        // Parse to json
        return response.json()
      })
      .then(json => {
        // Check if success
        if (json.cod === 200) {
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
    justifyContent:'center',
    marginRight: 10,
  },
})
