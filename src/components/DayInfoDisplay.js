import { View, StyleSheet } from 'react-native'

import { HrInfoDisplay } from './HrInfoDisplay.js'

export const DayInfoDisplay = () => {
  return (
    <View style={styles.dayInfo}>
      <HrInfoDisplay />
      <HrInfoDisplay />
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfo: {
    flex: 1,
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
})
