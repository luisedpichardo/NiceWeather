import { View, StyleSheet } from 'react-native'

import { HrInfoDisplay } from './HrInfoDisplay.js'

export const DayInfoDisplay = ({ infoPerHrList }) => {
  return (
    <View style={styles.dayInfo}>
      {infoPerHrList.map((el, i) => {
        return <HrInfoDisplay key={i} hr={el} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dayInfo: {
    flex: 1,
  },
})
