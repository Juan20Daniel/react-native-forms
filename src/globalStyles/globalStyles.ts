import { StyleSheet } from "react-native";

const globalColors = {
    white: '#FFFFFF',
    black: '#000000',
    soft_blue: '#D0E8FF',
    azure_blue: '#4084C3',
    dark_gray: '#616161',
    light_gray: '#EEEEEE',
}
const globalStyles = StyleSheet.create({
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { globalColors, globalStyles };