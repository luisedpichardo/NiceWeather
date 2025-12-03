import GetLocation from 'react-native-get-location';

export const getLocationService = async () => {
  try {
    let location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    });
    return location;
  } catch {
    return {
      cod: 404,
      message: 'error finding city',
    };
  }
};
