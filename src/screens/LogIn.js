import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';

export const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () => {
    navigation.navigate('Sign Up');
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
          // Add a notification that is logged in
          console.log('logged in');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

          Alert.alert('error', error.message);
        });
    } catch (e) {
      Alert.alert('Error logging user');
    }
  };

  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={login}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 30,
    paddingTop: '30%',
    paddingBottom: '30%',
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
});
