import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { cityList } from '../stores/store-cityList.js'

export const RemoveCity = ({ cityData }) => {
  const navigation = useNavigation()
  const removeCityfromList = () => {
      let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
      fromList: true,
    }
    // Remove city from store and go back
    cityList.getState().removeCity(city.city)
    navigation.goBack()
  }

  return (
      <TouchableOpacity onPress={() => removeCityfromList()}>
        <Text>Remove</Text>
      </TouchableOpacity>
  )
}
