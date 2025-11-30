import { View } from 'react-native'
// Components
import { HrInfoDisplay } from './HrInfoDisplay.js'

export const TempHrDisplay = ({ infoPerHrList }) => {
  return (
    <View>
      {infoPerHrList.map((el, i) => {
        return <HrInfoDisplay key={i} hr={el} />
      })}
    </View>
  )
}
