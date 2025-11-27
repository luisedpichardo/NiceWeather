import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import { CityReducer } from '../reducers/CityReducer.js'
// Context
import { useCities, useCitiesUpdate } from '../contexts/CityContext.js'

export const AddCity = ({ cityData }) => {
  const navigation = useNavigation()
  const cities = useCities()
  const setCities = useCitiesUpdate()
  const addCityToList = () => {
    let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
    }
    // // Call reducer
    // CityReducer([], {
    //   type: 'ADD',
    //   payload: {
    //     city: city
    //   }
    // })
    setCities([city, ...cities])
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => addCityToList()}>
      <Text>Add To List</Text>
    </TouchableOpacity>
  )
}
