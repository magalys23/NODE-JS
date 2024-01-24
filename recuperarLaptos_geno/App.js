import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptosList } from "./screens/LaptosList";
import { LaptosForms } from "./screens/LaptopsForms";

export default function App() {
  const StackContacts= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="LaptoslistNav">
        <StackContacts.Screen name="LaptoslistNav" component={LaptosList}/>
        <StackContacts.Screen name="LaptosFormNav" component={LaptosForms}/>
      </StackContacts.Navigator>

    </NavigationContainer>
  );
}
