import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Movies from './pages/Movies';

const Drawer = createDrawerNavigator();

export default function Routes() {
    const icons = {
        Home: { name: 'home' },
        Movies: { name: 'storage' },
        Profile: { name: 'done-all' },
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    drawerIcon: ({ color, size }) => {
                        const { name } = icons[route.name];

                        return <MaterialIcons name={name} size={size} color={color} />
                    },
                })}
            >
                <Drawer.Screen
                    name="Home"
                    options={{ drawerLabel: 'Tela inicial' }}
                    component={Home}
                />
                <Drawer.Screen
                    name="Profile"
                    options={{ drawerLabel: 'Perfis' }}
                    component={Profile}
                />
                <Drawer.Screen
                    name="Movies"
                    options={{ drawerLabel: 'Filmes' }}
                    component={Movies}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
