import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Home';
import Info from '../Info';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
