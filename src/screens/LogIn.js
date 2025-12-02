import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export const LogIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToSignUp = () => {
    navigation.navigate('Sign Up')
  }

  const validateInput = e => {
    console.log(e, email, password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In Page</Text>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
						style={styles.input}
          />
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
						style={styles.input}
          />
          <View style={styles.btnStyle}>
            <TouchableOpacity onPress={e => validateInput(e)}>
              <Text>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logIn}>
          <Text>Not a member?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text>Sign Up instaed</Text>
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
