import { Button, Text, View } from "react-native";

function Home({navigation}) {
    return (
        <View>
            <Text>This is the Home page!</Text>
            {/* <Button 
                title="Info Page"
                onPress={() => navigation.push('Info', {infoSecret: "This is a secret"})}
            /> */}
        </View>
    );
}

export default Home;