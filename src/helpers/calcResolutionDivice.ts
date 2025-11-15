import { Dimensions, DimensionValue, PixelRatio } from "react-native";

interface Params {
    low: number;
    medium: number;
    high: number;
}
const {width, height} = Dimensions.get('window');
const pixelRadion = PixelRatio.get();

const widthPx = Math.round(width * pixelRadion);
const heightPx = Math.round(height * pixelRadion);

export const calcResolutionDivice = ({low, medium, high}: Params) => {
    if(!medium || !high) return low;
    const totalResolution = widthPx + heightPx;
    if(totalResolution <= 2420) return low;
    if(totalResolution <= 3580) return medium??low;
    return high??medium??low;
}