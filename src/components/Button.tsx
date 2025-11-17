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

export const Button = ({value='Value', maxWidth=500, paddingHorizontal=20,marginTop=0, onPress}:Props) => {
    return (
        <View style={{maxWidth:maxWidth, paddingHorizontal}}>
            <Pressable style={{...styles.btn, marginTop:marginTop}} onPress={() => onPress()}>
                <Text style={styles.value}>{value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       
    },
    btn: {
        backgroundColor: globalColors.azure_blue,
        borderRadius: 20,
        height: calcResolutionDivice({low: 50, medium: 60}),
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        color: globalColors.white,
        fontSize: calcResolutionDivice({low: 15, medium: 20})
    }
});