// import AsyncStorage from '@react-native-async-storage/async-storage'

// // Add Data
// export const setLocalStorage = async (key, value) => {
//   try {
//     await AsyncStorage.setItem(key, JSON.stringify(value))
//     console.log(JSON.stringify(value))
//     console.log('Data saved successfully!')
//   } catch (error) {
//     console.error('Error saving data:', error)
//   }
// }

// export const retrieveCitiesStorage = async () => {
//   console.log('hola')
//   try {
//     const value = await AsyncStorage.getAllKeys()
//     if (value !== null) {
//       console.log('there are objects in storage')
//       try {
//         const cities = await Promise.all(
//           value.map(async (cityName) => {
//             const currCity = JSON.parse(await AsyncStorage.getItem(cityName));
//             // console.log(currCity)
//             return currCity;
//           })
//         );
//         console.log(cities)
//         return cities
//       } catch {
//         return {
//           cod: 400,
//           message: 'Error reading cities'
//         }
//       }
//     } else {
//       console.log('No data found in Local Storage')
//       return null
//     }
//   } catch (error) {
//     console.error('Error retrieving data:', error)
//     return null
//   }
// }

// export const clearStorage = async () => {
// try {
//     const value = await AsyncStorage.getAllKeys()
//        await AsyncStorage.multiRemove(value);
//   } catch (error) {
//     console.error('Error deleting data:', error)
//     return null
//   }
// }
