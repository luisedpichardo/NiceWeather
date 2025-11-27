import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Context
import { useCitiesUpdate } from '../contexts/CityContext.js'
import { ACTIONS } from '../reducers/CityReducer.js'

export const RemoveCity = ({ cityData }) => {
  const navigation = useNavigation()
  const dispatchCities = useCitiesUpdate()
  const removeCityfromList = () => {
    // Call reducer
    dispatchCities({
      type: ACTIONS.REMOVE,
      payload: {
        city: cityData.cityData.name,
      },
    })
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => removeCityfromList()}>
      <Text>Remove</Text>
    </TouchableOpacity>
  )
}
