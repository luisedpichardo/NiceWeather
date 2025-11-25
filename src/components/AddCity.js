import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { cityList } from '../stores/store-cityList.js'
// import { CityReducer } from '../reducers/CityReducer.js'

export const AddCity = ({ cityData }) => {
  const navigation = useNavigation()
  const addCityToList = () => {
    let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
      fromList: true,
    }
    // // Call reducer
    // CityReducer([], {
    //   type: 'ADD',
    //   payload: {
    //     city: city
    //   }
    // })
    cityList.getState().addCity(city)
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => addCityToList()}>
      <Text>Add To List</Text>
    </TouchableOpacity>
  )
}
