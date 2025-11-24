import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { unitType } from '../stores/store-unitType'

export const TempOptSettings = ({ el }) => {
  const navigation = useNavigation()
  const changeUnit = () => {
    unitType.getState().setUnit(el.value)
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
