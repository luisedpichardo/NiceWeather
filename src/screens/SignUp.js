import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createUserWithEmailAndPasswordService } from '../services/FirebaseService.js';

export const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const goToLogIn = () => {
    navigation.goBack();
  };

  const createUser = () => {
    /** TODO
     * Make notifications instead of alerts
     */
    createUserWithEmailAndPasswordService(email, password, firstName, lastName)
      .then(() => {
        Alert.alert('Created User Successful')
      })
      .catch(err => {
        Alert.alert('Error: ', err.message)
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Text>First Name</Text>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <Text>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
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
