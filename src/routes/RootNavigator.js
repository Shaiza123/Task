import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/index';
import WorkOutScreen from '../screens/WorkOutScreen/index';
import WorkOutDetailScreen from '../screens/WorkOutDetailScreen/index';
import Settings from '../screens/Settings/index';
import Notifications from '../screens/Notifications/index';
import Screen2 from '../screens/Screen2/index';
import Screen3 from '../screens/Screen3/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name={'WorkOutScreen'} component={WorkOutScreen} />
        <HomeStack.Screen name={'WorkOutDetailScreen'} component={WorkOutDetailScreen} />
      </HomeStack.Navigator>
    );
  }

const Router = () => {
    const CustomButton = ({children, onPress}) => (
        <TouchableOpacity style={{ top: hp(-3), justifyContent: 'center', alignItems: 'center' }} onPress={onPress} >
            <View style={{ height: hp(10), width: hp(10), borderRadius: hp(4), backgroundColor: '#fff' }}>{children}</View>
        </TouchableOpacity>
    )

    const Tabs = () => (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#fff',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#5E3B63',
                    borderTopRightRadius: hp(3),
                    borderTopLeftRadius: hp(3),
                    height: hp(12)
                },
            }}
        >
            <Tab.Screen
                name="HomeTabs"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="user-large" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image style={{ tintColor: color }} resizeMode='contain' source={require("../assets/Daak.png")} />
                    ),
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image resizeMode='contain' source={require("../assets/Screen3.png")} />
                    ),
                    tabBarButton: (props) => (
                        <CustomButton {... props}/>
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="settings" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'DashBoard'} component={Tabs} />
        </Stack.Navigator>
    )
}

export default Router