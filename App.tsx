/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Main from './src/screens/Main.js'
import { DisplayWeather } from './src/screens/DisplayWeather.js'
import { Settings } from './src/screens/Settings.js'
import { SignUp } from './src/screens/SignUp.js'
import { LogIn} from './src/screens/LogIn.js'
import { Account } from './src/screens/Account.js'
// Providers
import { UnitProvider } from './src/contexts/UnitContext.js'
import { CitiesProvider } from './src/contexts/CityContext.js'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true
    }}>
      <Stack.Screen name="Log In" component={LogIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
    </Stack.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitle: '',
      headerTransparent: true
    }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Weather" component={DisplayWeather} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = React.useState(null)

  function handleAuthStatehange(user: any) {
    setUser(user)
  }

  React.useEffect(() => {
    const subs = onAuthStateChanged(getAuth(), handleAuthStatehange)
    return subs
  })

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CitiesProvider>
        <UnitProvider>
          <NavigationContainer>
            { !user ? (
              <AuthStack />
            ): (
              <MyStack />
            )}
          </NavigationContainer>
        </UnitProvider>
      </CitiesProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
