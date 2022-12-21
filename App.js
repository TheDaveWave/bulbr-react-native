import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./src/components/navigators/BottomTabs";
import StackNavigator from "./src/components/navigators/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomTabs />
    </NavigationContainer>
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
