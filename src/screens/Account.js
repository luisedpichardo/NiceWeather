import { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { signOut, getAuth } from '@react-native-firebase/auth'

export const Account = () => {
  const navigation = useNavigation()

  const logOut = () => {
    signOut(getAuth())
  }

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
      headerRight: () => (
        <View>
          <TouchableOpacity onPress={logOut}>
            <Text style={{ color: 'white' }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>My Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
