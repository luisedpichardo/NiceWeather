import { View, Text, TouchableOpacity } from 'react-native'

import { cityList } from '../stores/store-cityList.js'

export const AddCity = ({ cityData }) => {
  const addCityToList = () => {
    let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
      fromList: true,
    }
    cityList.getState().addCity(city)
  }

  return (
      <TouchableOpacity onPress={() => addCityToList()}>
        <Text>Add To List</Text>
      </TouchableOpacity>
    </View>
  )
}
