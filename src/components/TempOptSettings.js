import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Context
import { useUnitUpdate, useUnitsUpdate, useUnits } from '../contexts/UnitContext.js'

export const TempOptSettings = ({ el }) => {
  const navigation = useNavigation()
  const setUnit = useUnitUpdate()
  const setUnits = useUnitsUpdate()
  const units = useUnits()

  const changeUnit = () => {
    setUnit(el.value)
    // map to give a copy updating onle the value needed
    setUnits(units.map(unit => ({
      ...unit,
      current: unit.value === el.value
    })))
    // navigate to main
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={styles.cont} onPress={() => changeUnit()}>
      <Text style={styles.optText}>{el.textUI}</Text>
      {el.current ? (
        <Image
          source={require('../../assets/check.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optText: {
    color: 'white',
    fontSize: 20,
    margin: 5,
    marginLeft: 15,
  },
})
