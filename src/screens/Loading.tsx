import { Text, View } from 'react-native';
import { globalColors, globalStyles } from '../globalStyles/globalStyles';
import { Spinner } from '../components/Spinner';
import { useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../navigation/StackNavigaiton';
import { calcResolutionDivice } from '../helpers/calcResolutionDivice';


export const Loading = () => {
    const navigatin = useNavigation<NavigationProp<RootStackParamsList, 'Loading'>>();
    useEffect(() => {
        setTimeout(() => {
            navigatin.reset({
                index: 0,
                routes: [{name: 'Login'}],
            })
        }, 5000);
    }, []);
    return (
        <View style={{flex:1, backgroundColor:globalColors.white, ...globalStyles.contentCenter}}>
            <Spinner />
            <Text style={{marginTop: 20, fontSize: calcResolutionDivice({low: 15, medium: 20})}}>Cargando...</Text>
        </View>
    )
}