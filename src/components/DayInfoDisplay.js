import { View, StyleSheet } from 'react-native'

export const DayInfoDisplay = ( ) => {
  return (
    <View style={styles.dayInfo}>
      <Text>days</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfo: {
    flex: 1,
  },
})
