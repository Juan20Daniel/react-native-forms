import { Text, View } from 'react-native';
import { globalColors, globalStyles } from '../globalStyles/globalStyles';
import { Spinner } from '../components/Spinner';


export const Loading = () => {
    return (
        <View style={{flex:1, backgroundColor:globalColors.white, ...globalStyles.contentCenter}}>
            <Spinner />
            <Text style={{marginTop: 20}}>Loading...</Text>
        </View>
    )
}
