import { View, Text, ActivityIndicator } from 'react-native'

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        margin: 10,
        padding: 20,
        borderRadius: 25,
      }}
    >
      <ActivityIndicator size="large" color="black" />
      <Text
        style={{
          color: 'black',
        }}
      >
        Loading...
      </Text>
    </View>
  )
}
