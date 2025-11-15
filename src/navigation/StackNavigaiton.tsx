import { Home } from "../screens/Home";
import { Loading } from "../screens/Loading";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamsList = {
    Loading: undefined;
    Home: undefined;
    Login: undefined;
    Register: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}