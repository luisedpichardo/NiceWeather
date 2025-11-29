import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
// Components
import { Loading } from './Loading.js'
import { MyCityPrev } from './MyCityPrev.js'
// Services
import { getLocationService } from '../services/GetLocationService.js'

export const MyLocation = () => {
  const [location, setLocation] = useState('')
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    getLocationService()
      .then(res => {
        setLocation(res)
        setLoader(false)
        return res
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }, [])

  return (
    <View>
      {loader ? (
        <Loading />
      ) : (
        <View>
          <MyCityPrev lat={location.latitude} long={location.longitude} />
        </View>
      )}
    </View>
  )
}
