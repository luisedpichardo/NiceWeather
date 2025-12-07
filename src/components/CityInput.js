import { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
// Components
import LookForCity from './LookForCity.js';

export const CityInput = () => {
  const [city, setCity] = useState('');
  const lookForCityRef = useRef(null);

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add City"
        inputMode="text"
        onChangeText={setCity}
        value={city}
        style={{ flex: 1 }}
      />
      <LookForCity city={city} ref={lookForCityRef} />

      <TouchableOpacity
        title="Submit"
        onPress={() => {
          setCity('');
          lookForCityRef.current?.lookCity();
        }}
        style={styles.btn}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'center',
    marginRight: 10,
  },
});
