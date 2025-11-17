import { Home } from "../screens/Home";
import { Loading } from "../screens/Loading";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { createStackNavigator, StackAnimationName } from '@react-navigation/stack';

export type RootStackParamsList = {
    Loading: {animationType?:StackAnimationName};
    Home: {animationType?:StackAnimationName};
    Login: {animationType?:StackAnimationName};
    Register: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen 
                name="Loading" 
                component={Loading} 
                options={({route}) => ({
                    animation:route.params?.animationType??'fade'  
                })} 
            />
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={({route}) => ({
                    animation: route.params?.animationType??'fade'
                })}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={({route}) => {
                    console.log(route.params)
                    return {
                        animation:route.params?.animationType??'fade'
                    }
                }} 
            />
        </Stack.Navigator>
    );
}