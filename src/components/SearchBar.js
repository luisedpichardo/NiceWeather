import { View, StyleSheet, Image } from 'react-native'

import { CityInput } from './CityInput.js'

export const SearchBar = ({ citiesList }) => {
  return (
    <View style={styles.inputStyle}>
      <View>
        <Image
          source={require('../../assets/search.png')}
          style={styles.imgStyle}
        />
      </View>
      <CityInput citiesList={citiesList} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 20,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  imgStyle: {
    width: 18,
    height: 18,
    margin: 10,
  },
})
