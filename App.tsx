/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// Screens
import Main from './src/screens/Main.js';
import { DisplayWeather } from './src/screens/DisplayWeather.js';
import { Settings } from './src/screens/Settings.js';
// Stores
import { storeCities } from './src/store/citiesStore';
// Providers
import { UnitProvider } from './src/contexts/UnitContext.js';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Weather" component={DisplayWeather} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={storeCities}>
        <UnitProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </UnitProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
