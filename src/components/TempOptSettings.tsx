import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Contexts
import {
  useUnitUpdate,
  useUnitsUpdate,
  useUnits,
} from '../contexts/UnitContext.js';
// Local Storage
import { LocalStorageMMKV } from '../services/LocalStorage';
// Types
type El = {
  current: boolean;
  textUI: string;
  value: string;
};
type Props = {
  el: El;
};

export const TempOptSettings = ({ el }: Props) => {
  const navigation = useNavigation();
  const setUnit = useUnitUpdate();
  const setUnits = useUnitsUpdate();
  const units = useUnits();

  const { setUnitLocalStorage, setUnitsLocalStorage} = LocalStorageMMKV()

  const changeUnit = async () => {
    setUnit(el.value);
    // map to give a copy updating onle the value needed
    const newUnits = units.map((unit: El) => ({
      ...unit,
      current: unit.value === el.value,
    }));
    setUnits(newUnits);
    setUnitLocalStorage({ key: 'unit', value: el.value })
      .catch((err: any) => console.log(err));
    setUnitsLocalStorage({ key: 'unitsOpt', value: newUnits })
      .catch((err: any) => console.log(err));
    // navigate to main
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.cont} onPress={() => changeUnit()}>
      <Text style={styles.optText}>{el.textUI}</Text>
      {el.current ? (
        <Image
          source={require('../../assets/check.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optText: {
    color: 'white',
    fontSize: 20,
    margin: 5,
    marginLeft: 15,
  },
});
