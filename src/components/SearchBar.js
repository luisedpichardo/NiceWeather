import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native'

import { CityInput } from './CityInput.js'

export const SearchBar = () => {
  return (
    <View style={styles.inputStyle}>
      <View>
				<Image
					source={require('../../assets/search.png')}
					style={styles.imgStyle}/>
      </View>
      <CityInput />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    // flex: 1,
    borderRadius: 20,
    // paddingLeft: 10,
    // fontSize: 12,
    // fontStyle: 'italic',
    // color: 'white',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
	imgStyle: {
		width: 18,
		height: 18,
    margin: 10
	},
})
