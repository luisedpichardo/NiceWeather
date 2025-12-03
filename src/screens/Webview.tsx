import { View } from 'react-native'
import { WebView } from 'react-native-webview'

export const Webview = () => {
	return(
		<View
			style={{
				flex:1,
				marginTop: '20%'
			}}>
			<WebView source={{ uri: "https://images.google.com" }} />
		</View>
	)
}

