import { Text, TouchableOpacity } from 'react-native'

import { cityList } from '../stores/store-cityList.js'
import { useNavigation } from '@react-navigation/native'

export const AddCity = ({ cityData }) => {
  const navigation = useNavigation()
  const addCityToList = () => {
    let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
      fromList: true,
    }
    cityList.getState().addCity(city)
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => addCityToList()}>
      <Text>Add To List</Text>
    </TouchableOpacity>
  )
}
