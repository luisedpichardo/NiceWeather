import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CityPreview = ({ el }) => {
  const navigation = useNavigation()

  const openCityScreen = el => {
    navigation.navigate('Weather', { formList: true, ...el })
  }

  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => openCityScreen(el)}
    >
      <View style={styles.cardElem}>
        <Text>
          {el.city}, {el.country}
        </Text>
        <Text>Temp</Text>
      </View>
      <View style={styles.cardElem}>
        <Text>Weather</Text>
        <Text>high low</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    margin: 20,
    padding: 30,
    borderRadius: 25,
  },
  cardElem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
