import { View, Text, StyleSheet } from 'react-native'

export const AddRemoveCityBtn = () => {
  return (
    <View style={styles.addRemStyle}>
      <Text>Add/Remove</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addRemStyle: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-end',
  },
})
