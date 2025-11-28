import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Contexts
import { useCitiesUpdate } from '../contexts/CityContext.js'
import { ACTIONS } from '../reducers/CityReducer.js'

export const AddCity = ({ cityData }) => {
  const navigation = useNavigation()
  const dispatchCities = useCitiesUpdate()
  const addCityToList = () => {
    let city = {
      city: cityData.cityData.name,
      country: cityData.cityData.sys.country,
    }
    // Call reducer
    dispatchCities({
      type: ACTIONS.ADD,
      payload: {
        city: city,
      },
    })
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => addCityToList()}>
      <Text>Add To List</Text>
    </TouchableOpacity>
  )
}
