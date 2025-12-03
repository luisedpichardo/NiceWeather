import { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
// Components
import SearchBtn from './SearchBtn.js';

export const CityInput = () => {
  const [city, setCity] = useState('');
  const searchBtnRef = useRef(null);

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add City"
        inputMode="text"
        onChangeText={setCity}
        value={city}
        style={{ flex: 1 }}
      />
      <SearchBtn city={city} ref={searchBtnRef} />

      <TouchableOpacity
        title="Submit"
        onPress={() => searchBtnRef.current?.lookCity()}
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
