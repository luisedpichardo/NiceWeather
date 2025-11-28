import { View, StyleSheet } from 'react-native'
// Components
import { HrInfoDisplay } from './HrInfoDisplay.js'

export const TempHrDisplay = ({ infoPerHrList }) => {
  return (
      <View style={styles.hrInfo}>
        {infoPerHrList.map((el, i) => {
          return <HrInfoDisplay key={i} hr={el} />
        })}
      </View>
  )
}

const styles = StyleSheet.create({
  hrInfo: {
    flex: 1,
  },
})

