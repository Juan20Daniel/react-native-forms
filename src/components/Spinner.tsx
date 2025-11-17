import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { calcResolutionDivice } from '../helpers/calcResolutionDivice';

export const Spinner = () => {
    const rotateValue = useRef(new Animated.Value(0)).current;
    const sizeSpinner = calcResolutionDivice({low:40, medium:70, high:100});
    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateValue,{
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ).start();
    }, []);
    const spin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });
    return (
        <Animated.Image
            source={require('../assets/img-spinner.png')} 
            style={{
                width:sizeSpinner, 
                height:sizeSpinner,
                transform: [{rotate: spin}]
            }}
        />
    );
}
