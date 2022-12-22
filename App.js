import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./src/components/navigators/BottomTabs";
import StackNavigator from "./src/components/navigators/StackNavigator";
import DrawerNav from './src/components/navigators/DrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BottomTabs /> */}
      <DrawerNav />
    </NavigationContainer>
  );
}
