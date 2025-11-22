import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { SearchBar } from '../components/SearchBar.js'
import { CityPreview } from '../components/CityPreview.js'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      cities: [
        { city: 'el paso', country: 'usa' },
        { city: 'atlanta', country: 'usa' },
        { city: 'miami', country: 'usa' },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Weather</Text>
        <SearchBar />
        <View style={styles.citiesCont}>
          {this.state.cities.map((el, i) => {
            return <CityPreview key={i} el={el} />
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
  },
  titleStyle: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
  citiesCont: {
    flex: 15,
  },
})

export default Main
