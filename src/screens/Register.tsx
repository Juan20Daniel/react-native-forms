import { useEffect, useReducer } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '../globalStyles/globalStyles';
import { HeaderAuth } from '../components/HeaderAuth';
import { Input } from '../components/Input';
import { formReducer } from '../reducers/FormReducer';
import { Form } from '../types/Form';
import { Button } from '../components/Button';
import { LinkChangeAuth } from '../components/LinkChangeAuth';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '../navigation/StackNavigaiton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props extends StackScreenProps<RootStackParamsList, 'Login'>{}

const initialStateForm:Form = {
    values: {
        firstname: {value:'', focus:false},
        lastname: {value:'', focus:false},
        phone: {value:'', focus:false},
        email: {value:'', focus:false},
        password: {value:'', focus:false},
        confirmPass: {value:'', focus:false},
    },
    errors: {
        firstname: {status:null, valid:null},
        lastname: {status:null, valid:null},
        phone: {status:null, valid:null},
        email: {status:null, valid:null},
        password: {status:null, valid:null},     
        confirmPass: {status:null, valid:null},     
    }
}

export const Register = ({navigation}:Props) => {
    const [ formState, dispatch ] = useReducer(formReducer, initialStateForm);
    const { top } = useSafeAreaInsets();
    useEffect(() => {
        
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            handlePress();
        });
        return () => {
            hideKeyboard.remove();
        }
    },[]);
    const handleChangeInput = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_VALUE',
            field:field,
            value:value
        });
    }
    const handleFocus = (field:string, value:boolean) => {
        dispatch({
            type:'PUT_FOCUS',
            field:field,
            value: value
        });
    }
    const handlePress = () => {
        dispatch({
            type:'CLEAR_ALL_FOCUS'
        })
    }
    return (
        <View style={{position:'relative', flex:1}}>
                <View style={{position:'absolute', width: '100%', height:top, backgroundColor: 'white', zIndex:1}} />
                <KeyboardAwareScrollView 
                    style={{...styles.container, marginTop:top}} 
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{flex:1}}>
                        <HeaderAuth 
                            title="Bienvenido a Nuestra App"
                            subTitle='Inicia sesión con tu cuenta o crea una'
                        />
                        <Input
                            name='firstname'
                            placeholder='Ingresa tu nombre'
                            placeholderFocus='Nombre'
                            focus={formState.values.firstname.focus}
                            value={formState.values.firstname.value}
                            marginTop={50}
                            keyboardTypeOptions='default'
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Input
                            name='lastname'
                            placeholder='Ingresa tu apellido'
                            placeholderFocus='Apellido'
                            value={formState.values.lastname.value}
                            focus={formState.values.lastname.focus}
                            marginTop={20}
                            keyboardTypeOptions='default'
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Input
                            name='phone'
                            placeholder='Ingresa tu teléfono'
                            placeholderFocus='Telefóno'
                            value={formState.values.phone.value}
                            focus={formState.values.phone.focus}
                            marginTop={20}
                            keyboardTypeOptions='number-pad'
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Input
                            name='email'
                            placeholder='Ingresa tu correo electrónico'
                            placeholderFocus='Correo electrónico'
                            value={formState.values.email.value}
                            focus={formState.values.email.focus}
                            marginTop={20}
                            keyboardTypeOptions='email-address'
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Input
                            name='password'
                            placeholder='Ingresa tu contraseña'
                            placeholderFocus='Contraseña'
                            value={formState.values.password.value}
                            focus={formState.values.password.focus}
                            marginTop={20}
                            keyboardTypeOptions='default'
                            inputPassword
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Input
                            name='password'
                            placeholder='Confirmar contraseña'
                            placeholderFocus='Confirmar contraseña'
                            value={formState.values.password.value}
                            focus={formState.values.password.focus}
                            marginTop={20}
                            keyboardTypeOptions='default'
                            inputPassword
                            onFocus={handleFocus}
                            onChangeText={handleChangeInput}
                        />
                        <Button 
                            value='INICIAR SESIÓN'
                            marginTop={30}
                            onPress={() => {}}
                        />
                        <LinkChangeAuth 
                            textInfo='¿Ya tienes una cuenta? '
                            textLink='inicia sesión'
                            action={() => navigation.navigate('Login', {animationType:'slide_from_left'})}
                        />
                        <View style={{width: '100%', height: 100}} />
                    </View>
                </KeyboardAwareScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        flex:1,
        paddingBottom: 50
    }
});