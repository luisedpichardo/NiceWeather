import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { cityList } from '../stores/store-cityList.js'
import { SearchBar } from '../components/SearchBar.js'
import { CityPreview } from '../components/CityPreview.js'

class Main extends React.Component {
  unsubscribe = null
  constructor() {
    super()
    this.state = {
      cities: cityList.getState().cities,
    }
  }

  componentDidMount() {
    // subscribe to store changes
    this.unsubscribe = cityList.subscribe(newState => {
      this.setState({ cities: newState.cities })
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Weather</Text>
        <SearchBar citiesList={this.state.cities} />
        <ScrollView style={{ flex: 1 }}>
          <View>
            {this.state.cities.map( el => {
              return <CityPreview key={`${el.city}-${el.country}`} el={el} />
            })}
          </View>
        </ScrollView>
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
    paddingTop: 70,
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
})

export default Main
