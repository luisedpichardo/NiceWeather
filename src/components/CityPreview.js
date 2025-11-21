import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const CityPreview = ({city, state}) => {
  return (
    <TouchableOpacity 
      style={styles.cardStyle}
      onPress={console.log(`city: ${city}, state: ${state}`)}
      >
      <View style={styles.cardTopElem}>
        <Text>{city}, {state}</Text>
        <Text>Temp</Text>
      </View>
      <View style={styles.cardTopElem}>
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
  cardTopElem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
