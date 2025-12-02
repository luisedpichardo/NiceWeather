import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { signOut, getAuth } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const Account = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [age, setAge] = useState('')
  // const [imageUri, setImageUri] = useState("../../assets/account_pp_default.jpg")

  const logOut = () => {
    signOut(getAuth())
  }

  const updateAccount = () => {
    if (newFirstName && newLastName && age)
      firestore().collection('users').doc(getAuth().currentUser.email).set({
        email: getAuth().currentUser.email,
        firstName: newFirstName,
        lastName: newLastName,
        age: age,
      })
    else Alert.alert('All field must be filled')
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
    firestore()
      .collection('users')
      .doc(getAuth().currentUser.email)
      .get()
      .then(userData => {
        setFirstName(userData.data().firstName)
        setLastName(userData.data().lastName)
      })
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/account_pp_default.jpg')}
            style={styles.imgStyle}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text>Update Image</Text>
            <TouchableOpacity>
              <Text>Choose from library</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Take a picture</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fields}>
          <Text style={styles.txt}>First Name</Text>
          <TextInput
            placeholder={firstName}
            value={newFirstName}
            onChangeText={setNewFirstName}
            style={styles.input}
          />
          <Text style={styles.txt}>Last Name</Text>
          <TextInput
            placeholder={lastName}
            value={newLastName}
            onChangeText={setNewLastName}
            style={styles.input}
          />
          <Text style={styles.txt}>Age</Text>
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.btnStyle}>
            <TouchableOpacity onPress={updateAccount}>
              <Text style={styles.txt}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 30,
    paddingTop: '30%',
    paddingBottom: '30%',
  },
  form: {
    flex: 3,
    backgroundColor: 'gray',
    borderRadius: 25,
    padding: 30,
  },
  fields: {
    flex: 3,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  btnStyle: {
    alignItems: 'flex-end',
  },
  txt: {
    color: 'white',
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
})
