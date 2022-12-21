import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Info from './Info';

const Tab = createBottomTabNavigator();

function BottomTabs({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
    );
}

export default BottomTabs;