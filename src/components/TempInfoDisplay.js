import { View, Text, StyleSheet } from 'react-native'



export const TempInfoDisplay = () => {
    return (
        <View style={styles.tempInfo}>
        <View style={styles.dayInfo}>
          <View style={styles.hrInfo}>
            <Text>Time</Text>
            <Text>Temp</Text>
          </View>

          <View style={styles.hrInfo}>
            <Text>Time</Text>
            <Text>Temp</Text>
          </View>
        </View>

        <View style={styles.weekInfo}>
          <View style={styles.dayPrev}>
            <Text>Monday</Text>
          </View>

          <View style={styles.dayPrev}>
            <Text>Tuesday</Text>
          </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({

  tempInfo: {
    flex: 45,
  },
  dayInfo: {
    flex: 1,
    backgroundColor: 'aliceblue',
    // paddingTop: 20,
    // paddingBottom: 20,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  hrInfo: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 5,
  },
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