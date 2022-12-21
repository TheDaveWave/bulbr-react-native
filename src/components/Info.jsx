import { Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});

function Info({route, navigation}) {
    // const {infoSecret} = route.params;
  return (
    <View style={styles.container}>
      <Text>This is the Info page!</Text>
      {/* <Text>Secret: {infoSecret}</Text> */}
      {/* <Button 
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
       <Button 
        title="Back"
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
}

export default Info;
