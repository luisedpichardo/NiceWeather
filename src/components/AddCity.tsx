import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Contexts
import { useCitiesUpdate } from '../contexts/CityContext.js'
import { ACTIONS } from '../reducers/CityReducer.js'
// Types
type Clouds = {
  all: number
}
type Coord = {
  lat: number,
  lon: number,
}
type Main = {
  feels_like: number,
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_max: number,
  temp_min: number,
}
type Sys = {
  country: string,
  id: number,
  sunrise: number,
  sunset: number,
  type: 2,
}
type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string,
}
type Wind = {
  deg: number,
  speed: number,
}
type CityData = {
  base: string,
  clouds: Clouds,
  cod: number,
  coord: Coord,
  dt: number,
  id: number,
  main: Main,
  name: string,
  sys: Sys,
  timezone: number,
  visibility: number,
  weather: Array<Weather>,
  wind: Wind,
}
type Props = {
  cityData: CityData
}

export const AddCity = ({ cityData }: Props) => {
  const navigation = useNavigation()
  const dispatchCities = useCitiesUpdate()
  const addCityToList = () => {
    let city = {
      city: cityData.name,
      country: cityData.sys.country,
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
