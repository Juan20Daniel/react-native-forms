import { useEffect, useReducer } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalColors } from '../globalStyles/globalStyles';
import { HeaderAuth } from '../components/HeaderAuth';
import { Input } from '../components/Input';
import { formReducer } from '../reducers/FormReducer';
import { Form } from '../types/Form';
import { Button } from '../components/Button';
import { isTablet } from '../helpers/isTablet';

const initialStateForm:Form = {
    values: {
        email: {value:'', focus:false},
        password: {value:'', focus:false},
        test: {value:'', focus:false},
        test2: {value:'', focus:false},

    },
    errors: {
        email: {status:null, valid:null},
        password: {status:null, valid:null},
        test: {status:null, valid:null},
        test2: {status:null, valid:null},        
    }
}

export const Login = () => {
    const [ formState, dispatch ] = useReducer(formReducer, initialStateForm);
    const { top } = useSafeAreaInsets();
    
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
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <KeyboardAvoidingView 
                style={{...styles.container, paddingTop: top}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    keyboardShouldPersistTaps="always" 
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{height: isTablet ? 60 : 30 }} />
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
                        name='test'
                        placeholder='Input de prueba'
                        placeholderFocus='Prueba'
                        value={formState.values.test.value}
                        focus={formState.values.test.focus}
                        marginTop={20}
                        keyboardTypeOptions='default'
                        onFocus={handleFocus}
                        onChangeText={handleChangeInput}
                    />
                     <Input
                        name='test2'
                        placeholder='Input de prueba 2'
                        placeholderFocus='Prueba 2'
                        value={formState.values.test2.value}
                        focus={formState.values.test2.focus}
                        marginTop={20}
                        keyboardTypeOptions='default'
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
                    <View style={{height: 30}} />
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        flex:1,
        justifyContent: 'center',
        paddingBottom: 50
    }
});