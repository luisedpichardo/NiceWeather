import { View, StyleSheet } from 'react-native'

import { DayInfoDisplay } from './DayInfoDisplay.js'
import { WeekInfoDisplay } from './WeekInfoDisplay.js'

export const TempInfoDisplay = () => {
  return (
    <View style={styles.tempInfo}>
      <DayInfoDisplay />
      <WeekInfoDisplay />
    </View>
  )
}

const styles = StyleSheet.create({
  tempInfo: {
    flex: 30,
  },
})
