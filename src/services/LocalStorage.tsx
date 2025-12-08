// import AsyncStorage from '@react-native-async-storage/async-storage'
import { MMKV } from 'react-native-mmkv';

// const localStorage = new MMKV({
//   id: 'NiceWeatherTemp',
// });

type SetObjUnit = {
  key: string;
  value: string;
};
type SetObjUnits = {
  key: string;
  value: object;
};

export const LocalStorageMMKV = () => {
  // TODO
  // console.log(__DEV__ && globalThis?.isDebuggingInChrome)

  // Set Temperature
  const setUnitLocalStorage = async ({ key, value }: SetObjUnit) => {
    try {
      console.log('key: ', key);
      console.log('value: ', value);
      // await localStorage.set('key', JSON.stringify(value))
      // console.log(JSON.stringify(value))
      console.log('Trying to save ^!');
    } catch (error: any) {
      throw new Error(error);
    }
  };
  const setUnitsLocalStorage = async ({ key, value }: SetObjUnits) => {
    try {
      console.log('value: ', value);
      console.log('key: ', key);
      // await localStorage.set('key', JSON.stringify(value))
      // console.log(JSON.stringify(value))
      console.log('Trying to save ^!');
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return {
    setUnitLocalStorage,
    setUnitsLocalStorage
  }
};




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
