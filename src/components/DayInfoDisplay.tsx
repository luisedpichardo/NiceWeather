import { View, StyleSheet, Text } from 'react-native';
// Utils
import { roundNumber } from '../utils/roundNumber';
// Types
type Day = {
  day: number;
  max: number;
  min: number;
  month: number;
  weekDay: string;
};
type Props = {
  day: Day;
};

export const DayInfoDisplay = ({ day }: Props) => {
  return (
    <View style={styles.dayInfo}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{day.weekDay}</Text>
      <Text>
        {day.month}/{day.day}
      </Text>
      <Text style={{ fontSize: 10 }}>Max: {roundNumber(day.max)}°</Text>
      <Text style={{ fontSize: 10 }}>Min: {roundNumber(day.min)}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dayInfo: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 5,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
  },
});
