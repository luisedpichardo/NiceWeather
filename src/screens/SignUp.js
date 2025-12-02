import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth'

export const SignUp = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToLogIn = () => {
    navigation.goBack()
  }

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
					getAuth().signOut()
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!')
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!')
          }

          Alert.alert(error)
        })
    } catch {
      Alert.alert('Error creating user')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Page</Text>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Text>Type your email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <Text>Type desired password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.btnStyle}>
            <TouchableOpacity onPress={createUser}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logIn}>
          <Text>Already a member?</Text>
          <TouchableOpacity onPress={goToLogIn}>
            <Text>Log in instaed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 30,
  },
  title: {
    flex: 1,
    fontSize: 30,
  },
  form: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 30,
    marginBottom: 60,
  },
  fields: {
    flex: 3,
    justifyContent: 'center',
  },
  btnStyle: {
    alignItems: 'flex-end',
  },
  logIn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
  },
})
