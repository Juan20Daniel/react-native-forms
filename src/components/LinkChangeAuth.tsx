import { Pressable, StyleSheet, Text, View } from 'react-native';
import { calcResolutionDivice } from '../helpers/calcResolutionDivice';
import { globalColors } from '../globalStyles/globalStyles';

interface Props {
    textInfo: string;
    textLink: string;
    action: () => void;
}

export const LinkChangeAuth = ({textInfo, textLink, action}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{textInfo}</Text>
            <Pressable onPress={() => action()}>
                <Text style={{...styles.text, ...styles.textLink}}>{textLink}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        gap: 10,
        flexDirection: 'row',   
        justifyContent: 'center'
    },
    text: {
        fontSize: calcResolutionDivice({low: 12, medium: 14})
    },
    textLink: {
        color: globalColors.azure_blue
    }
})