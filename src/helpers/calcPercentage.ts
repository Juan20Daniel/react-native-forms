import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const widthPercentage = (percentage: number) => (width * percentage) / 100;
export const heightPercentage = (percentage: number) => (height * percentage) / 100;