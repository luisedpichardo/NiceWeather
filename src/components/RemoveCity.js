import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import { CityReducer } from '../reducers/CityReducer.js'
// Context
import { useCities, useCitiesUpdate } from '../contexts/CityContext.js'

export const RemoveCity = ({ cityData }) => {
  const navigation = useNavigation()
  const cities = useCities()
  const setCities = useCitiesUpdate()
  const removeCityfromList = () => {
    // // Call reducer
    // CityReducer([], {
    //   type: 'REMOVE',
    //   payload: {
    //     city: city
    //   }
    // })
    // Remove city from context and go back
    setCities(cities.filter(elem => elem.city !== cityData.cityData.name))
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={() => removeCityfromList()}>
      <Text>Remove</Text>
    </TouchableOpacity>
  )
}
