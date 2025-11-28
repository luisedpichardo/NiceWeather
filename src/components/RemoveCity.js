import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Contexts
import { useCitiesUpdate } from '../contexts/CityContext.js'
// Reducers
import { ACTIONS } from '../reducers/CityReducer.js'

export const RemoveCity = ({ cityData }) => {
  const navigation = useNavigation()
  const dispatchCities = useCitiesUpdate()
  const removeCityfromList = () => {
    // Use context to call reducer
    dispatchCities({
      type: ACTIONS.REMOVE,
      payload: {
        city: cityData.name,
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
