import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { calcResolutionDivice } from "../helpers/calcResolutionDivice";
import { globalColors } from "../globalStyles/globalStyles";
interface Props {
    title: string;
    subTitle: string;
}
export const HeaderAuth = ({title, subTitle}:Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <Pressable style={styles.btnClose}>
                <Ionicons name="close" color={globalColors.white} size={30} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    boxTitle: {
        maxWidth: 400,
        gap: 20,
        paddingHorizontal: 20,
    },
    title: {
        width: 280,
        fontSize: calcResolutionDivice({low: 30, medium: 45}),
    },
    subTitle: {
        width: 190,
        fontSize: calcResolutionDivice({low: 12, medium: 15}),
    },
    btnClose: {
        position: 'absolute',
        right: 0,
        paddingRight: 10,
        paddingVertical: 7,
        paddingLeft: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: globalColors.black
    }
})