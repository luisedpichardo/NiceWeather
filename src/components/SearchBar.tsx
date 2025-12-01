import { View, StyleSheet, Image } from 'react-native'
// Components
import { CityInput } from './CityInput.tsx'

export const SearchBar = () => {
  return (
    <View style={styles.inputStyle}>
      <View>
        <Image
          source={require('../../assets/search.png')}
          style={styles.imgStyle}
        />
      </View>
      <CityInput />
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
