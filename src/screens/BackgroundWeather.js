import { useEffect, useState } from 'react'
import { View } from 'react-native'

export const BackgroundWeather = ({ icon, children }) => {
  const [bgWeather, setBgWeather] = useState('')

  useEffect(() => {
    selectBackground()
  }, [])

  const selectBackground = () => {
    if (icon === '01d') setBgWeather('#87CEEB')
    else if (icon === '01n') setBgWeather('#0B132B')
    else if (icon === '02d') setBgWeather('#A0C4FF')
    else if (icon === '02n') setBgWeather('#1C2541')
    else if (icon === '03d') setBgWeather('#B0BEC5')
    else if (icon === '03n') setBgWeather('#3A4750')
    else if (icon === '04d') setBgWeather('#90A4AE')
    else if (icon === '04n') setBgWeather('#2C3E50')
    else if (icon === '09d') setBgWeather('#4E89AE')
    else if (icon === '09n') setBgWeather('#1B2A41')
    else if (icon === '10d') setBgWeather('#5DADE2')
    else if (icon === '10n') setBgWeather('#162447')
    else if (icon === '11d') setBgWeather('#34495E')
    else if (icon === '11n') setBgWeather('#0D1B2A')
    else if (icon === '13d') setBgWeather('#D6EAF8')
    else if (icon === '13n') setBgWeather('#566573')
    else if (icon === '50d') setBgWeather('#DCDCDC')
    else setBgWeather('#7F8C8D')
  }

  return (
    <View style={{ flex: 1, backgroundColor: bgWeather }}>{children}</View>
  )
}
