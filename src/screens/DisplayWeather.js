import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// Components
import { TemperatureHdr } from '../components/TemperatureHdr.tsx';
import { TempHrDisplay } from '../components/TempHrDisplay.tsx';
import { AddCity } from '../components/AddCity.tsx';
import { RemoveCity } from '../components/RemoveCity.tsx';
import { Loading } from '../components/Loading.tsx';
import { TempDayDisplay } from '../components/TempDayDisplay.tsx';
// Contexts
import { useUnit } from '../contexts/UnitContext.js';
// Stores
import { storeCities } from '../store/citiesStore.tsx';
// Screens
import { BackgroundWeather } from './BackgroundWeather.js';
// Services
import { weatherService } from '../services/WeatherSercive.js';

export const DisplayWeather = ({ route }) => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [forecastData, setForecastData] = useState(null);
  const unit = useUnit();
  const cities = storeCities.getState().cities;

  const getForecastByName = () => {
    weatherService(route.params.cityData.name, 'forecast', unit)
      .then(json => {
        if (json.cod === '200') {
          setForecastData(json);
          setLoader(false);
          return;
        }
        // Other wise throw an error
        throw new Error(json.message);
      })
      .catch(error => {
        Alert.alert(error.message);
        navigation.goBack();
      });
  };

  useEffect(() => {
    getForecastByName();
    navigation.setOptions({
      headerRight: () => headerRight(),
    });
  }, [navigation]);

  const headerRight = () => {
    return (
      <View>
        {!route.params.myLoc ? (
          <View style={styles.addRemStyle}>
            {cities.some(elem => route.params.cityData.name === elem.city) ? (
              <RemoveCity cityData={route.params.cityData} />
            ) : (
              <AddCity cityData={route.params.cityData} />
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loader ? (
        <Loading />
      ) : (
        <BackgroundWeather
          icon={route.params.cityData.weather[0].icon}
          style={{ flex: 1 }}
        >
          <View style={styles.infoContainer}>
            <View style={{ flex: 4, borderRadius: 25 }}>
              <TemperatureHdr weatherInfo={route.params.cityData} />
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView horizontal={true} style={{ borderRadius: 25 }}>
                <TempDayDisplay infoPerHrList={forecastData.list} />
              </ScrollView>
            </View>
            <View style={{ flex: 10, borderRadius: 25 }}>
              <ScrollView style={{ marginTop: 10, marginBottom: 10 }}>
                <TempHrDisplay infoPerHrList={forecastData.list} />
              </ScrollView>
            </View>
          </View>
        </BackgroundWeather>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingTop: 70,
    padding: 30,
    paddingBottom: 50,
  },
  addRemStyle: {
    padding: 10,
    alignSelf: 'flex-end',
  },
});
