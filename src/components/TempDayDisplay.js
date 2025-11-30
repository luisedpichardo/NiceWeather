import { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
// Components
import { DayInfoDisplay } from './DayInfoDisplay.js'
// Utils
import { calculateDays } from '../utils/calculateDays.js'

export const TempDayDisplay = ({ infoPerHrList }) => {
  const daysOfWeek = useMemo(
    () => calculateDays(infoPerHrList),
    [infoPerHrList],
  )

  return (
    <View style={styles.dayInfo}>
      {daysOfWeek.map((el, i) => {
        return <DayInfoDisplay key={i} day={el} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfo: {
    borderRadius: 25,
    flexDirection: 'row',
  },
})
