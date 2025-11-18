import React from 'react'
import { DimensionValue, Pressable, StyleSheet, Text, View } from "react-native";
import { calcResolutionDivice } from "../helpers/calcResolutionDivice";
import { globalColors } from "../globalStyles/globalStyles";

interface Props {
    value?: string;
    maxWidth?: DimensionValue; 
    paddingHorizontal?: DimensionValue; 
    marginTop?: DimensionValue;
    onPress: () => void;
}

export const BtnAuthService = ({value='Value', maxWidth=500, paddingHorizontal=20,marginTop=0, onPress}:Props) => {
    return (
        <View style={{maxWidth:maxWidth, paddingHorizontal}}>
            <Pressable 
                style={({pressed}) => [
                    styles.btn, 
                    {
                        marginTop:marginTop,
                        opacity: pressed ? 0.4 : 1 
                    }
                ]} 
                onPress={() => onPress()}
            >
                <Text style={styles.value}>{value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: globalColors.white,
        borderWidth: 1,
        borderRadius: 20,
        height: calcResolutionDivice({low: 50, medium: 60}),
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        color: globalColors.black,
        fontSize: calcResolutionDivice({low: 15, medium: 20})
    }
});