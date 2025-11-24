import { View, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Loading } from '../components/Loading.js'

export const Settings = ({ route }) => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(true)
  const [forecastData, setForecastData] = useState(null)

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
  },
  titleStyle: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
})
