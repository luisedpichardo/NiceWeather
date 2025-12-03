import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// Components
import { CityPreview } from '../components/CityPreview.js';
import { MyLocation } from '../components/MyLocation.tsx';
import { SearchBar } from '../components/SearchBar.tsx';
// Contexts
import { CitiesContext } from '../contexts/CityContext.js';

class Main extends React.Component {
  static contextType = CitiesContext;

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ margin: 5 }}
          onPress={() => this.props.navigation.navigate('Settings')}
        >
          <Text style={{ fontSize: 16, color: 'white' }}>Settings</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    const citiesList = this.context;
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Weather</Text>
        <SearchBar />
        <ScrollView style={styles.scroll}>
          <MyLocation />
          <View>
            {citiesList.map(el => {
              return <CityPreview key={`${el.city}-${el.country}`} el={el} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
  scroll: {
    flex: 1,
    margin: 20,
    borderRadius: 25,
    marginBottom: 40,
  },
});

export default Main;
