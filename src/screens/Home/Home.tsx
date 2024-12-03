import {
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
  } from 'react-native';

import { useGetDiscoverListQuery, DiscoverList } from '../../redux/api/apiSlice';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import styles from './styles'

const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const { 
        data: DiscoveryData = {} as DiscoverList,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDiscoverListQuery()

    const { results } = DiscoveryData

    if (isLoading) {
        console.log("loading...")
    } else if (isSuccess) {
        // content = results.map(result => <Text>{result.title}</Text>)
        console.log(results)
    } else if (isError) {
        // content = <div>{error.toString()}</div>
        console.log(error)
    }

    return (
        <>
            <StatusBar 
                barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <Header />
                {results?.map(result => <Text key={result?.id}>{result?.title}</Text>)}
            </ScrollView>
        </>
    )
}

export default Home