import { View, StyleSheet } from 'react-native'

import { DayInfoDisplay } from './DayInfoDisplay.js'

export const TempInfoDisplay = ({ infoPerHrList }) => {
  return (
    <View style={styles.tempInfo}>
      <DayInfoDisplay infoPerHrList={infoPerHrList} />
    </View>
  )
}

const styles = StyleSheet.create({
  tempInfo: {
    // flex: 30,
  },
})
