import { DimensionValue, KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { calcResolutionDivice } from '../helpers/calcResolutionDivice';
import { globalColors } from '../globalStyles/globalStyles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

interface Props {
    name:string;
    value: string;
    placeholder: string;
    placeholderFocus: string;
    focus: boolean;
    keyboardTypeOptions: KeyboardTypeOptions;
    marginTop?: DimensionValue; 
    inputPassword?: boolean;
    onFocus: (field:string, value:boolean) => void;
    onChangeText:(field:string, value:string) => void;
}

export const Input = ({
    name,
    value,
    placeholder='Placeholder',
    placeholderFocus='Placeholder focus',
    focus, 
    keyboardTypeOptions,
    marginTop=0, 
    inputPassword=false,
    onFocus, 
    onChangeText
}:Props) => {
    const [ showPassword, setShowPassword ] = useState(inputPassword??false);
    return (
        <View style={styles.container}>
            <View style={{
                ...styles.border,
                marginTop:marginTop, 
                backgroundColor: focus ? globalColors.soft_blue : globalColors.white}}
            >
                <View style={{
                    ...styles.boxInput, 
                    borderWidth: 2, 
                    borderColor: focus ? globalColors.azure_blue : globalColors.dark_gray}}
                >
                    <Text style={{
                        ...styles.label, 
                        transform: [{translateY: (focus || value!=='') ? -17 : 0}], 
                        fontSize: (focus || value!=='') ? 12 : 20}}
                    >
                        {focus ? placeholderFocus : placeholder }
                    </Text>
                    <TextInput 
                        style={{
                            ...styles.input, 
                            height: (focus || value!=='') ? '70%' : '100%',
                            paddingRight:!inputPassword ? 50 : 100,
                        }} 
                        value={value}
                        keyboardType={keyboardTypeOptions}
                        onFocus={() => onFocus(name, true)}
                        onChangeText={(text) => {onChangeText(name, text)}}
                        secureTextEntry={showPassword}
                    />
                    {inputPassword &&
                        <Pressable 
                            style={{...styles.btnShowPass, right:(value!=='') ? 50 : 10}} 
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {showPassword 
                                ?   <Icons name="eye-off" size={20}/>
                                :   <Icons name="eye" size={25}/>
                            }
                        </Pressable>
                    }
                    {(value !== '') &&
                        <Pressable style={styles.btnClear} onPress={() => onChangeText(name, '')}>
                            <Icons name="close" size={20}/>
                        </Pressable>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
        paddingHorizontal: 20,
    },
    border: {
        borderRadius: 20,
        height: calcResolutionDivice({low: 50, medium: 60, high: 70}),
        justifyContent: 'center',
        paddingHorizontal: calcResolutionDivice({low: 3}),
    },
    boxInput: {
        position: 'relative',
        borderRadius: 17,
        backgroundColor: globalColors.white,
        height: calcResolutionDivice({low: 44, medium: 54, high: 64}),
        justifyContent: 'center',
    },
    label: {
        paddingLeft: 19,
    },
    input: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 20,
    },
    btnShowPass: {
        position: 'absolute',
        padding: 5,
        borderRadius: 15,
    },
    btnClear: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#EEEEEE',
        padding: 5,
        borderRadius: 15,
        zIndex: 2
    }
});
