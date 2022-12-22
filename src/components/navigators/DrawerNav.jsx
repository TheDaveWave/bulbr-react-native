import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import Info from "../Info";
import Settings from "../Settings";

const Drawer = createDrawerNavigator();

function DrawerNav() {
    <Drawer.Navigator
        initialRouteName="Home"
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Info" component={Info} />
        <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
}

export default DrawerNav;