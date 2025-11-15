import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Image } from 'react-native'

export const Spinner = () => {
    const rotateValue = useRef(new Animated.Value(0)).current;
    
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
                width:100, 
                height:100,
                transform: [{rotate: spin}]
            }}
        />
    );
}
