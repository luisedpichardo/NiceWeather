import { View, Text, ActivityIndicator } from 'react-native'

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      <ActivityIndicator size="large" color="white" />
      <Text
        style={{
          color: 'white',
        }}
      >
        Loading...
      </Text>
    </View>
  )
}
