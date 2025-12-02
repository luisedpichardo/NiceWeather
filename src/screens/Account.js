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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export const Account = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState('')
  const [newFirstName, setNewFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [age, setAge] = useState('')
  const [newAge, setNewAge] = useState('')
  const [imageUri, setImageUri] = useState('')

  const logOut = () => {
    signOut(getAuth())
  }

  const updateAccount = () => {
    if (newFirstName) {
      firestore().collection('users').doc(getAuth().currentUser.email).update({
        email: getAuth().currentUser.email,
        firstName: newFirstName,
      })
    }
    if (newLastName) {
      firestore().collection('users').doc(getAuth().currentUser.email).update({
        email: getAuth().currentUser.email,
        lastName: newLastName,
      })
    }
    if (newAge) {
      firestore().collection('users').doc(getAuth().currentUser.email).update({
        email: getAuth().currentUser.email,
        age: newAge,
      })
    } else if (age) {
      firestore().collection('users').doc(getAuth().currentUser.email).update({
        email: getAuth().currentUser.email,
        age: age,
      })
    }
    // Missing Update Image
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
        if (userData.data().age) setAge(userData.data().age)
      })
  }, [navigation])

  const openLibrary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      })
      if (result.errorCode) {
        Alert.alert('Error', result.errorMessage)
      } else if (result.assets && result.assets.length > 0) {
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to launch library.')
    }
  }

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.5,
        cameraType: 'back',
        saveToPhotos: true,
      })
      if (result.errorCode) {
        Alert.alert('Error', result.errorMessage)
      } else if (result.assets && result.assets.length > 0) {
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to launch camera.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={
              imageUri
                ? {
                    uri: imageUri,
                  }
                : require('../../assets/account_pp_default.jpg')
            }
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
            <TouchableOpacity onPress={openLibrary}>
              <Text>Choose from library</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera}>
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
            placeholder={age}
            value={newAge}
            onChangeText={setNewAge}
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
