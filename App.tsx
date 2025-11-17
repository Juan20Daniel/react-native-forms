import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/StackNavigaiton";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}