import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// Components
import { SearchBtn } from './SearchBtn.js';

export const CityInput = () => {
  const [city, setCity] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add City"
        inputMode="text"
        onChangeText={setCity}
        value={city}
        style={{ flex: 1 }}
      />
      <SearchBtn city={city} />
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
