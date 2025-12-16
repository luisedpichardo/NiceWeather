import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Stores
import { unitListStore } from '../store/unitStore';
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
  const {setUnit, unit} = unitListStore((state:any) => state);

  const changeUnit = async () => {
    setUnit(el.value);
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.cont} onPress={() => changeUnit()}>
      <Text style={styles.optText}>{el.textUI}</Text>
      {el.value === unit ? (
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
