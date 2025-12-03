import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const firstSignUpWithEmailAndPassword = async (
  email,
  password,
  firstName,
  lastName,
) => {
  try {
    // get response for create user
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    const user = userCredential.user;
    // Send user to firestore
    await firestore().collection('users').doc(user.email).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
    });
    // Sign out user
    await getAuth().signOut();
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Email in Use', 'That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Invalid Email', 'That email address is invalid!');
    } else {
      Alert.alert('Error', error.message ?? String(error));
    }
  }
};
