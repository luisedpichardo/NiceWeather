import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text } from 'react-native'

import { TempOptSettings } from '../components/TempOptSettings.js'
// Context
import { useUnits } from '../contexts/UnitContext.js'

export const Settings = ({ route }) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Settings</Text>
      <View style={styles.optionsCont}>
        <Text style={{ color: 'white', marginLeft: 20 }}>Temperature</Text>
        <View style={styles.tempCont}>
          {useUnits().map(el => {
            return <TempOptSettings key={`${el.value}`} el={el} />
          })}
        </View>
      </View>
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
  optionsCont: {
    flex: 1,
    margin: 20,
  },
  tempCont: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 15,
  },
  optText: {
    color: 'white',
    fontSize: 20,
    margin: 5,
    marginLeft: 15,
  },
})
