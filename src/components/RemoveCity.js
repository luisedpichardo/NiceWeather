import { View, Text, TouchableOpacity } from 'react-native'

import { cityList } from '../stores/store-cityList.js'
import { useNavigation } from '@react-navigation/native'

export const RemoveCity = ({ cityData }) => {
  // const navigation = useNavigation()
  console.log('before removing', cityData)
  // const removeCityfromList = () => {
  //   let city = {
  //     city: cityData.cityData.name,
  //     country: cityData.cityData.sys.country,
  //     fromList: true,
  //   }
  //   cityList.getState().addCity(city)
  //   navigation.goBack()
  // }

  return (
      <TouchableOpacity onPress={() => console.log('removing...')}>
        <Text>Remove</Text>
      </TouchableOpacity>
  )
}
