import { View, Text, StyleSheet } from 'react-native'

export const WeekInfoDisplay = () => {
  return (
    <View style={styles.weekInfo}>
      <View style={styles.dayPrev}>
        <Text>Monday</Text>
      </View>

      <View style={styles.dayPrev}>
        <Text>Tuesday</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weekInfo: {
    flex: 7,
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 10,
  },
  dayPrev: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 5,
  },
})
