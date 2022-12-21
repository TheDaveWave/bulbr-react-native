import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Info from "./src/components/Info";
import Home from "./src/components/Home";
import Settings from "./src/components/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/*  <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTransparent: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Info" component={Info} />
          <Tab.Screen name ="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
