import { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

export const BackgroundWeather = ({ icon, children, style }) => {
  const [bgWeather, setBgWeather] = useState(['#fff', '#fff'])

  useEffect(() => {
    setBgWeather(selectBackground(icon))
  }, [icon])

  const selectBackground = icon => {
    switch (icon) {
      case '01d': // Clear Sky Day
        return ['#56CCF2', '#2F80ED']
      case 'o1n': // Clear Sky Night
        return ['#0f2027', '#203a43', '#2c5364']
      case '02d': // Few Clouds Day
        return ['#87CEEB', '#B0E0E6']
      case '02n': // Few Clouds Night
        return ['#1c1c2d', '#3a3a52']
      case '03d': // Scatterd Clouds
      case '03n':
        return ['#757F9A', '#D7DDE8']
      case '04d': // Broken Clouds
      case '04n':
        return ['#606c88', '#3f4c6b']
      case '09d': // Shower Rain
      case '09n':
        return ['#4b79a1', '#283e51']
      case '10d': // Rain Day
        return ['#74ebd5', '#ACB6E5']
      case '10n': // Rain Night
        return ['#141E30', '#243B55']
      case '11d': // Thunderstorm
      case '11n':
        return ['#232526', '#414345']
      case '13d': // Snow
      case '13n':
        return ['#E0EAFC', '#CFDEF3']
      default: // Default / Miss
        return ['#bdc3c7', '#2c3e50']
    }
  }

  return (
    <LinearGradient style={{ flex: 1, ...style }} colors={bgWeather}>
      {children}
    </LinearGradient>
  )
}
