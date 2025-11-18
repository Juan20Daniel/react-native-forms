import { useReducer } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { globalColors } from '../globalStyles/globalStyles';
import { HeaderAuth } from '../components/HeaderAuth';
import { Input } from '../components/Input';
import { formReducer } from '../reducers/FormReducer';
import { Form } from '../types/Form';
import { Button } from '../components/Button';
import { LinkChangeAuth } from '../components/LinkChangeAuth';
import { BtnAuthService } from '../components/BtnAuthService';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '../navigation/StackNavigaiton';

interface Props extends StackScreenProps<RootStackParamsList, 'Login'>{}

const initialStateForm:Form = {
    values: {
        email: {value:'', focus:false},
        password: {value:'', focus:false},
    },
    errors: {
        email: {status:null, valid:null},
        password: {status:null, valid:null},      
    }
}

export const Login = ({navigation}:Props) => {
    const [ formState, dispatch ] = useReducer(formReducer, initialStateForm);
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
        });
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={{...styles.container}} >
                <HeaderAuth 
                    title="Bienvenido a Nuestra App"
                    subTitle='Inicia sesión con tu cuenta o crea una'
                />
                <Input
                    name='email'
                    placeholder='Ingresa tu correo electrónico'
                    placeholderFocus='Correo electrónico'
                    value={formState.values.email.value}
                    focus={formState.values.email.focus}
                    marginTop={50}
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
                <Button 
                    value='INICIAR SESIÓN'
                    marginTop={30}
                    onPress={() => {}}
                />
                <LinkChangeAuth 
                    textInfo='¿Aún no tienes una cuenta?'
                    textLink='crea una aquí'
                    action={() => navigation.navigate('Register')}
                />
                <BtnAuthService 
                    value='Iniciar con Google'
                    marginTop={40}
                    onPress={() => {}}
                />
                <BtnAuthService 
                    value='Iniciar con Facebook'
                    marginTop={20}
                    onPress={() => {}}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        flex:1,
        justifyContent: 'center',
    }
});