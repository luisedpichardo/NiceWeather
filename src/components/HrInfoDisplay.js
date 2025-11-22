import { View, Text, StyleSheet } from 'react-native'

export const HrInfoDisplay = () => {
  return (
    <View style={styles.hrInfo}>
      <Text>Time</Text>
      <Text>Temp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  hrInfo: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 5,
  },
})
