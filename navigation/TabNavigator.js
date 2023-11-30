import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if(route.name === "Feed"){
                        iconName = focused
                            ? "book"
                            : "book-outline";
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? "create" : "create-outline";
                    }   
                    return <Ionicons name={iconName} size={"25"} color={color} />
                    
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator