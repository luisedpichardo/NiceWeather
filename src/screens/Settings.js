import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Components
import { TempOptSettings } from '../components/TempOptSettings.tsx';
// Stores
import { unitListStore } from '../store/unitStore';

export const Settings = () => {
  const navigation = useNavigation();
  const units = unitListStore(state => state.units)

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Settings</Text>
      <View style={styles.optionsCont}>
        <Text style={{ color: 'white', marginLeft: 20 }}>Temperature</Text>
        <View style={styles.tempCont}>
          {units.map(el => {
            return <TempOptSettings key={`${el.value}`} el={el} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
  },
  titleStyle: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
  optionsCont: {
    flex: 1,
    margin: 20,
  },
  tempCont: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 15,
  },
  optText: {
    color: 'white',
    fontSize: 20,
    margin: 5,
    marginLeft: 15,
  },
});
