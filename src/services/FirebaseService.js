import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Create User
export const createUserWithEmailAndPasswordService = async (
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
      throw Error('Email in Use', 'That email address is already in use!')
    } else if (error.code === 'auth/invalid-email') {
      throw Error('Invalid Email', 'That email address is invalid!')
    } else {
      throw Error('Error', error.message ?? String(error))
    }
  }
};

// Log in user
export const signInWithEmailAndPasswordService = async (email, password) => {
  try {
    // Log in
    await signInWithEmailAndPassword(getAuth(), email, password);
  } catch (e) {
    throw Error(e.message)
  }
};

// Sign out User
export const signOutService = () => {
  signOut(getAuth());
};
