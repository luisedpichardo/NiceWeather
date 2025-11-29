import { useEffect, useState } from 'react'
import { View } from 'react-native'
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
        console.log(error)
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
