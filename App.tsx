import { SafeAreaView, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Home from './src/screens/Home'

if (__DEV__) {
    // eslint-disable-next-line
    require('./ReactotronConfig')
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <Home />
        </SafeAreaView>
    )
}

export default App
